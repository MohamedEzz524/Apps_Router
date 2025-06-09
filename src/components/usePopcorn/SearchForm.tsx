import { FormEvent, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchFormProps {
  setQuery: (param: string) => void;
}

const SearchForm = ({ setQuery }: SearchFormProps) => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (search.trim().length > 0) setQuery(search);
    return;
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={search}
        placeholder="Search Movie..."
        className="text-textPrimary placeholder:text-textPrimary rounded-md bg-blue-300 py-2 pr-8 pl-4 focus:outline-none"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        aria-label="search-movie"
        type="submit"
        className="text-textPrimary absolute top-1/2 right-2 w-6 -translate-y-1/2"
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchForm;
