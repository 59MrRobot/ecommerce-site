import { Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile, tablet } from '../../responsive';

const Container = styled.div`
  height: 60vh;
  background-color: #FCF5F5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${tablet({ height: "45vh" })}
`

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`

const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;

  ${mobile({ textAlign: "center" })}
`

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
  
  ${tablet({ width: "60%" })};
  ${mobile({ width: "80%" })};
`

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #008080;
  color: #fff;
`

export const Newsletter: React.FC = React.memo(
  () => {
    return (
      <Container>
        <Title>Newsletter</Title>

        <Description>
          Get timely updates from your favourite products.
        </Description>

        <InputContainer>
          <Input placeholder="Your email"/>
          <Button>
            <Send />
          </Button>
        </InputContainer>
      </Container>
    )
  }
)