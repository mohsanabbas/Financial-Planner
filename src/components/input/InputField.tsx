import * as React from 'react';

interface InputFieldProps {
  labelText: string;
  onChange: any;
  values: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  labelText,
  onChange,
  values
}) => {
  return (
    <div className="amount">
      <div className="amount__field">
        <label className="amount__field__label">{labelText}</label>
        <input
          className="amount__field__input"
          name="amount"
          value={values}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
