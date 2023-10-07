import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { MdImageSearch } from 'react-icons/md';
import css from './SearchBar.module.css';

export const Searchbar = ({ handleSubmit }) => {
  const [search, setSearch] = useState('');

  const onChangeInput = e => {
    const value = e.currentTarget.value;
    setSearch(value);
  };

  const resetForm = () => {
    setSearch('');
  };

  const onSubmitForm = e => {
    e.preventDefault();

    if (!search) {
      return toast.error('Enter text for search.');
    }

    handleSubmit(search);
    resetForm();
  };

  return (
    <header className={css.SearchBar}>
      <form onSubmit={onSubmitForm} className={css.Form}>
        <button type="submit" className={css.Button}>
          <MdImageSearch size="30" />
        </button>

        <input
          value={search}
          onChange={onChangeInput}
          className={css.Input}
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