import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AutocompleteSearch = () => {
  return (
    <div className="relative w-100 p-2 border border-gray-400 rounded-full">
      <input
        type="text"
        placeholder="Enter the search text"
        className="w-full outline-none"
      />
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute right-3 top-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default AutocompleteSearch;
