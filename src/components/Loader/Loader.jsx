import css from "./Loader.module.css";
import { PropTypes } from 'prop-types';

export const Loader = ({ small = false }) => {
    return (
        <>
        {small === true ? (
            <div className={`${css.spinner} ${css.small}`}>
                <div className={`${css.head} ${css.small}`}></div>
            </div>
        ) : (
            <div className={css.overlay}>
          <div className={css.loader}>
            <div className={css.spinner}>
              <div className={css.head}> </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Loader.propTypes = {
  small: PropTypes.bool,
};