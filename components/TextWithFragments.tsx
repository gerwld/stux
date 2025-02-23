import React from "react";

interface TextWithFragmentProps {
    text: string;
  }
  
  const TextWithFragment: React.FC<TextWithFragmentProps> = ({ text }) => {
    return (
      <>
        {text.split(/<br\s*\/?>/).map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < text.split(/<br\s*\/?>/).length - 1 && <br />}
          </React.Fragment>
        ))}
      </>
    );
  };
  
  export default TextWithFragment;
  