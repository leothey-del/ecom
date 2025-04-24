import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');

    if (name) {
      navigate(`/list?name=${encodeURIComponent(name)}`);
    }
  };

  return (
    <form
      className="flex items-center gap-4 bg-white p-2 rounded-full border border-gray-300 w-48 md:w-64"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search..."
        className="w-full bg-transparent text-gray-900 outline-none"
      />
      <button type="submit" className="cursor-pointer text-gray-600 hover:text-blue-500">
        <Search size={20} />
      </button>
    </form>
  );
};

export default SearchBar;