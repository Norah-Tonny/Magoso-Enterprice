import CategoriesItem from "./CategoriesItem"
import styled from "styled-components"

const CategoriesHeading = styled.h1`
text-align:center;
font-weight:bold;
color:gray;
margin:1.5em;`

const Categories = () => {
    return (
        <>
        <CategoriesHeading>Browse Categories</CategoriesHeading>
            <CategoriesItem />
        </>
    )
}                                     
export default Categories