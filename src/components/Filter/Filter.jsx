import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filter/filter.selector';
import { queryFilterValue } from 'redux/filter/filter.slise';

export default function Filter() {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const hendleChangeFiltr = event => {
    dispatch(queryFilterValue(event.currentTarget.value));
  };

  return (
    <div className="container mb-3 text-start">
      <span className=" ms-2">Find contacts by name</span>
      <input
        className="form-control"
        type="text"
        value={filterValue}
        aria-label="readonly input example"
        onChange={hendleChangeFiltr}
      />
    </div>
  );
}
