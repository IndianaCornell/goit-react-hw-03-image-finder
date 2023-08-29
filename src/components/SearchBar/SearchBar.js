export const SearchBar = ({ changeQuerry }) => {
  return (
    <form
      onSubmit={evt => {
        evt.preventDefault();
        changeQuerry(evt.target.elements.query.value);
        console.log(evt.target.elements.query.value);
        evt.target.reset();
      }}
    >
      <input
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
        name="query"
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};
