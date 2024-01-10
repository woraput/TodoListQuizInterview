export const useStyle = () => {
  const inputSizeStyle = "h-10 px-3 py-2 xl:h-11 xl:px-4 xl:py-3";
  const inputStyle =
    "aria-[invalid=true]:border-error-300 w-full rounded-lg border border-gray-300 bg-white text-sm md:text-base outline-none placeholder:text-gray-500 disabled:bg-gray-50 disabled:text-gray-500";
  return {
    inputSizeStyle,
    inputStyle,
  };
};
