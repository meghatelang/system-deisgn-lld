import React, { useState, useEffect, useRef } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AutocompleteSearch = () => {
  const [searchRes, setSearchRes] = useState<Array<string>>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [showResults, setShowResults] = useState<Boolean>(false);

  const cacheRef = useRef(new Map());

  useEffect(() => {
    const controller = new AbortController();

    if (cacheRef.current.has(searchText)) {
      setSearchRes(cacheRef.current.get(searchText));
      return;
    }

    const t = setTimeout(() => {
      fetchData(controller.signal);
    }, 300);
    return () => {
      clearTimeout(t);
      controller.abort();
    };
  }, [searchText]);

  const fetchData = async (abortSignal: AbortSignal) => {
    const response = await fetch(
      "https://www.google.com/complete/search?client=firefox&q=" + searchText,
      {
        signal: abortSignal,
      },
    );

    const data = await response.json();

    cacheRef.current.set(searchText, data[1]);

    setSearchRes(data[1]);
  };

  return (
    <>
      <div className="relative w-100 p-2 border border-gray-400">
        <input
          type="text"
          placeholder="Type the search text"
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
            <li
              className="hover:bg-amber-100 px-2 py-1 cursor-pointer"
              key={i}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                console.log("str here", str);
                setSearchText(str);
                setShowResults(false);
              }}
            >
              {str}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default AutocompleteSearch;
