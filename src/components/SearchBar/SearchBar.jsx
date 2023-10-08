import { useState } from 'react';
import { PropTypes } from 'prop-types';
import css from './SearchBar.module.css';

export const Searchbar = ({ handleSubmit }) => {
  const [query, setQuery] = useState('');

  const onInputChange = e => {
    setQuery(e.target.value.trim())
  };

  const onSubmitForm = e => {
    e.preventDefault();
    if (query.length === 0) {
      alert("Pole wyszukiwania nie może byc puste")
    } else {
      onSubmitInput(query);
      setQuery('');
    }
  };

  return (
    <header className={css.searchBar}>
      <form onSubmit={onSubmitForm} className={css.form}>
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}>Search</span>
        </button>

        <input
          value={search}
          onChange={onInputChange}
          className={css.input}
          autoFocus
          name="search"
          type="text"
          autoComplete="off"
          placeholder="Search images or photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmitInput: PropTypes.func.isRequired,
};