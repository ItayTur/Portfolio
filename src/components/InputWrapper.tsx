import { ReactNode } from "react";

const InputWrapper = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => {
  return (
    <label className="flex flex-col">
      <span className="text-white font-medium mb-4">{label}</span>
      {children}
    </label>
  );
};

export default InputWrapper;
