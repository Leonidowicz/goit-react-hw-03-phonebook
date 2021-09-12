const Filter = ({ filter, onChange }) => {
  return (
    <label>
      Find phone number by name
      <input name="filter" type="text" value={filter} onChange={onChange} />
    </label>
  );
};
export default Filter;
