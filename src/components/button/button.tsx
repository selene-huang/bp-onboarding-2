import React, { MouseEvent } from "react";
import "./button.css";

// HINT: Use this in ButtonProps to determine how the button is styled
export enum ButtonType {
  "button-green",
  "button-white",
  "button-clear",
  "button-clearAlt",
}

// HINT: Use this in ButtonProps to determine how the button text is styled
export enum ButtonTextType {
  "button-text-white",
  "button-text-green",
  "button-text-grey",
}

interface ButtonProps {
  text: string; 
  onPress: Function;
  buttonType: string;
  textType: string;
}

const Button: React.FC<ButtonProps> = ({text, onPress, buttonType, textType}) => {
  return (
    <button onClick={(event: MouseEvent<HTMLElement>) => { onPress() }} className="App-button" id={buttonType}>
      <p className="App-button-text" id={textType}>
        {text}
      </p>
    </button>
  );
};

export default Button;