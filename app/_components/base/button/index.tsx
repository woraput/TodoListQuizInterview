import { ButtonVariant } from "@/_constants/components/button";
import { cx } from "@emotion/css";
import Link from "next/link";
import React, { MouseEventHandler, ReactNode } from "react";
import { useStyle } from "./style.";
import Icon from "../icon";
import { AppIconEnum } from "../icon/view-model";

type Props = {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  navigateTo?: string;
  disabled?: boolean;
  variant?: ButtonVariant;
  type?: "reset" | "submit" | "button";
  icon?: AppIconEnum;
};

const Button = ({
  className = "",
  type = "button",
  onClick,
  children,
  navigateTo,
  disabled = false,
  variant = ButtonVariant.DEFAULT,
  icon,
}: Props) => {
  const { variantStyle, disabledStyle, buttonSizeStyle, linkStyle } = useStyle({
    variant,
    disabled,
  });

  return (
    <button
      className={cx(className, variantStyle, disabledStyle, buttonSizeStyle)}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {variant == ButtonVariant.LINK && navigateTo ? (
        <Link href={navigateTo} className={linkStyle}>
          <u>{children}</u>
        </Link>
      ) : (
        ""
      )}
      {variant == ButtonVariant.ICON && icon ? <Icon icon={icon} /> : ""}
      {variant == ButtonVariant.DEFAULT && <span>{children}</span>}
    </button>
  );
};

export default Button;
