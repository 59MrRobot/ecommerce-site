import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5), 
      rgba(255, 255, 255, 0.5)
    ),
   url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
   background-size: cover;
   display: flex;
   justify-content: center;
   align-items: center;
`

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #fff;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #008080;
  color: #fff;
  cursor: pointer;
`

export const Register: React.FC = React.memo(
  () => {
    return (
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>

          <Form>
            <Input placeholder="Name"></Input>

            <Input placeholder="Last Name"></Input>

            <Input placeholder="Username"></Input>

            <Input placeholder="Email"></Input>

            <Input placeholder="Password"></Input>

            <Input placeholder="Confirm Password"></Input>

            <Agreement>
              By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>

            <Button>CREATE</Button>
          </Form>
        </Wrapper>
      </Container>
    )
  }
)