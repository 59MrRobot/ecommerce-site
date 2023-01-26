import React from 'react';
import styled from 'styled-components';
import { mobile, tablet } from '../../responsive';

interface Props {
  category: Category;
}

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height : "20vh" })}
  ${tablet({ height : "30vh" })}
`

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  font-weight: 600;
`

export const CategoryItem: React.FC<Props> = React.memo(
  ({ category }) => {
    return (
      <Container>
        <Image src={category.img} />
        <Info>
          <Title>{category.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Container>
    )
  }
)