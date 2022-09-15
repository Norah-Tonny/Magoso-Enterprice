import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const NavContainer = styled.nav``;
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const InnerNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  gap: 2em;
  padding-top: 2em;
`;

const Right = styled.div``;

const Logo = styled.h1``;

const SearchContainer = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  padding: 0.5em;
`;

const Searchinput = styled.input`
  padding: 0.5em 2em;
  border: none;
  outline: none;
`;

const NavUl = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 1.2em;
  cursor: pointer;
  display: flex;
  padding-top: 2em;
`;

const NavLi = styled.li``;

const Nav = () => {
  return (
    <NavContainer>
      <Container>
        <InnerNav>
          <Left>
            <Logo>Magoso Ent</Logo>
            <SearchContainer>
              <SearchIcon />
              <Searchinput type="text" placeholder="Search" />
            </SearchContainer>
          </Left>
          <Right>
            <NavUl>
              <NavLi>Shop</NavLi>
              <NavLi>About</NavLi>
              <NavLi>Login/register</NavLi>
              <NavLi>
                {" "}
                <Badge badgeContent={1} color="primary">
                  <ShoppingCartIcon/>
                </Badge>{" "}
              </NavLi>
            </NavUl>
          </Right>
        </InnerNav>
      </Container>
    </NavContainer>
  );
};

export default Nav;
