import React from "react";

interface TextWithBreaksProps {
    text: string;
  }
  
  const TextWithBreaks: React.FC<TextWithBreaksProps> = ({ text }) => {
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
  
  export default TextWithBreaks;
  