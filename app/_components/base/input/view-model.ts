import React from "react";
import { useField, useFormState } from "react-final-form";

type Props = {
  name: string;
};

const useViewModel = ({ name }: Props) => {
  const { input, meta } = useField(name, { type: "text" });

  return { input, meta };
};

export default useViewModel;
