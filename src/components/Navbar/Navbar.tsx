import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import LoginIcon from '@mui/icons-material/Login';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge, Tooltip } from '@material-ui/core';
import { mobile, tablet } from "../../responsive";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/userRedux';

const Container = styled.div``;

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
  font-weight: 700;
  text-align: center;
  color: #000;
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
  color: #000;
  cursor: pointer;
  ${mobile({ fontSize: "12px" })}
  ${tablet({ fontSize: "12px" })}
`

const Welcome = styled.p`
`

export const Navbar: React.FC = () => {
  const user: User = useSelector((state: any) => state.user.currentUser);
  const dispatch = useDispatch();

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>

          <SearchContainer>
            <Input placeholder='Search' />

            <SearchIcon style={{ color:"grey", fontSize:16 }}/>
          </SearchContainer>
        </Left>

        <Center>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo>59MrRobot</Logo>
          </Link>
        </Center>

        <Right>
          <a
            href="https://59mrrobot.github.io/ecommerce-admin/"
            target="_blank"
            style={{ textDecoration: "none" }}
            rel="noreferrer"
          >
            <Tooltip title="Admin Site">
              <MenuItem>
                <AdminPanelSettingsOutlinedIcon />
              </MenuItem>
            </Tooltip>
          </a>
          {!user && (
            <>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <Tooltip title="Register">
                  <MenuItem>
                    <AppRegistrationOutlinedIcon />
                  </MenuItem>
                </Tooltip>
              </Link>

              <Link to="/signin" style={{ textDecoration: "none" }}>
                <Tooltip title="Login">
                  <MenuItem>
                    <LoginIcon />
                  </MenuItem>
                </Tooltip>
              </Link>
            </>
          )}
          
          {user && (
            <>
              <Tooltip title="Logout">
                <MenuItem>
                  <LogoutIcon onClick={() => dispatch(logout())}/>
                </MenuItem>
              </Tooltip>

              <Welcome>Welcome, {user.fullName.split(' ')[0]}</Welcome>

              <Link to="/cart">
                <MenuItem>
                  <Badge
                    badgeContent={2}
                    color="primary"
                    overlap="rectangular"
                  >
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </MenuItem>
              </Link>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  )
}