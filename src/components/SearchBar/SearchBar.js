import { toast } from 'react-toastify';

import {
  SearchInputStyled,
  SearchButtonStyled,
  SearchFormStyled,
  SearchBox,
} from './SearchBar.styled';

export const SearchBar = ({ changeQuerry }) => {
  return (
    <SearchBox>
      <SearchFormStyled
        onSubmit={evt => {
          evt.preventDefault();
          if (evt.target.elements.query.value === '') {
            toast.error('Please complete the search field. ');
            return;
          }
          changeQuerry(evt.target.elements.query.value.trim());
          evt.target.reset();
        }}
      >
        <SearchInputStyled
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        ></SearchInputStyled>
        <SearchButtonStyled type="submit">Search</SearchButtonStyled>
      </SearchFormStyled>
    </SearchBox>
  );
};
