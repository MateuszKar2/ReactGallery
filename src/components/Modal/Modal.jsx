import React, { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ onCloseModal, largeImageURL, alt }) => {
  useEffect(() => {
    const keyDown = evt => {
      if (evt.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', keyDown);

    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  }, [onCloseModal]);

  const handleClose = evt => {
    if (evt.currentTarget === evt.target) {
      onCloseModal();
    }
  };

  return (
    <div onClick={handleClose} className={css.Overlay}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt={alt} />
      </div>
    </div>
  );
};