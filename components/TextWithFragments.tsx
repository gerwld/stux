import React from "react";

interface TextWithFragmentProps {
  text: string;
  fragments?: boolean;
}

const TextWithFragment: React.FC<TextWithFragmentProps> = ({ text, fragments }) => {
  const lines = text.split(/<br\s*\/?>/);

  return (
    <>
      {lines.map((line, index) => (
        <React.Fragment key={index + line +"_gv"}>
          {fragments ? line.split(" ").map(word => 
            <React.Fragment key={index +word +"_gt"}>
              <span style={{display: "inline-block",marginRight: "0.2em"}}>{word}</span>
              </React.Fragment>
          ) : line}
          {index < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
};

export default TextWithFragment;
