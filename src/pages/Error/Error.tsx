import React from 'react';
import styled from 'styled-components';
import { mobile, tablet } from '../../responsive';
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5), 
      rgba(255, 255, 255, 0.5)
    ),
   url("https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?h=650&w=940") center no-repeat;
   background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 10px;
  background-color: #fff;

  ${tablet({ width: "50%" })}
  ${mobile({ width: "75%" })}
`

const Title = styled.h1`
  margin: 0;
  font-weight: 200;
  font-size: 70px;
  text-align: center;
`

const Text = styled.span`
  margin: 20px 0;
  font-size: 20px;
  text-align: center;
`

const LinkText = styled.a`
  font-size: 14px;
  text-align: center;
  text-decoration: underline;
  color: #008080;
`

export const Error: React.FC = React.memo(
  () => {
    return (
      <Container id="error-page">
        <Wrapper>
          <Title>Oops!</Title>

          <Text>Sorry, an unexpected error has occurred.</Text>

          <Text>
            <i>Page not found</i>
          </Text>

          <Link to="/">
            <LinkText>Go Back Home</LinkText>
          </Link>
        </Wrapper>
      </Container>
    )
  }
)
