import { Facebook, Instagram, MailOutlined, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile, tablet } from '../../responsive';

interface Props {
  color: string;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  ${tablet({ flexDirection: "column" })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;

  ${tablet({ alignItems: "center" })}
`

const Logo = styled.h1``

const Description = styled.p`
  margin: 20px 0;

  ${tablet({ textAlign: "center", maxWidth: "500px" })}
`

const SocialContainer = styled.div`
  display: flex;
  gap: 20px;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: #${(props: Props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    opacity: 0.5;
  }
`

const Center = styled.div`
  flex: 1;
  padding: 20px;

  ${tablet({ display: "none" })}
`

const Title = styled.h3`
  margin-bottom: 30px;
`
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  
  ${mobile({ backgroundColor: "#fff8f8" })}
  ${tablet({ backgroundColor: "#fff8f8", alignItems: "center" })}
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
  width: 50%;
`

export const Footer: React.FC = React.memo(
  () => {
    return (
      <Container>
        <Left>
          <Logo>59MrRobot</Logo>

          <Description>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.
          </Description>

          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>

            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>

            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>

            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>

        <Center>
          <Title>Useful Links:</Title>

          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>

        <Right>
          <Title>Contact:</Title>

          <ContactItem>
            <Room style={{marginRight:"10px"}} />
            622 Dixie Path , South Tobinchester 98336 
          </ContactItem>

          <ContactItem>
            <Phone style={{marginRight:"10px"}} />
            +27 71 540 9503
          </ContactItem>
        
          <ContactItem>
            <MailOutlined style={{marginRight:"10px"}} />
            kuneneswazi18@gmail.com
          </ContactItem>

          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
      </Container>
    )
  }
)