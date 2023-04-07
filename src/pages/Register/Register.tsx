import { CancelOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { mobile, tablet } from '../../responsive';
import { Link, useNavigate } from "react-router-dom";
import { register } from '../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

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
  ${mobile({ width: "75%" })}
  ${tablet({ width: "80%" })}
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

const ErrorMessage = styled.p`
  margin-top: 4px;
  font-size: 12px;
  color: #ef0107;
`

export const Register: React.FC = React.memo(
  () => {
    const [inputs, setInputs] = useState({});
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputs((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    }

    useEffect(() => {
      if ((password && confirmPassword) && password === confirmPassword) {
        setInputs((prev) => ({
          ...prev,
          password,
        }));
        setErrorMessage("");
      } 
      
      if ((password && confirmPassword) && password !== confirmPassword) {
        setErrorMessage("Passwords do not match.");
      }
    }, [confirmPassword, password])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const finalUser = {
        ...inputs,
        fullName: `${firstName} ${lastName}`,
      }

      register(dispatch, finalUser);
    }

    useEffect(() => {
      if (!user) {
        navigate("/");
      } else {
        console.log(user.error)
      }
    }, [navigate, user]);

    return (
      <Container>
        <Wrapper>
          <Top>
            <Title>CREATE AN ACCOUNT</Title>  

            <Link to="/">
              <CancelOutlined style={{color: "#000"}}/>
            </Link>
          </Top>

          <Form onSubmit={handleSubmit}>
            <Input 
              type="text" 
              name="name" 
              placeholder="First Name"
              onChange={(event) => setFirstName(event.target.value)}
            ></Input>

            <Input 
              type="text" 
              name="lastname" 
              placeholder="Last Name"
              onChange={(event) => setLastName(event.target.value)}
            ></Input>

            <Input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
            ></Input>

            <Input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            ></Input>

            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            ></Input>

            <Input
              type="password"
              placeholder="Confirm Password"
              onChange={(event) => setConfirmPassword(event.target.value)}
            ></Input>

            <Input
              type="text"
              name="country"
              placeholder="Country"
              onChange={handleChange}
            ></Input>

            <Input
              type="text"
              name="number"
              placeholder="Number"
              onChange={handleChange}
            ></Input>

            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

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