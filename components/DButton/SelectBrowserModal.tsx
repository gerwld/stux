import React, { FC } from 'react'
import style from './style.module.css';
import withClickOutside, { WithClickOutsideProps } from '@/hocs/withClickOutside';

type SelectBrowserModalProps = {
    blockScroll: boolean
}

const SelectBrowserModal: FC<SelectBrowserModalProps & WithClickOutsideProps> = ({
    toggleShow,
    isShow,
    refElement,
  }) => {
  return (
    <div className={style.content}>
      <button onClick={toggleShow} className={style.wrongbrowser_btn}>
        Not your browser?
      </button>

      <div className={`${style.modal} ${isShow ? style.modal_visible : ""}`}>
        <div ref={refElement} className={style.modal_block}>
          gweewg
        </div>
      </div>
    </div>
  );
};

export default withClickOutside<SelectBrowserModalProps>(SelectBrowserModal);