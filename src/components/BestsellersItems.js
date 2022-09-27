
import { bestsellers } from "../data";
import styled from "styled-components";
const BestsellersContainer = styled.div`
margin:0 auto;`
const Container = styled.div`
display:flex;
gap:1em;
width:70%;
margin:3em auto;

`
const InnerBestsellerContainer = styled.div`
width:30%;
border:2px solid gray;
border-radius:5px;
padding:1em;
gap:3em;
`
const BestsellersImageContainer = styled.div`
width:100%;
height:300px;
`
const Image = styled.img`
width:100%;
height:100%;
`
const BestsellerInfo = styled.div`
`
const BestsellersHeading = styled.h1`
// text-decoration:underline;
margin:1em;
text-transform:capitalise;
color:gray;
font-weight:bold;
font-family:san-serif;
text-align:center;
`
const BestsellersAmount = styled.h3`
text-transform:capitalise;
font-family:san-serif;
font-size:1.6rem;
`
const BestsellersAmounts = styled.h3`
font-family:san-serif;
`
const BestsellersButton = styled.button`
 padding:.2em 2em;
background:orange;
color:gray;
cursor:pointer;
border-radius:6px;
border:1px solid orange;
font-weight:bold;
`
const BestsellersAddCart = styled.button`
background:gray;
color:orange;
padding:.6em 2em;
font-weight:bold;
cursor:pointer;
border-radius:6px ;
`
const BestsellerButtonContainer = styled.div`
display:flex;
gap:8em;
padding:1em 1em;
`
const BestsellersItems = () => {
    return (
        <BestsellersContainer>
            <BestsellersHeading>Best Seller</BestsellersHeading>
            <Container>
                {
                    bestsellers.slice(0, 3).map((bestseller, index) => {
                        return (
                            <InnerBestsellerContainer>
                                <BestsellersImageContainer>
                                    <Image src={bestseller.img} />
                                </BestsellersImageContainer>
                                <BestsellerInfo>
                                    <BestsellersAmount>{bestseller.name} </BestsellersAmount>
                                    <BestsellersAmounts>Ksh.{bestseller.amount}/=</BestsellersAmounts>
                                    <BestsellerButtonContainer>
                                        <BestsellersAddCart>Add To Cart</BestsellersAddCart>
                                        <BestsellersButton>Buy Now</BestsellersButton>
                                    </BestsellerButtonContainer>
                                </BestsellerInfo>
                            </InnerBestsellerContainer>
                        )
                    })
                }
            </Container>
        </BestsellersContainer>
    )
}
export default BestsellersItems;