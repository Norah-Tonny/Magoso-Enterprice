import LoginItems from "../components/LoginItems"
import styled from "styled-components"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
const LoginContainers = styled.div``
const LoginForm = () => {
    return (
        <LoginContainers>
            <Nav />
            <LoginItems />
            <Footer/>
        </LoginContainers>
    )
}
export default LoginForm;