import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Announcement } from '../../components/Announcement';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { Newsletter } from '../../components/Newsletter';
import { Products } from '../../components/Products';
import { getProductsWithCategory } from '../../redux/apiCalls';
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
    const category = useSelector((state: any) => state.product.category);
    const products = useSelector((state: any) => state.product.products);
    const dispatch = useDispatch();
    const [color, setColor] = useState("Color");
    const [size, setSize] = useState("Size");
    const [sort, setSort] = useState("Newest");
    const [newProducts, setNewProducts] = useState<Product[]>([]);

    useEffect(() => {
      getProductsWithCategory(dispatch, category.name);
    }, [dispatch, category]);

    useEffect(() => {
      setNewProducts([...products]);
    }, [products]);

    useEffect(() => {
      if (sort === 'Newest') {
        setNewProducts(prev => prev.reverse());
      } else if (sort === 'asc') {
        setNewProducts(prev => prev.sort((a, b) => a.price - b.price));
      } else {
        setNewProducts(prev => prev.sort((a, b) => b.price - a.price));
      }
    }, [newProducts, sort]);

    return (
      <Container>
        <Navbar />
        <Announcement />

        <Title>{category.title}</Title>

        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>

            <Select
              defaultValue={color}
              onChange={(event) => setColor(event.target.value)}
            >
              <Option disabled>
                Color
              </Option>
              <Option value="white">White</Option>
              <Option value="black">Black</Option>
              <Option value="red">Red</Option>
              <Option value="blue">Blue</Option>
              <Option value="yellow">Yellow</Option>
              <Option value="green">Green</Option>
            </Select>

            <Select
              defaultValue={size}
              onChange={(event) => setSize(event.target.value)}
            >
              <Option disabled>
                Size
              </Option>
              <Option value="XS">XS</Option>
              <Option value="S">S</Option>
              <Option value="M">M</Option>
              <Option value="L">L</Option>
              <Option value="XL">XL</Option>
            </Select>
          </Filter>

          <Filter>
            <FilterText>Sort Products:</FilterText>

            <Select
              defaultValue={sort}
              onChange={(event) => setSort(event.target.value)}
            >
              <Option value="Newest">Newest</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>

        <Products products={newProducts} />

        <Newsletter />

        <Footer />
      </Container>
    )
  }
)