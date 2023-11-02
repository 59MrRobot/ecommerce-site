import React from 'react';
import styled from 'styled-components';
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
import { deleteCart } from '../../redux/apiCalls';
import { resetOrder } from '../../redux/orderRedux';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${tablet({ padding: "0 20px" })}
  ${mobile({ padding: "10px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  ${mobile({ flex: "none", justifyContent: "center", gap: "10px" })}
`;

const Logo = styled.h1`
  font-weight: 700;
  text-align: center;
  color: #000;

  ${tablet({ fontSize: "26px" })}
  ${mobile({ fontSize: "20px" })}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;

  ${tablet({ flex: 1, justifyContent: "right", gap: "10px" })}
  ${mobile({ flex: 1, justifyContent: "right", gap: "10px" })}
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

export const Navbar: React.FC = React.memo(
  () => {
    const user: User = useSelector((state: any) => state.user.currentUser);
    const cart: Cart = useSelector((state: any) => state.cart.cart);
    const dispatch = useDispatch();

    return (
      <Container>
        <Wrapper>
          <Left>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Logo>59MrRobot</Logo>
            </Link>
          </Left>

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
                <Welcome>Welcome, {user.fullName.split(' ')[0]}</Welcome>

                <Tooltip title="Logout">
                  <MenuItem>
                    <LogoutIcon onClick={() => {
                      dispatch(logout());
                      if (cart) {
                        deleteCart(dispatch, cart._id);
                      }
                      dispatch(resetOrder());
                    }}/>
                  </MenuItem>
                </Tooltip>

                <Link to="/cart">
                  <MenuItem>
                    <Badge
                      badgeContent={cart ? cart.products.length : 0}
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
)