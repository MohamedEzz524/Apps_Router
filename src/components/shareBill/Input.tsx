import { FormEvent, ReactNode } from 'react';

interface FormInputProps {
  children: ReactNode;
  value: number;
  setValue?: (param: number) => void;
}
const Input = ({ value, setValue, children }: FormInputProps) => {
  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    if (setValue) setValue(Number((e.target as HTMLInputElement).value));
    return;
  };

  return (
    <div className="flex w-full items-center justify-between gap-4">
      <label className="min-w-60 font-medium">{children}</label>
      <input
        type="text"
        value={value}
        placeholder="Enter Value..."
        onChange={handleInput}
        className="text-textSecondary max-w-32 bg-white p-1 focus:outline-none disabled:bg-gray-400 disabled:text-white"
        required
        disabled={setValue === undefined}
      />
    </div>
  );
};
export default Input;
