import styled from "styled-components";

const ShopItemsContainer = styled.div`
  display:flex;
  // width: 85%;
  margin: 0 auto;
  background-color: silver;
`;

const ShopItemsLeft = styled.div``;

const ShopItemsRight = styled.div`
display:flex;
gap:3;

`;

const ShopItemsHeading = styled.h1`
  padding: 2em;
`;
const ShopSize = styled.div``
const ShopPrice = styled.div``
const ShopColor = styled.div``
const ShopItemsParagraph = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2em;
  padding-right: 20em;
`;
// const SelectedOption=styled.select``
const ShopItemsColor = styled.select``;
const SelectedOptionColor = styled.option``;
const SelectedOptionPrice = styled.option``;

const SelectedOptionSize = styled.option`
padding:1em 2em;
display:flex;`;

const ShopItemsSize = styled.select``;

const ShopItemsPrice = styled.select``;

const ShopItems = () => {
  return (
    <ShopItemsContainer>
      <ShopItemsLeft>
        <ShopItemsHeading>Attire</ShopItemsHeading>
        <img
          src="https://images.pexels.com/photos/6192554/pexels-photo-6192554.jpeg?cs=srgb&dl=pexels-rodnae-productions-6192554.jpg&fm=jpg"
          width="50%"
          alt="a dress"
        />
      </ShopItemsLeft>

          <ShopItemsRight>
          <ShopSize>
 
              
                  <ShopItemsParagraph>Filter Product:Size
                      <span>
                          <ShopItemsSize>
          <SelectedOptionSize disable selescted>
            Size
          </SelectedOptionSize>
          <SelectedOptionSize>S</SelectedOptionSize>
          <SelectedOptionSize>M</SelectedOptionSize>
          <SelectedOptionSize>L</SelectedOptionSize>
          <SelectedOptionSize>XL</SelectedOptionSize>
          <SelectedOptionSize>XXL</SelectedOptionSize>
              </ShopItemsSize>
                      </span>
              </ShopItemsParagraph>
  
                      </ShopSize>

 

              <ShopColor>
                  <ShopItemsColor>
          <SelectedOptionColor disable selescted>
            color
          </SelectedOptionColor>
          <SelectedOptionColor>White</SelectedOptionColor>
          <SelectedOptionColor>Black</SelectedOptionColor>
          <SelectedOptionColor>green</SelectedOptionColor>
          <SelectedOptionColor>Red</SelectedOptionColor>
          <SelectedOptionColor>Blue</SelectedOptionColor>
              </ShopItemsColor>
              </ShopColor>


<ShopPrice>
        <ShopItemsPrice>
          <ShopItemsParagraph>Filter Product:Price</ShopItemsParagraph>
          <SelectedOptionPrice disable selescted>
            Price
          </SelectedOptionPrice>
          <SelectedOptionPrice>Highest to Lowest</SelectedOptionPrice>
          <SelectedOptionPrice>Lowest to Highest</SelectedOptionPrice>
              </ShopItemsPrice>
              </ShopPrice>

      </ShopItemsRight>
    </ShopItemsContainer>
  );
};
export default ShopItems;
