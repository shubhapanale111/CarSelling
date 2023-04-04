import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Card.css";
import Header from "../components/Header";
import Shubham from "../images/Shubham.jpg"

class Contact extends Component {
  render() {
    return (
      <>
        <Header />
        <div class="bg-image" style={{ marginTop: 60 }}>
          <Container>
            <Row>
              <div>
                <br />
                <br />
                <br />
                <h1>
                  <center> Contact Us</center>
                </h1>
                <br />
                <br />
                <br />
                <br />
                <h2>
                  <center>
                    Company Name: Cars Selling Company...!!!
                    <br />
                    <br />
                    Owner Name: Shubham Ram Panale
                    <br /> <br />
                    <img
                      src={Shubham}
                      alt="Owner photo"
                      width="200"
                      height="200"
                    />
                    <br /> <br />
                    Email: shubhampanale111@gmail.com
                    <br />
                    Contact: 7770025901
                    <br />
                    Address: Solapur.
                    <br />
                    <br />
                    <br />
                  </center>
                </h2>
              </div>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Contact;
