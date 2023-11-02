import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import { tablet } from '../../responsive';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setSelectedCategory } from '../../redux/productRedux';
import SliderImage1 from './slider-image-1.webp';
import SliderImage2 from './slider-image-2.webp';
import SliderImage3 from './slider-image-3.webp';

interface Props {
  direction?: string;
  bg?: string;
  slideIndex?: number;
}

const sliderItems = [
  {
    id: 1,
    img: SliderImage1,
    title: "SHOES SALE",
    description: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS",
    bg: "F5FAFD",
    name: "shoes",
  },
  {
    id: 2,
    img: SliderImage2,
    title: "T-SHIRT COLLECTION",
    description: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS",
    bg: "FCF1ED",
    name: "t-shirts",
  },
  {
    id: 3,
    img: SliderImage3,
    title: "SHIRTS LOVE",
    description: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS",
    bg: "FBF0F4",
    name: "shirts",
  },
];

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;

  ${tablet({ display: "none" })}
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #FFF7F7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props: Props) => props.direction === "left" && "10px"};
  right: ${(props: Props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props: Props) => props.slideIndex! * -100}vw);
`

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props: Props) => props.bg};
`

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`

const Image = styled.img`
  height: 80%;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`

const Title = styled.h1`
  font-size: 70px;
`

const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`

export const Slider: React.FC = React.memo(
  () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const dispatch = useDispatch();

    const handleClick = (direction: string) => {
      if (direction === 'left') {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
    }

    return (
      <Container>
        <Arrow direction="left" onClick={() => handleClick('left')}>
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map(item => (
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>

              <InfoContainer>
                <Title>{item.title}</Title>

                <Description>{item.description}</Description>

                <Link to={`/products/category/${item.name}`}>
                  <Button onClick={() => dispatch(setSelectedCategory({
                    name: item.name,
                    title: item.title,
                  }))}
                  >
                    SHOW NOW
                  </Button>
                </Link>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick('right')}>
          <ArrowRightOutlined />
        </Arrow>
      </Container>
    )
  }
)