import styled from "styled-components";
import { categories } from "../data";
const CategoriesItemContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: orange;
  gap: 1em;
`;
const ImageContainer = styled.div`
  width: 30%;
  height: 300px;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


const CategoriesTextContainer = styled.div`
text-align:center;
position: absolute;
text-transform:capitalize;
top: 0;
left: 0;
background:rgba(0,0,0,.5);
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
`

const CategoriesText = styled.h3`

  font-size:3rem;
  color:orange;
  font-weight:bold;

`;


const CategoriesItem = () => {
  return (
    <CategoriesItemContainer>
      {categories.map((categories, index) => {
        return (
          <ImageContainer>
            <Image src={categories.img} />
            <CategoriesTextContainer>
              <CategoriesText>{categories.name}</CategoriesText>
            </CategoriesTextContainer>
            </ImageContainer>
        );
      })}
    </CategoriesItemContainer>
  );
};
export default CategoriesItem;
