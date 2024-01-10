import React from "react";
import useViewModel from "./view-model";
import { cx } from "@emotion/css";
import { useStyle } from "./styles";
import { SIZE } from "@/_constants/components/component-size";
import { FieldInputProps } from "react-final-form";

type Props = {
  id: string;
  name: string;
  className?: string;
  size?: Omit<SIZE, SIZE.LARGE | SIZE.EXTRA>;
  disabled?: boolean;
  checked?: boolean;
  isToggleSubmit?: boolean;
};

const Checkbox = ({
  id,
  name,
  className,
  size = SIZE.MEDIUM,
  checked,
  disabled,
  isToggleSubmit,
}: Props) => {
  const { checkboxSizeStyle, baseStyle, disabledStyle } = useStyle({
    size,
    disabled,
  });
  const { input, onChange } = useViewModel({ name, isToggleSubmit });

  return (
    <div className={cx(checkboxSizeStyle, "relative")}>
      <input
        id={id}
        {...input}
        name={name}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        checked={checked}
        className={cx(className, baseStyle, disabledStyle)}
      />
    </div>
  );
};

export default Checkbox;
