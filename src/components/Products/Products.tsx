import React from 'react';
import styled from 'styled-components';
import { ProductItem } from '../ProductItem';

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`

interface Props {
  products: Product[];
}

export const Products: React.FC<Props> = ({ products }) => {
  return (
    <Container>
      {products.map((product: Product) => (
        <ProductItem product={product} key={product._id} />
      ))}
    </Container>
  )
}
