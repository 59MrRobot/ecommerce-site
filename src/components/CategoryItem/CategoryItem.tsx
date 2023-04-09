import React from 'react';
import styled from 'styled-components';
import { mobile, tablet } from '../../responsive';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedCategory } from '../../redux/productRedux';

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
  padding: 20px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.5s ease;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`

export const CategoryItem: React.FC<Props> = React.memo(
  ({ category }) => {
    const dispatch = useDispatch();

    return (
      <Container>
        <Image src={category.img} />
        <Info>
          <Title>{category.title}</Title>

          <Link to={`/products/category/${category.name}`}>
            <Button onClick={() => dispatch(setSelectedCategory({
                name: category.name,
                title: category.title,
              }))}
            >
              SHOP NOW
            </Button>
          </Link>
        </Info>
      </Container>
    )
  }
)