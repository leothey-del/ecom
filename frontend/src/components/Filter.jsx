import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Filter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }
    navigate(`${location.pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
          value={searchParams.get('type') || ''}
        >
          <option value="">Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
          value={searchParams.get('min') || ''}
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
          value={searchParams.get('max') || ''}
        />
        {/* TODO: Filter Categories */}
        <select
          name="cat"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
          value={searchParams.get('cat') || ''}
        >
          <option value="">Category</option>
          <option value="new">New Arrival</option>
          <option value="popular">Popular</option>
          {/* You'll need to dynamically populate categories here */}
        </select>
        <select
          name="allFilters"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          onChange={() => {
            const params = new URLSearchParams();
            navigate(`${location.pathname}?${params.toString()}`);
          }}
          value="allFilters" // Consider managing this state if needed
        >
          <option value="allFilters">All Filters</option>
        </select>
      </div>
      <div className="">
        <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
          onChange={handleFilterChange}
          value={searchParams.get('sort') || ''}
        >
          <option value="">Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;