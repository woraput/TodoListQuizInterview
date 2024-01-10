import { useEffect } from "react";
import { useField, useForm } from "react-final-form";

type Props = {
  name: string;
  isToggleSubmit?: boolean;
};

const useViewModel = ({ name, isToggleSubmit }: Props) => {
  const { submit } = useForm();
  const { input } = useField(name, { type: "checkbox" });

  useEffect(() => {
    input.onChange;
  }, [input, isToggleSubmit]);

  const onChange = (value: boolean) => {
    input.onChange(value);
    isToggleSubmit && submit();
  };
  return { input, onChange };
};

export default useViewModel;
