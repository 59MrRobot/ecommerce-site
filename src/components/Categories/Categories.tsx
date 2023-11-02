import React from 'react';
import styled from 'styled-components';
import { tablet } from '../../responsive';
import { CategoryItem } from '../CategoryItem';
import Category1 from './category-1.webp';
import Category2 from './category-2.webp';
import Category3 from './category-3.webp';

const categories = [
  {
    id: 1,
    img: Category1,
    title: "WOMEN STYLE!",
    name: "women",
  },
  {
    id: 2,
    img: Category2,
    title: "MEN LOVE",
    name: "men",
  },
  {
    id: 3,
    img: Category3,
    title: "LIGHT COATS",
    name: "coats",
  },
];

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;

  ${tablet({ flexDirection: "column", padding: "0" })}
`

export const Categories: React.FC = React.memo(
  () => {
    return (
      <Container>
        {categories.map(category => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </Container>
    )
  }
)