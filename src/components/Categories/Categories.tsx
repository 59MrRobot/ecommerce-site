import React from 'react';
import styled from 'styled-components';
import { categories } from '../../data';
import { tablet } from '../../responsive';
import { CategoryItem } from '../CategoryItem';

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