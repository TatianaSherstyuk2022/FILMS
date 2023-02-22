import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import s from './SearchForm.module.css';

function SearchForm({ onSubmit, defaultValue }) {
  const searchRef = useRef();

  const handleSubmitForm = event => {
    event.preventDefault();

    onSubmit(searchRef.current.value);
  };

  return (
    <form onSubmit={handleSubmitForm} className={s.searchForm}>
      <input
        className={s.searchFormInput}
        defaultValue={defaultValue}
        ref={searchRef}
        type="text"
        required
      />
      <button className={s.searchFormButton}>Search</button>
    </form>
  );
}

SearchForm.propTypes = {
  defaultValue: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default SearchForm;
