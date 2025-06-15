interface OptionsProps {
  options: string[];
  handleClick: (option: string) => void;
  selectedOption: string; // Renamed from 'active' for clarity
  answer: string;
}

const Options = ({
  options,
  selectedOption,
  handleClick,
  answer,
}: OptionsProps) => {
  const getButtonClass = (option: string) => {
    const baseClass =
      'block cursor-pointer rounded-lg font-medium  text-left p-2 transition-all duration-300';

    if (selectedOption) {
      if (option === answer) {
        return `${baseClass} bg-green-500 text-white scale-105`; // Correct answer
      }
      if (option === selectedOption && option !== answer) {
        return `${baseClass} bg-red-500 text-white`; // Wrong selected answer
      }
      return `${baseClass} bg-gray-300 opacity-70`; // Other options when answered
    }
    return `${baseClass} bg-accentPrimary/75 hover:bg-accentPrimary hover:translate-x-1`; // Default state
  };

  return (
    <div className="flex flex-col gap-2.5">
      {options.map((option, i) => (
        <button
          type="button"
          key={option}
          className={getButtonClass(option)}
          onClick={() => handleClick(option)}
          disabled={Boolean(selectedOption)}
        >
          {i + 1 + ' ) ' + option}
        </button>
      ))}
    </div>
  );
};

export default Options;
