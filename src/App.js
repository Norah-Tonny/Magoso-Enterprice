import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Nav from './components/Nav';
import './App.css';
import Home from "./Pages/Home";
import Shop from "./Pages/Shop" 
import Contact from "./Pages/Contact" 
import About from "./Pages/About " 
import SingleProduct from './Pages/SingleProduct';
import LoginForm from "./Pages/LoginForm";
import AddProduct from './Pages/AddProduct';
import { appBarClasses } from "@mui/material";
import Categories from "./components/Categories";

function App() {
  return (


    <BrowserRouter>
      

      <Routes>

        <Route path="/" element ={<Home/>}/>
        <Route path="/shop" element ={<Shop/>} />
        <Route path="/singleProduct" element ={<SingleProduct />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element ={<About/>} />
        <Route path="/addProduct" element={<AddProduct />} />
        
        
      </Routes>

    </BrowserRouter>
  );
}

export default App;



