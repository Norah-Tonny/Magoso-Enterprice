

import styled from "styled-components";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";


const FooterInfo = styled.div`
  background: gray;
`;

const FooterCopy = styled.p`
  text-align: center;
  color:orange;
  padding: 1em 0;
  font-size: 1rem;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;

`;

const FooterMagoso = styled.div`
  width: 23%;
  font-weight:bold;
`;

const FooterMagosoText = styled.p``;

const FooterCustomer = styled.div`
  width: 23%;
`;

const CustomerText = styled.p`
font-weight:bold;`;

const FooterHeading = styled.h3`
color:orange;  
font-size: 1.5em;
font-weight:bold;
margin:1em 0;
`;

const FooterLinks = styled.div`
  width: 23%;
  font-weight:bold;
  
`;

const LinkText = styled.p`
font-weight:bold;`;

const FooterContact = styled.div`
  width: 23%;
`;
const ContactText = styled.p`
font-weight:bold;`;


const FooterItems = () => {
  return (
    <FooterInfo>
      <FooterContainer>
        <FooterMagoso>
          <FooterHeading>MAGOSO ENT</FooterHeading>
          <FooterMagosoText>
            The One E-Commerce website in the south <br/>of Sahara and North of
            Limpompo
          </FooterMagosoText>
        </FooterMagoso>
        <FooterCustomer>
          <FooterHeading>FOR CUSTOMERS</FooterHeading>
          <CustomerText>How to order</CustomerText>
          <CustomerText>Payment Methods</CustomerText>
          <CustomerText>My Account</CustomerText>
          <CustomerText>Track Orders</CustomerText>
        </FooterCustomer>
        <FooterLinks>
          <FooterHeading>QUICK LINKS</FooterHeading>
          <LinkText>Shop</LinkText>
          <LinkText>About Us</LinkText>
          <LinkText>Return Policy</LinkText>
          <LinkText>Terms & Conditions</LinkText>
        </FooterLinks>
        <FooterContact>
          <FooterHeading>CONTACT US</FooterHeading>
          <ContactText>
            {<LocationOnIcon />}Kibera, Nairobi, Kenya
          </ContactText>
          <ContactText>P.O Box 1225-00400</ContactText>
          <ContactText>{<CallIcon />} Call: 0712345678</ContactText>
          <ContactText>{<EmailIcon />} Email: info@magosoent.com</ContactText>
        </FooterContact>
      </FooterContainer>
      <FooterCopy>
        &copy; 2022 | Developed by Norah.
      </FooterCopy>
    </FooterInfo>
  );
};
export default FooterItems;
