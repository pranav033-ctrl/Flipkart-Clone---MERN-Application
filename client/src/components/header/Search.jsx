import { Box, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled(Box)`
  background-color: #fff;
  width: 38.3%;
  margin-left: 10px;
  border-radius: 2px;
  display: flex;
`;

const InputBaseWrapper = styled(InputBase)`
    width: 100%;
    margin-left: 10px;
    font-size: unset;
    display: flex;
`;

const SearchIconWrapper = styled(Box)`
  color: blue;
  padding: 5px 10px;
`;

function Search() {
  return (
    <SearchContainer>
      <InputBaseWrapper
        placeholder="Search for products, brands and more"  >
      </InputBaseWrapper>
      <SearchIconWrapper>
        <SearchIcon></SearchIcon>
      </SearchIconWrapper>
    </SearchContainer>
  );
}

export default Search;
