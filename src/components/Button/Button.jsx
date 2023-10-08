import css from "./Button.module.css";
import PropTypes from 'prop-types';

export const Button = ({ loadMoreButton, titleButton }) => {
    return (
        <button onClick={loadMoreButton} className={css.buttonLoadMore} type="submit">
            {titleButton}
        </button>
    );
};

Button.propTypes = {
    loadMoreButton: PropTypes.func.isRequired,
};