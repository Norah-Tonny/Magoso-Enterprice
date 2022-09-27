
import styled from "styled-components"

const ShopItemsContainer = styled.div`
display:flex;
// width: 85%;
margin: 0 auto;
background-color:silver;`


const ShopItemsLeft=styled.div``


const ShopItemsRight=styled.div``


const ShopItemsHeading = styled.h1``



const ShopItemsParagraph = styled.p``


const ShopItemsColor = styled.select``



const SelectedOption = styled.option``


const ShopItemsSize = styled.select``


const ShopItemsPrice = styled.select``





const ShopItems = () => {
    return (
        <ShopItemsContainer>
            

            <ShopItemsLeft>
            <ShopItemsHeading>Dresses</ShopItemsHeading>
            <img src="https://images.pexels.com/photos/6192554/pexels-photo-6192554.jpeg?cs=srgb&dl=pexels-rodnae-productions-6192554.jpg&fm=jpg" width="50%"/>
            </ShopItemsLeft>
            
            <ShopItemsRight>
            <ShopItemsParagraph>Filter Product:Size</ShopItemsParagraph>

            <ShopItemsSize>
        <SelectedOption disable selescted>Size</SelectedOption>
           <SelectedOption >S</SelectedOption>
           <SelectedOption >M</SelectedOption>
            <SelectedOption>L</SelectedOption>
            <SelectedOption>XL</SelectedOption>
            <SelectedOption>XXL</SelectedOption>
            </ShopItemsSize>


            <ShopItemsColor>
                <SelectedOption disable selescted>color</SelectedOption>
           <SelectedOption >White</SelectedOption>
           <SelectedOption >Black</SelectedOption>
            <SelectedOption>green</SelectedOption>
            <SelectedOption>Red</SelectedOption>
            <SelectedOption>Blue</SelectedOption>
            </ShopItemsColor>


            <ShopItemsPrice>
            <ShopItemsParagraph>Filter Product:Price</ShopItemsParagraph>
           <SelectedOption disable selescted>Price</SelectedOption>
           <SelectedOption >Highest to Lowest</SelectedOption>
           <SelectedOption >Lowest to Highest</SelectedOption>
           </ShopItemsPrice>

           </ShopItemsRight>
    </ShopItemsContainer>

    )
}
export default ShopItems;