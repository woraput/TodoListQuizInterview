import { ButtonColor, ButtonVariant } from "@/_constants/components/button";

export const useStyle = ({
  variant,
  disabled,
}: {
  color?: ButtonColor;
  variant: ButtonVariant;
  disabled: boolean;
}) => {
  const variantStyle = {
    "bg-primary-600 rounded-lg bg-gray-200 p-2 md:p-4 flex items-center justify-center":
      variant === ButtonVariant.DEFAULT,
    "bg-white w-fit p-2 border rounded-sm": variant === ButtonVariant.ICON,
    "bg-transparent": variant === ButtonVariant.LINK,
  };

  const disabledStyle = disabled
    ? "pointer-events-none cursor-not-allowed opacity-90 disabled:text-gray-300"
    : "";

  const buttonSizeStyle = "h-10 p-1 text-2xs md:text-base md:h-11 md:p-2";

  const linkStyle = "text-sm md:text-lg md:text-2xl";

  return { variantStyle, disabledStyle, buttonSizeStyle, linkStyle };
};
