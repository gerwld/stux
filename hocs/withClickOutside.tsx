import React, { FC, useEffect, useRef, useState, ComponentType } from "react";

export type WithClickOutsideProps = {
  refElement?: React.RefObject<HTMLDivElement>;
  ignoreRef?: React.RefObject<HTMLDivElement>;
  isShow?: boolean;
  setShow?: (value: boolean) => void;
  toggleShow?: () => void;
  blockScroll?: boolean;
};

const withClickOutside = <P extends object>(
  WrappedComponent: ComponentType<P>
): FC<P & WithClickOutsideProps> => {
  return ({ blockScroll = false, ...props }) => {
    const [isShow, setShow] = useState(!!props.isShow);
    const ref = useRef<HTMLDivElement>(null);
    const ignoreRef = useRef<HTMLDivElement>(null);

    const toggleShow = () =>{setShow((prev) => !prev)};

    useEffect(() => {
      const onClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;

        if (
          ref.current &&
          !ref.current.contains(target) &&
          (!ignoreRef.current || !ignoreRef.current.contains(target))
        ) {
          if(props.toggleShow) props.toggleShow();
          setShow(false);
        }
      };

      document.addEventListener("mousedown", onClickOutside);
      return () => document.removeEventListener("mousedown", onClickOutside);
    }, []);

    useEffect(() => {
      if (blockScroll) {
        document.documentElement.style.overflow = (props.isShow || isShow) ? "hidden" : "";
        document.documentElement.style.height = (props.isShow || isShow) ? "100vh" : "";        
      }
    }, [props.isShow, isShow, blockScroll]);

    return (
      <WrappedComponent
        {...(props as P)}
        refElement={ref}
        ignoreRef={ignoreRef}
        setShow={setShow}
        isShow={props.isShow ? props.isShow : isShow}
        toggleShow={props.toggleShow ? props.toggleShow : toggleShow}
      />
    );
  };
};

export default withClickOutside;
