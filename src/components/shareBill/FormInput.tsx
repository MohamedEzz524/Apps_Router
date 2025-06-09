import { ReactNode } from 'react';

interface FormInputProps {
  children: ReactNode;
  value: string;
  setValue: (param: string) => void;
}

const FormInput = ({ children, value, setValue }: FormInputProps) => {
  return (
    <div className="flex w-full items-center justify-between gap-2.5 p-2">
      <label className="font-medium">{children}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Name..."
        className="text-textSecondary max-w-50 bg-white p-1 focus:outline-none"
        required
      />
    </div>
  );
};

export default FormInput;
