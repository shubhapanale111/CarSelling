import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Card.css";
import Header from "../components/Header";
class About extends Component {
  render() {
    return (
      <>
      <Header/>
        <div class="bg-image" style={{marginTop:60}}>
          <Container>
            <Row>
              
           
             <div>
             <br />
                 
                 <br /> <br />
                 
                 <br />
                     <h1><center> <b>About Us</b></center></h1>
                     <br />
                      <h3><center> Welcome to our car selling company, where we are passionate about providing exceptional customer service and delivering high-quality vehicles to our clients.
                      At our company, we take pride in the quality of our inventory. Each vehicle undergoes a rigorous inspection process to ensure that it meets our high standards before being offered for sale. We offer a wide range of cars to suit different needs and budgets, from practical and reliable to luxurious and high-performance.Thank you for considering our car selling company. We look forward to serving you and providing you with the best possible car buying experience.
                      </center></h3>
              
                  <br />
                 
                  <br />
                  <br />
                 
                 <br />
                 <br />
                 
                 <br />
                 <br />
                 
                 <br />
                </div>
              
 
            </Row>
            
          </Container>
        </div>
      </>
    );
  }
}

export default About;
