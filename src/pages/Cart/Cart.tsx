import { Add, Remove } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Announcement } from '../../components/Announcement';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { addOrder } from '../../redux/apiCalls';
import { resetCart } from '../../redux/cartRedux';
import { mobile, tablet } from '../../responsive';

interface Props {
  typed?: string;
  color?: string;
}

const Container = styled.div``

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
  ${tablet({ maxWidth: "500px", display: "flex", flexDirection: "column", alignItems: "center", margin: "0 auto" })}
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  ${tablet({ width: "100%" })}
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props: Props) => props.typed === "filled" && "none"};
  background-color: ${(props: Props) => props.typed === "filled" ? "black" : "transparent"};
  color: ${(props: Props) => props.typed === "filled" && "white"};
`

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
  ${tablet({ display: "none" })}
`

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  ${tablet({ flexDirection: "column" })}
`

const Info = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  ${tablet({ flexDirection: "column" })}
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`

const Image = styled.img`
  width: 200px;
`

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props: Props) => props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${mobile({ justifyContent: "center" })}
  ${tablet({ justifyContent: "center" })}
`

const ProductAmount = styled.span`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
  ${tablet({ margin: "5px 20px" })}
`

const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px", textAlign: "center" })}
  ${tablet({ marginBottom: "25px", textAlign: "center" })}
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 60vh;
  ${tablet({ maxWidth: "450px", flex: 0 })}
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`

const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props: Props) => props.typed === "total" && "500"};
  font-size: ${(props: Props) => props.typed === "total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`

export const Cart: React.FC = React.memo(
  () => {
    const products: Product[] = useSelector((state: any) => state.product.products);
    const cart: Cart = useSelector((state: any) => state.cart.cart);
    const [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      const total = cart.products.reduce((sum, n) => sum + n.total, 0);

      setTotalPrice(total);
    }, [cart.products]);

    const handleClick = () => {
      const order = {
        userId: cart._id,
        products: cart.products.map(product => ({
          productId: product.productId,
          quantity: product.quantity,
        })),
        amount: totalPrice,
        address: '2014 Forest Hills Drive',
        status: "Pending",
      }

      addOrder(dispatch, order);
      navigate("/");
      dispatch(resetCart());
    }

    return (
      <Container>
        <Navbar />
        <Announcement />

        <Wrapper>
          <Title>YOUR BAG</Title>

          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>

            <TopTexts>
              <TopText>Shopping Bag(2)</TopText>

              <TopText>Your Wishlist</TopText>
            </TopTexts>

            <TopButton 
              typed="filled" 
              onClick={() => handleClick()}
            >
              CHECKOUT NOW
            </TopButton>
          </Top>

          <Bottom>
            <Info>
              {cart.products.map(product => {
                const prod = products.find(a => a._id === product.productId);

                return (
                  <>
                    <Product key={product.productId}>
                      <ProductDetail>
                        <Image src={prod?.image} />

                        <Details>
                          <ProductName>
                            <b>Product:</b> {prod?.title}
                          </ProductName>

                          <ProductId><b>ID:</b> {product.productId}</ProductId>
                          <ProductColor color={product.color} />
                          <ProductSize><b>Size:</b> {product.size}</ProductSize>
                        </Details>
                      </ProductDetail>

                      <PriceDetail>
                        <ProductAmountContainer>
                          <Remove />

                          <ProductAmount>{product.quantity}</ProductAmount>

                          <Add />
                        </ProductAmountContainer>

                        <ProductPrice>
                          ${product.total}
                        </ProductPrice>
                      </PriceDetail>
                    </Product>

                    <Hr />
                  </>
                )
              })}
            </Info>

            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>

              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>${totalPrice}</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$5.90</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$-5.90</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem typed="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>${totalPrice}</SummaryItemPrice>
              </SummaryItem>

              <Button onClick={() => handleClick()}>CHECKOUT NOW</Button>
            </Summary>
          </Bottom>
        </Wrapper>

        <Footer />
      </Container>
    )
  }
)