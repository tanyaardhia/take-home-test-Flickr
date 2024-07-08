import { useState } from "react";
import axios from "axios";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();
    console.log("searching > ", query);

    try {
      const response = await axios.get(`http://localhost:3000/searchImage?tags=${query}`);
      console.log(response.data, ">>> searching");
      onSearch(response.data);
    } catch (error) {
      console.error("Error searching >>", error);
    }
  };

  return (
    <div className="mt-10">
      <form className="max-w-md mx-auto" onSubmit={handleSearch}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border rounded-lg bg-gray-50 dark:text-white"
            placeholder="search anything here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <button
            type="submit"
            className="absolute end-2.5 bottom-2.5 bg-[#E2BBE9] hover:bg-[#d7c2f7] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:focus:ring-[#E2BBE9]"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
