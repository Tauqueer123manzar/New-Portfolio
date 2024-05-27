import React from 'react';
import Ecommerce from '../assets/Ecommerce.jpg';
import Doctor from '../assets/doctor_appointment_system.jpg';
import JobSeeking from '../assets/job_seeking.jpg';
import Portfolio from '../assets/portfolio.jpg';
import Weather from '../assets/weather.jpg';
import Youtube from '../assets/youtube_text_summarization.png';
import { FaGithub } from "react-icons/fa";
import { Container,Row,Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import '../App.css'
const Projects = () => {
  var projectData=[
    {
      id:1,
      Image:Ecommerce,
      title:"Ecommerce Website",
      icon:<FaGithub size={50}/>,
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"

    },
    {
      id:2,
      Image:Doctor,
      title:"Doctor Appointment",
      icon:<FaGithub size={50}/>,
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"

    },
    {
      id:3,
      Image:Portfolio,
      title:"Portfolio",
      icon:<FaGithub size={50}/>,
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"

    },
    {
      id:4,
      Image:JobSeeking,
      title:"Job Seeking application",
      icon:<FaGithub size={50}/>,
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"

    },
    {
      id:5,
      Image:Weather,
      title:"Weather Application",
      icon:<FaGithub size={50}/>,
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"

    },
    {
      id:6,
      Image:Youtube,
      title:"Youtube summarizer",
      icon:<FaGithub size={50}/>,
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"

    }
  ];
  return (
    <section id="projects" className='bg-dark' style={{maxWidth:"100%",maxHeight:"100%"}}>
      <Container fluid>
        <div className='text-danger text-center p-5'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</div>
        <div className='text-white text-center mt-1' style={{fontSize:"45px",fontFamily:"sans-serif",fontWeight:"700"}}>My Projects</div>
        <Row className="mt-5 p-4">
          {
            projectData.map(projects=>{
              return(
                <Col sm={12} md={6} lg={4} key={projects.id}>
                <Card className="bg-black card-hover" style={{ width: '21rem',height:"450px",margin:"10px",padding:"5px"}}>
                <Card.Img style={{width:"20rem",height:"200px"}} variant="top" src={projects.Image} />
                    <Card.Body >
                    <div className='d-flex justify-content-between align-items-center'>
                      <Card.Title className='text-info fs-3 mb-0'>{projects.title}</Card.Title>
                      <a href="https://github.com/Tauqueer123manzar" target="_blank" rel="noopener noreferrer" className='text-secondary'>
                        {projects.icon}
                      </a>
                    </div>
                      <Card.Text className='text-white'>
                       {projects.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default Projects
