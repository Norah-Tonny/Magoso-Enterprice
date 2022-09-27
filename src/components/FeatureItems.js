import { BorderColor, BorderTop } from "@mui/icons-material"
import { style } from "@mui/system/Stack/createStack"
import styled from "styled-components"
const FeatureItemContainer = styled.div`
border:2px  solid lightGrey;
border-radius:2px solid green;
box-shadow:5px ;
display:flex;
width:fit-content;
padding:1em 2em;
align-items:center;
gap:1em;

`
const FeatureItemText = styled.h3``


const FeatureItem = ({text,icon,borderColor}) => {
    return (
        <FeatureItemContainer style={{ borderTop:`5px solid ${borderColor}`}}>
            {icon}
            <FeatureItemText>{text}</FeatureItemText>
            </FeatureItemContainer>
    )
}
export default FeatureItem