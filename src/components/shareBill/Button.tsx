interface labelProps {
  label: string;
  handleClick: () => void;
}

const Button = ({ label, handleClick }: labelProps) => {
  return (
    <button
      type="button"
      className="bg-accentPrimary cursor-pointer rounded-md p-2 text-white shadow-md"
      onClick={() => handleClick()}
    >
      {label}
    </button>
  );
};

export default Button;
