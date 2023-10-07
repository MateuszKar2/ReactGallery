import css from "./Button.module.css";
import { PropTypes } from 'prop-types';

export const Button = ({ onClick, txt }) => {
    return (
        <button className={css.button} type="button" onClick={onClick}>
            {txt}
        </button>
    );
};

Button.propTypes = {
    txt: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };
