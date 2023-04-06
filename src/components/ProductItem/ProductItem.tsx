import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  product: Product;
}

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  cursor: pointer;
`

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F5FBFD;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
`

const Image = styled.img`
  height: 75%;
  z-index: 2;
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: all 0.5s ease;
  color: #000;

  &:hover {
    background-color: #E9F5F5;
    transform: scale(1.1);
  }
`

export const ProductItem: React.FC<Props> = React.memo(
  ({ product }) => {
    return (
      <Container>
        <Circle />
        <Image src={product.image} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>

          <Link to="/products/:product">
            <Icon>
              <SearchOutlined />
            </Icon>
          </Link>

          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Container>
    )
  }
)