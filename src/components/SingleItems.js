// import Nav from "./Nav"
Location
import styled from "styled-components"
// import NewsLetter from "./NewsLetter"
// import Footer from "./Footer"
import SingleItems from "../Pages/SingleProduct"

const SingleItemsConatainer = styled.div`
color:silver;`
const SingleItemsAmount = styled.div``
const SingleItemsImage = styled.img``
const SingleItemsDescription = styled.div``
const SingleItemsName=styled.div``



const SingleItems = () => {
    return (
        <SingleItemsConatainer>
            <SingleItemsImage>
                <img src={ SingleProduct.image} />
            </SingleItemsImage>
            <SingleItemsName>{SingleProduct.name}  </SingleItemsName>
            <SingleItemsDescription>{SingleProduct.description}  </SingleItemsDescription>
            <SingleItemsAmount>{SingleProduct.amount}  </SingleItemsAmount>
        <NewsLetter/>
            <Footer />
            </SingleItemsConatainer>
    )
}
export default SingleItems