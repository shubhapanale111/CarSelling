import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Carousel} from 'react-bootstrap';
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import ProductList from "../components/ProductList";
import "./home.css"

const Home = () => {
  const navigate = useNavigate();
  return (
    <div  className="App" > 
        <Header/>
        <div className="caro">
     <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 sliderimage"
      src={require(`../images/111.jpg`)}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 sliderimage"
      src={require(`../images/222.jpg`)}
     
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 sliderimage"
      src={require(`../images/333.jpg`)}
      
      alt="Third slide"
    />

  </Carousel.Item>
 
</Carousel>
<ProductList/>
</div>
<br/>
<br/>
<br/>
<br/>
</div>    

  );
};

export default Home;
