import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../../data';
import { ProductItem } from '../ProductItem';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Products: React.FC = React.memo(
  () => {
    return (
      <Container>
        {popularProducts.map((product: Product) => (
          <Link to="/products/:product">
            <ProductItem product={product} key={product.id} />
          </Link>
        ))}
      </Container>
    )
  }
)