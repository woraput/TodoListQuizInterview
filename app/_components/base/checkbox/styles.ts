import { SIZE } from "@/_constants/components/component-size";

export const useStyle = ({
  size,
  disabled,
}: {
  size?: Omit<SIZE, SIZE.LARGE | SIZE.EXTRA>;
  disabled?: boolean;
}) => {
  const textSizeStyle = {
    "text-sm": size === SIZE.SMALL,
    "text-base": size === SIZE.MEDIUM,
  };

  const checkboxSizeStyle = {
    "h-4 w-4": size === SIZE.SMALL,
    "h-5 w-5": size === SIZE.MEDIUM,
  };

  const baseStyle = "h-full w-full flex-shrink-0 outline-none cursor-pointer";

  const disabledStyle =
    disabled &&
    "pointer-events-none cursor-default bg-gray-100 text-gray-300 checked:bg-gray-100";

  return {
    textSizeStyle,
    checkboxSizeStyle,
    disabledStyle,
    baseStyle,
  };
};
