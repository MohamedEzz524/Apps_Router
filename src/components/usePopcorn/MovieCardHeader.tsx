interface MovieCardHeaderProps {
  Title: string;
  Type: string;
  Year: string;
}
const MovieCardHeader = ({ Title, Type, Year }: MovieCardHeaderProps) => {
  return (
    <div className="overflow-hidden">
      <h3 className="max-w-52 truncate overflow-hidden font-medium text-gray-900 dark:text-gray-100">
        {Title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{Year}</p>
      {Type && (
        <p className="mt-1 text-xs text-gray-400 capitalize dark:text-gray-500">
          {Type}
        </p>
      )}
    </div>
  );
};
export default MovieCardHeader;
