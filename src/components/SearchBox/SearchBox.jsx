import { useDispatch } from 'react-redux';
import s from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.search_wrapper}>
      <label htmlFor="search">Find contact by name:</label>
      <input
        type="text"
        id="search"
        onChange={handleChange}
        className={s.search_input}
      />
    </div>
  );
};

export default SearchBox;
