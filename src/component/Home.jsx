import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Container, Row, Col,Image } from 'react-bootstrap';
import myImage from '../../src/assets/image.png'
import Features from './Features';
const Home = () => {
  return (
    <Container className='bg-dark' style={{ maxWidth: '100%',maxHeight:"100%"}}>
      <Row>
        <Col sm={12} md={6} lg={8} className='text-md-left' style={{marginTop:"40px"}}>
          <p className='m-5 text-white'>WELCOME TO MY WORLD</p>
          <h1 className='text-white m-5 fs-1' style={{fontFamily:"sans-serif"}}>Hi,I am <span style={{color:" #d25565"}}>Md Tauqueer Manzar</span></h1>
          <h1 className="text-danger m-5 fs-2" style={{fontFamily:"initial"}}>
            <Typewriter
              words={['I am a full stack web developer,frontend_designer and backend_developer.']}
              loop={false}
              cursor
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className='text-white m-5 fs-4' style={{fontFamily:"initial"}}>a passionate full stack web developer with a keen interest in crafting immersive web experiences. My journey into the world of web development started with a curiosity for building things that live on the internet. Now, I specialize in creating dynamic and responsive web applications that not only look great but also perform flawlessly.</p>
        </Col>
        <Col sm={12} md={6} lg={4} className='d-flex justify-content-center align-items-center'>
        <Image
          src={myImage}
          rounded
          alt="My Image"
          className='m-2 shadow'
          style={{ maxWidth: '80%',height:"auto"}}
         />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
