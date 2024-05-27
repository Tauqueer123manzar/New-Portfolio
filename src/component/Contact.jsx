import React from 'react'
import Card from 'react-bootstrap/Card';
import photo from '../assets/Image1.png'
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css'
const Contact = () => {
  return (
    <section id="contact" className='bg-dark' style={{ maxWidth: "100%", maxHeight: "100%" }}>
      <Container fluid>
        <div className='text-danger text-center p-5'>CONTACT</div>
        <div className='text-white text-center mt-1' style={{ fontSize: "45px", fontWeight: "700", fontFamily: "serif" }}>Contact With Me</div>
        <Row className="mt-4">

          <Col sm={12} md={5} lg={4}>
            <Card className="card-hover" style={{ width: '25rem', height: "auto", backgroundColor: "#23272b" }}>
              <Card.Img variant="top" style={{ width: "auto", height: "400px", padding: "25px" }} src={photo} />
              <Card.Body>
                <Card.Title className='text-white p-2' style={{fontWeight:"700"}}>MD TAUQUEER MANZAR</Card.Title>
                <Card.Text className='text-white p-2'>
                  MERN Stack Developer
                </Card.Text>
                <Card.Text className='text-white p-1'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis ipsam autem cumque, accusantium dicta odio.
                </Card.Text>
                <Card.Text className='text-white p-2'>
                  Phone: +91-7549200441
                </Card.Text>
                <Card.Text className='text-white p-2'>
                  Email : mdtauqueermanzar@gmail.com
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={7} lg={8}>
            <Form className='card-hover p-2 bg-#23272b rounded'>
              <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridfname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridlname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last name" />
                </Form.Group>
              </Row>
              <Row className="mb-4 ">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-4" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="Vill ward-no block" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control placeholder='City' />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="BIHAR">
                    <option>BIHAR</option>
                    <option>DELHI</option>
                    <option>HYDERABAD</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip code</Form.Label>
                  <Form.Control placeholder='Zip code' />
                </Form.Group>
              </Row>

              <Form.Group className="mb-4" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit" style={{ width: "100%" }}>
                Submit
              </Button>

              <p className='text-white fs-4 d-flex justify-content-center align-items-center' style={{ fontFamily: "serif", marginLeft: "10px", marginTop: "10px" }}>FIND ME IN</p>
              <div className="d-flex justify-content-center align-items-center" style={{ marginLeft: "10px" }}>
                <a
                  href="https://github.com/Tauqueer123manzar"
                  className="text-primary fs-4 shadow btn btn-secondary"
                >
                  <i className="fab fa-github"></i></a>
                <a
                  href="https://www.linkedin.com/in/md-tauqueer-manzar-268408233/"
                  className="text-primary m-4 fs-4 shadow btn btn-secondary"
                >
                  <i className="fab fa-linkedin icon"></i></a>
                <a
                  href="https://leetcode.com/u/Tauqueer_manzar/"
                  className="text-danger fs-4 shadow btn btn-secondary"
                >
                  <i className="fab fa-code"></i></a>
                <a
                  href='https://www.geeksforgeeks.org/user/mdtauqueermanzar/'
                  className='text-success m-4 shadow fs-4 btn btn-secondary'
                ><i className="fas fa-graduation-cap"></i></a>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <hr style={{borderColor:"white",marginTop:"12px"}}/> 
      <footer className='mt-4 p-4 text-danger text-center'>© 2024. All rights reserved by Md Tauqueer manzar</footer>
    </section>
  )
}

export default Contact
