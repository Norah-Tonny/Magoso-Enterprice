import { slide } from "../data";
import styled from "styled-components";

const SliderContainer = styled.div``;

const SliderItem = styled.div`
position:relative;
width:100vw;
height:70vh;`;

const ImageContainer = styled.div`
width:100%;
height:100%;`

const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;`;

const SliderInfo = styled.div`
position:absolute;
top:0;
left:0;`;

const SliderHeading = styled.div``;
const SliderDescription = styled.div``;
const Button = styled.div``;

const Slider = () => {
  return (
    <SliderContainer>
      {slide.map((slide, index) => {
        return (
          <SliderItem>
            <ImageContainer>
              <Image src={slide.img} />
            </ImageContainer>

            <SliderInfo>
              <SliderHeading>{slide.name}</SliderHeading>
              <SliderDescription>{slide.description}</SliderDescription>
              <Button>{slide.name} Shop</Button>
            </SliderInfo>
          </SliderItem>
        );
      })}
    </SliderContainer>
  );
};
export default Slider;
