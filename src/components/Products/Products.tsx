import React from 'react';
import styled from 'styled-components';
import { ProductItem } from '../ProductItem';

interface Props {
  products: Product[];
}

interface Prop {
  mobile: string;
}

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  justify-content: ${(props: Prop) => props.mobile === "true" ? "center" : "center"};
`

export const Products: React.FC<Props> = React.memo(
  ({ products }) => {
    const isScreenSizeMobile = window.matchMedia("(max-width: 480px)").matches;

    return (
      <Container mobile={`${isScreenSizeMobile}`}>
        {products.map((product: Product) => (
          <ProductItem product={product} key={product._id} />
        ))}
      </Container>
    )
  }
)
