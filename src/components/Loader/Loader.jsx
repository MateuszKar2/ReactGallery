import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <Oval
        visible={true}
        ariaLabel="MagnifyingGlass-loading"
        height={100}
        width={100}
        strokeWidth={1}
        strokeWidthSecondary={2000}
        color="blue"
        secondaryColor="red"
      />
    </div>
  );
};