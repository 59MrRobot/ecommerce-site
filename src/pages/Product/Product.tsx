import { Add, Remove } from '@material-ui/icons';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Announcement } from '../../components/Announcement';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { Newsletter } from '../../components/Newsletter';
import { mobile, tablet } from '../../responsive';

interface Props {
  color: string;
}

const Container = styled.div``

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px", flexDirection: "column" })}
  ${tablet({ padding: "10px", flexDirection: "column", margin: "0 auto" })}
`

const ImageContainer = styled.div`
  flex: 1;
  ${tablet({ margin: "0 auto" })}
`

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
  ${tablet({ height: "30vh", maxWidth: "500px" })}
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({ padding: "10px" })}
  ${tablet({ padding: "0 25px" })}
`

const Title = styled.h1`
  font-weight: 200;
  letter-spacing: 4px;
`

const Description = styled.p`
  margin: 20px 0;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
  ${tablet({ width: "100%", flexDirection: "column", gap: "20px" })}
`

const Filter = styled.div`
  display: flex;
  align-items: center;
`

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 10px;
`

const FilterColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props: Props) => props.color};
  margin-right: 10px;
  cursor: pointer;
`

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  width: 25%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
  ${tablet({ width: "50vw" })}
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`

const Button = styled.button`
  padding: 15px;
  border: 2px solid #008080;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.5s ease;

  &:hover {
    background-color: #008080 ;
    color: #fff;
  }

  ${mobile({ marginTop: "20px" })}
  ${tablet({ marginTop: "30px" })}
`

export const Product: React.FC = React.memo(
  () => {
    const [amount, setAmount] = useState(1);
    const location = useLocation();
    const id = location.pathname.split(":")[1];
    const product: Product = useSelector((state: any) => state.product.products.find((item: Product) => item._id === id));

    const handleAmount = (direction: string) => {
      if (direction === 'remove') {
        setAmount((prevState) => {
           return (amount > 1) ? prevState - 1 : prevState - 0;
        });
      } else {
        setAmount((prevState) => {
          return prevState + 1;
       });
      }
    }

    return (
      <Container>
        <Navbar />

        <Announcement />

        <Wrapper>
          <ImageContainer>
            <Image src={product.image} />
          </ImageContainer>

          <InfoContainer>
            <Title>{product.title}</Title>

            <Description>
              {product.description}
            </Description>

            <Price>${product.price}</Price>

            <FilterContainer>
              <Filter>
                <FilterTitle>Color:</FilterTitle>

                {product.color.map(col => (
                  <FilterColor color={col} key={col} />
                ))}
              </Filter>

              <Filter>
                <FilterTitle>Size:</FilterTitle>

                <FilterSize>
                  {product.size.map(siz => (
                    <FilterSizeOption key={siz}>{siz}</FilterSizeOption>
                  ))}
                </FilterSize>
              </Filter>

            </FilterContainer>

            <AddContainer>
              <AmountContainer>
                <Remove
                  onClick={() => handleAmount('remove')}
                  style={{cursor:"pointer"}}
                />

                <Amount>{amount}</Amount>

                <Add
                  onClick={() => handleAmount('add')}
                  style={{cursor:"pointer"}}
                />
              </AmountContainer>

              <Button>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>

        <Newsletter />

        <Footer />
      </Container>
    )
  }
)