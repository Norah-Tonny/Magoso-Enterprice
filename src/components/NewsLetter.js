
import styled from "styled-components"
import SendIcon from '@mui/icons-material/Send';
const NewsletterContainer = styled.div`
text-align:center;
background-color:silver;
`
const NewsletterHeading = styled.h2`
font-size:2rem;
font-weight:bold;
font-family:san-serif;
color:orange;
margin:.5em;
`
const NewsletterParagraph = styled.p`
font-size:1.5rem;
font-family:san-serif;
margin:.5em;
`
const NewsletterEmail = styled.input`
padding:0 2em;
border-radius:6px;
border:3px solid silver;
color:orange;
`
const NewsletterBUtton = styled.button`
 padding:.3em 2em;
background:gray;
cursor:pointer;
border-radius:6px;
color:orange;
`
const NewsletterEmailButton = styled.div`
display:flex;
justify-content:center;
gap:1em;
margin:1em;
`
const Newsletter = () => {
    return (
        <NewsletterContainer>
            <NewsletterHeading>Subscribe to our Newsletter</NewsletterHeading>
            <NewsletterParagraph>Subscribe to our Newsletter for updates on latest promotions and offers</NewsletterParagraph>
            <NewsletterEmailButton>
                <NewsletterEmail type="email" placeholder="Email address" />
                <NewsletterBUtton>
                    {<SendIcon />}</NewsletterBUtton>
            </NewsletterEmailButton>
        </NewsletterContainer>
    )
}
export default Newsletter;