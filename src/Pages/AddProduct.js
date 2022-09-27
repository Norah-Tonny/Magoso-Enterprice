import Nav from "../components/Nav"
import styled from "styled-components"
import AddProductItems from "../components/AddProductItems"
import Footer from "../components/Footer"

const AddProductContainer = styled.div``

const AddProduct = () => {
    return (
        <AddProductContainer>
            <Nav />
            <AddProductItems />
            <Footer />
        </AddProductContainer>
    );
};
export default AddProduct;