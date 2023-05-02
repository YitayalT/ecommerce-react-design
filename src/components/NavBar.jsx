import React from "react";
import styled from "styled-components";
import {Search} from '@material-ui/icons'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


//  styles for container 
const Container = styled.div`
  height: 60px;
`;
//  styles for wrapper 
const Wrapper = styled.div`
  padding: 10px 20px;
  display:flex;
  justify-content: space-between;
`;
// styles for left 
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
// styles for center 
const Center = styled.div`
flex: 1;
text-align: center;
`
// styles for right 
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
margin-left: 25px;`
// styles for language 
const Language = styled.span`
font-size: 14px;
cursor: pointer;
`
// styles for search 
const SearchContainer = styled.div`
border: 1px solid gray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
// styles for input 
const Input = styled.input`
border: none;
`
// styles for logo 
const Logo = styled.h1`
font-weight: bold;`

// styles for menuItem 
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
 `

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
      <Left>
      <Language>EN</Language>
      <SearchContainer>
        <Input />
        <Search style={{color: 'gray', fontSize:16}} />
      </SearchContainer>
      </Left>
      <Center><Logo>Arsema-Commerce</Logo></Center>
      <Right>
      <MenuItem>Register</MenuItem>
      <MenuItem>Sign In</MenuItem>
      <MenuItem>
      <Badge badgeContent={4} color="primary">
      <ShoppingCartOutlinedIcon color="action" />
    </Badge>
      </MenuItem>

      </Right>
      </Wrapper>
    </Container>

  );
};

export default NavBar;
