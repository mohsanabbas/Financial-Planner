import * as React from 'react';

interface ButtonProps {
  buttonText?: string;
  disabled?: boolean;
}
function onButtonClick() {
  console.log('button clicked');
}
export const Button: React.FC<ButtonProps> = ({
  buttonText = 'Confirm',
  disabled
}) => {
  return (
    <button className="Button" disabled={disabled} onClick={onButtonClick}>
      {buttonText}
    </button>
  );
};
