import React, { useState, useEffect } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AutocompleteSearch = () => {
  const [searchRes, setSearchRes] = useState<Array<string>>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [showResults, setShowResults] = useState<Boolean>(false);

  useEffect(() => {
    const t = setTimeout(() => {
      fetchData();
    }, 300);
    return () => {
      clearTimeout(t);
    };
  }, [searchText]);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.google.com/complete/search?client=firefox&q=" + searchText,
    );

    const data = await response.json();

    setSearchRes(data[1]);
  };

  return (
    <>
      <div className="relative w-100 p-2 border border-gray-400">
        <input
          type="text"
          placeholder="Enter the search text"
          className="w-full outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => {
            setShowResults(true);
          }}
          onBlur={() => {
            setShowResults(false);
          }}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute right-3 top-1/2 -translate-y-1/2"
        />
      </div>
      {searchRes.length > 1 && showResults && (
        <ul className="border-l w-100 border-r border-b border-gray-400">
          {searchRes?.map((str, i) => (
            <li className="hover:bg-amber-100 px-2 py-1 cursor-pointer" key={i}>
              {str}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default AutocompleteSearch;
