import { useEffect } from 'react';
import css from './Modal.module.css';
import PropTypes from '.prop-types';

export const Modal = ({ closeModalByEscape, closeModalByOverlay, src, alt }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModalByEscape();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return() => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [closeModalByEscape]);


  return(
    <div className={css.overlay} onClick={closeModalByOverlay}>
      <div className={css.modal}>
        <img src={src} alt={alt}/>
      </div>
    </div>
  )
};

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModalByEscape: PropTypes.func.isRequired,
  closeModalByOverlay: PropTypes.func.isRequired,
}