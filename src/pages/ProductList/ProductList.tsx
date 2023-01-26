import React from 'react';
import styled from 'styled-components';
import { Announcement } from '../../components/Announcement';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { Newsletter } from '../../components/Newsletter';
import { Products } from '../../components/Products';
import { mobile, tablet } from '../../responsive';

const Container = styled.div``

const Title = styled.h1`
  margin: 20px;
  text-align: center;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${tablet({ maxWidth: "650px", margin: "0 auto" })}
`

const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0 20px", display: "flex", flexDirection: "column" })}
  ${tablet({ margin: "0 20px", display: "flex", flexDirection: "column" })}
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0" })}
  ${tablet({ marginRight: "0" })}
`

const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({ margin: "10px 0" })}
${tablet({ margin: "10px 0" })}
`

const Option = styled.option``

export const ProductList: React.FC = React.memo(
  () => {
    return (
      <Container>
        <Navbar />
        <Announcement />

        <Title>Dresses</Title>

        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>

            <Select>
              <Option disabled selected>
                Color
              </Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>

            <Select>
              <Option disabled selected>
                Size
              </Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>

          <Filter>
            <FilterText>Sort Products:</FilterText>

            <Select>
              <Option selected>Newest</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>

        <Products />

        <Newsletter />

        <Footer />
      </Container>
    )
  }
)