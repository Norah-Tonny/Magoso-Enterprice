import FeatureItem from "./FeatureItems";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PercentIcon from '@mui/icons-material/Percent';
import DiamondIcon from '@mui/icons-material/Diamond';
import styled from "styled-components";

const FeatureContainer = styled.div``

const Container = styled.div`
padding:2em;
display:flex;
justify-content :space-between;
width:80%;
margin:0 auto;
`

const Features = () => {
    return (
        <FeatureContainer>
            <Container>
      {" "}
      <FeatureItem icon={<AccessTimeIcon/>} text="24/7" borderColor="green" />
      <FeatureItem icon={<PercentIcon/>} text="Great offers" borderColor="orange" />
      <FeatureItem icon={<DiamondIcon/>} text="Quality" borderColor="purple" />
      </Container>
    </FeatureContainer>
  );
};
export default Features;
