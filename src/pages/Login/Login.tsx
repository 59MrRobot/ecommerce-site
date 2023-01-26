import React from 'react';
import styled from 'styled-components';
import { mobile, tablet } from '../../responsive';
import { Link } from "react-router-dom";
import { CancelOutlined } from '@material-ui/icons';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5), 
      rgba(255, 255, 255, 0.5)
    ),
   url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #fff;
  ${mobile({ width: "75%" })}
  ${tablet({ width: "50%" })}
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #008080;
  color: #fff;
  cursor: pointer;
  margin-bottom: 10px;
`

const LinkText = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

export const Login: React.FC = React.memo(
  () => {
    return (
      <Container>
        <Wrapper>
          <Top>
            <Title>SIGN IN</Title>  

            <Link to="/">
              <CancelOutlined style={{color: "#000"}}/>
            </Link>
          </Top>

          <Form>
            <Input placeholder="Username"></Input>

            <Input placeholder="Password"></Input>

            <Button>SIGN IN</Button>

            <LinkText>DO YOU NOT REMEMBER YOUR PASSWORD?</LinkText>
            <LinkText>CREATE A NEW ACCOUNT</LinkText>
          </Form>
        </Wrapper>
      </Container>
    )
  }
)