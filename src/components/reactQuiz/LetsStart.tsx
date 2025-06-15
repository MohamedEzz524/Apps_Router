interface LetsStartProps {
  start: () => void;
  length: number;
}

const LetsStart = ({ start, length }: LetsStartProps) => {
  return (
    <div className="text-textPrimary flex grow flex-col justify-center gap-2.5 text-center">
      <h2 className="text-xl font-bold sm:text-3xl">
        Welcome To <span className="text-accentPrimary">The React Quiz!</span>
      </h2>
      <h3 className="h2 font-medium">
        <span className="text-accentPrimary">{length}</span> questions to test
        your React mastery
      </h3>
      <button
        onClick={start}
        type="button"
        className="gray-button mx-auto w-fit rounded-full"
      >
        Let's start
      </button>
    </div>
  );
};

export default LetsStart;
