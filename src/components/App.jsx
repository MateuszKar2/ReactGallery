import React, { useState, useEffect } from 'react';
import { getSearch } from 'api/getSearch';
import { Toaster } from 'react-hot-toast';
import { Button } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal'; 

import { Searchbar } from 'components/SearchBar/SearchBar';

export const App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [empty, setEmpty] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [alt, setAlt] = useState('');

  useEffect(() => {
    if (search !== '' || page !== 1) {
      getFunc(search, page);
    }
  }, [search, page]);

  const getFunc = (text, page) => {
    setLoading(true);

    getSearch(text, page)
      .then(resp => resp.json())
      .then(data => {
        if (data.hits.length === 0) {
          setEmpty(true);
        }
        setImages(prevImages => [...prevImages, ...data.hits]);
        setTotal(data.total);
      })
      .catch(error => {
        console.error('Błąd w żądaniu API:', error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const clickLoad = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = (largeImageURL, alt) => {
    setShowModal(true);
    setLargeImageURL(largeImageURL);
    setAlt(alt);
  };

  const handleSubmit = search => {
    setSearch(search);
    setImages([]);
    setPage(1);
    setTotal(1);
    setLoading(false);
    setError(null);
    setEmpty(false);
  };

  const onCloseModal = () => {
    setShowModal(false);
    setLargeImageURL('');
    setAlt('');
  };

  return (
    <div>
      <Toaster
        toastOptions={{
          duration: 1500,
        }}
      />

      <Searchbar handleSubmit={handleSubmit} />

      {error && (
        <h2 style={{ textAlign: 'center' }}>
          Something went wrong: ({error})!
        </h2>
      )}

      <ImageGallery toggleModal={openModal} images={images} />

      {loading && <Loader />}

      {empty && (
        <h2 style={{ textAlign: 'center' }}>Sorry. There are no images ...</h2>
      )}

      {total / 12 > page && <Button clickLoad={clickLoad} />}

      {showModal && (
        <Modal
          onCloseModal={onCloseModal} 
          largeImageURL={largeImageURL}
          alt={alt}
        >
          <img src={largeImageURL} alt={alt} />
        </Modal>
      )}
    </div>
  );
};