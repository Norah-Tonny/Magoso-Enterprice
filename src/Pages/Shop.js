import Nav from "../components/Nav"
import ShopItems from"../components/ShopItems"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer" 
import styled from "styled-components"

const ShopContainer=styled.div``

const Shop = () => {
    return (
        <ShopContainer>
            <Nav />
    
            <ShopItems />
            <NewsLetter />
            <Footer />
        </ShopContainer>
        
    );
}
export default Shop;