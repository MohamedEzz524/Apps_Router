import { MovieType } from '../../types/MovieTypes';

interface DrawSelectedProps {
  selected: MovieType;
  reset: (param: string | null) => void;
}
const DrawSelected = ({ selected, reset }: DrawSelectedProps) => {
  return (
    <div>
      <div className="flex gap-2.5">
        <img
          src={selected.Poster}
          alt={selected.Title}
          className="h-60 w-50 object-cover"
        />
        <div className="space-y-1 text-white">
          <h3 className="text-textPrimary text-xl font-bold">
            {selected.Title}
          </h3>
          <h4 className="text-body">{selected.Year}</h4>
          <p>{selected.Actors?.split(',')[0]} </p>
          <p className="bg-accentPrimary w-fit rounded-md p-1">
            {selected.imdbRating}⭐
          </p>
          <p className="bg-accentSecondary w-fit rounded-md p-1">
            {selected.Runtime}
          </p>
        </div>
      </div>
      <p className="text-body mt-5">{selected.Plot}</p>

      <button
        type="button"
        onClick={() => reset(null)}
        className="bg-accentPrimary mt-5 w-full cursor-pointer rounded-md p-2 text-white hover:opacity-90"
      >
        Close
      </button>
    </div>
  );
};

export default DrawSelected;
