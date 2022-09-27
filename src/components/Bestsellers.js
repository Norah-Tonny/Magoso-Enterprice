import BestsellersItems from "./BestsellersItems";
import styled from "styled-components";
import SendIcon from '@mui/icons-material/Send';

const BestsellersContainer = styled.div`
margin:0 auto;`
const NewsletterContainer = styled.div`
text-align:center;
`
const NewsletterHeading = styled.h2`
font-size:2rem;
font-weight:bold;
font-family:san-serif;
`
const NewsletterParagraph = styled.p`
font-size:1.5rem;
font-family:san-serif;
`
const NewsletterEmail = styled.input`
padding:0 2em;
border-radius:6px;
border:3px solid green;
color:orange;
`
const NewsletterBUtton = styled.button`
 padding:.6em 2em;
background:orange;
color:green;
cursor:pointer;
border-radius:6px;
`
const NewsletterEmailButton = styled.div`
display:flex;
justify-content:center;
gap:1em;
`

const Bestsellers = () => {
    return (
        <BestsellersContainer>
            <BestsellersItems />
        </BestsellersContainer>
    )
}
export default Bestsellers;




