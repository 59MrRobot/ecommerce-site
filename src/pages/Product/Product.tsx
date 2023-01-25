import { Add, Remove } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Announcement } from '../../components/Announcement';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { Newsletter } from '../../components/Newsletter';

interface Props {
  color: string;
}

const Container = styled.div`
  
`

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  justify-content: space-between;
`

const ImageContainer = styled.div`
  flex: 1;
`

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
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
`

const Filter = styled.div`
  display: flex;
  align-items: center;
`

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`

const FilterColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props: Props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`

const FilterSizeOption = styled.option`

`

const AddContainer = styled.div`
  width: 25%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
`

export const Product: React.FC = React.memo(
  () => {
    const [amount, setAmount] = useState(1);

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
            <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
          </ImageContainer>

          <InfoContainer>
            <Title>Denim Jumpsuit</Title>

            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo perferendis, mollitia laborum iste quis eligendi accusantium magnam possimus rerum culpa quam non illum labore nisi? Perspiciatis at necessitatibus labore modi.
            </Description>

            <Price>$20.00</Price>

            <FilterContainer>
              <Filter>
                <FilterTitle>Color:</FilterTitle>

                <FilterColor color="black" />
                <FilterColor color="darkblue" />
                <FilterColor color="grey" />
              </Filter>

              <Filter>
                <FilterTitle>Size</FilterTitle>

                <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
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