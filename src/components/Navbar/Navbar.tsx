import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { mobile, tablet } from "../../responsive";

const Container = styled.div`
  /* height: 60px;
  ${mobile({ height: "50px" })} */
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0" })}
  ${tablet({ padding: "10px 0" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
  ${tablet({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "10px" })}
  ${tablet({ marginLeft: "10px" })}
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
  ${tablet({ width: "75%" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  ${mobile({ fontSize: "24px" })}
  ${tablet({ fontSize: "24px" })}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;
  ${mobile({ flex: 2, justifyContent: "center", gap: "10px" })}
  ${tablet({ flex: 1, justifyContent: "center", gap: "10px" })}
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ fontSize: "12px" })}
  ${tablet({ fontSize: "12px" })}
`

export const Navbar: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>

          <SearchContainer>
            <Input placeholder='Search' />
            <Search style={{ color:"grey", fontSize:16 }}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>59MrRobot</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>

          <MenuItem>SIGN-IN</MenuItem>

          <MenuItem>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}