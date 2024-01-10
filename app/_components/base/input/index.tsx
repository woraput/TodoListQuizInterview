import React, { RefObject } from "react";
import useViewModel from "./view-model";
import { cx } from "@emotion/css";
import { useStyle } from "./style";

type Props = {
  name: string;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
  placeholder?: string;
  inputRef?: RefObject<HTMLInputElement>;
};

const Input = ({
  name,
  className,
  placeholder,
  disabled = false,
  readOnly = false,
  inputRef,
}: Props) => {
  const { input, meta } = useViewModel({ name });
  const { inputSizeStyle, inputStyle } = useStyle();
  return (
    <div className="relative h-full w-full">
      <input
        ref={inputRef}
        {...input}
        disabled={disabled}
        className={cx(className, inputStyle, inputSizeStyle)}
        placeholder={placeholder ?? undefined}
        aria-invalid={meta.error ? "true" : "false"}
        readOnly={readOnly}
      />
      {meta.error && (
        <div className="mt-1.5 flex text-sm">
          <p className="text-error-500 mr-auto">{meta.error}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
