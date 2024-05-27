import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { IoBusinessSharp } from "react-icons/io5";
import { MdApps } from "react-icons/md";
import { SiAntdesign } from "react-icons/si";
import { MdOutlineInstallMobile } from "react-icons/md";
import { SiSimilarweb } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import '../App.css'

const Features = () => {
  var featureData = [
    {
      id: 1,
      icon: <IoBusinessSharp size={50} className='icon-animation' />,
      title: "Business Strategy",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad'
    },
    {
      id: 2,
      icon: <MdApps size={50} className='icon-animation' />,
      title: "App Development",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad'
    },
    {
      id: 3,
      icon: <SiAntdesign size={50} className='icon-animation' />,
      title: "UX Design",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad'
    },
    {
      id: 4,
      icon: <MdOutlineInstallMobile size={50} className='icon-animation' />,
      title: "Mobile Development",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad'
    },
    {
      id: 5,
      icon: <SiSimilarweb size={50} className='icon-animation' />,
      title: "Web Hosting",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad'
    },
    {
      id: 6,
      icon: <FaDatabase size={50} className='icon-animation' />,
      title: "Database",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad'
    }
  ];
  return (
    <section id="features" className='bg-dark' style={{ maxWidth: "100%", maxHeight: "100%" }}>
      <Container fluid>
        <div className='text-danger fs-4 p-4'>Features</div>
        <h1 className='text-white p-4' style={{ fontWeight: "800", fontSize: "45px" }}>What I Do</h1>
        <Row className='mt-5 p-4'>
          {
            featureData.map(Features => {
              return (
                <Col sm={12} md={6} lg={4} key={Features.id}>
                  <Card className="bg-secondary card-hover" style={{ width: '21rem', height: "350px", margin: "10px", padding: "5px" }}>
                    <Card.Body
                      className='text-center m-5 text-danger'> {Features.icon}
                      <Card.Title className='text-white fs-3'>{Features.title}</Card.Title>
                      <Card.Text className='text-white'>
                        {Features.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>
      <hr style={{ borderColor: "white", margin: "0" }} />
    </section>
  )
}

export default Features
