import React from "react";
import PropTypes from "prop-types";
import "../styles/search-form.css";

const SearchForm = ({ onSubmit, searchText, setSearchText }) => {
  const handleInputChange = (e) => setSearchText(e.target.value);

  return (
    <div className="search-form">
      <input type="text" onChange={handleInputChange} value={searchText} />
      <button className="search-form__button" type="button" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
};
