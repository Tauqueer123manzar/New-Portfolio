import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../App.css';

const Resume = () => {
  const educationData = [
    {
      id: "1",
      course: "B.Tech In Computer Science",
      University: "Maulana Azad National Urdu University",
      CGPA: "8.40",
      Year: "2021-2025"
    },
    {
      id: "2",
      course: "Intermediate Science",
      University: "SBLC High School Raipur",
      CGPA: "79.6%",
      Year: "2017-2019"
    },
    {
      id: "3",
      course: "Marticulation",
      University: "SBLC High School Raipur",
      CGPA: "69.8%",
      Year: "2017"
    }
  ];
  const skillsData = [
    { skill: "JavaScript", proficiency: 80 },
    { skill: "React", proficiency: 80 },
    { skill: "Node.js", proficiency: 80 },
    { skill: "CSS", proficiency: 75 },
    { skill: "HTML", proficiency: 90 },
    { skill: "Bootstrap", proficiency: 90 },
    { skill: "MongoDb", proficiency: 90 },
    { skill: "Data Structure", proficiency: 90 },
    { skill: "Java", proficiency: 70 }
  ];
  const experienceData = [
    {
      id: "1",
      position: "Intern",
      company: "Technohacks Edutech",
      duration: "June 2023 - August 2023",
      description: "Web Development."
    },
    {
      id: "2",
      position: "Intern",
      company: "Afame Technologies",
      duration: "September 2022 - May 2023",
      description: "Web Development"
    },
    {
      id: "3",
      position: "Intern",
      company: "Chatwise UK Ltd",
      duration: "September 2022 - May 2023",
      description: "Campus Ambasaddor"
    }
  ];

  return (
    <section id="resume" className='bg-dark' style={{ maxWidth: "100%", maxHeight: "100%" }}>
      <Container fluid>
        <div className='text-danger text-center p-5'>FRESHERS</div>
        <div className='text-white text-center p-1' style={{ fontSize: "50px", fontFamily: "serif", fontWeight: "800" }}>My Resume</div>
        <Row className='mt-5 p-4'>

          {/* Education Column */}
          <Col sm={12} md={6} lg={4} className="mb-4" style={{ borderLeft: "1px solid white", padding: "15px" }}>
            <div className='text-danger text-center mb-3' style={{ fontSize: "30px", fontFamily: "serif" }}>Education</div>
            {
              educationData.map((education) => (
                <Card key={education.id} style={{ width: '100%', marginBottom: '15px' }}>
                  <Card.Body>
                    <Card.Title className='text-danger'>{education.course}</Card.Title>
                    <Card.Text>{education.University}</Card.Text>
                    <div className='d-flex justify-content-between align-items-center'>
                      <Card.Text>
                        {education.CGPA}
                      </Card.Text>
                      <Card.Text>
                        {education.Year}
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              ))}
          </Col>

          {/* Skills Column */}
          <Col sm={12} md={6} lg={4} className="mb-4" style={{ borderLeft: "1px solid white", padding: "15px" }}>
            <div className='text-danger text-center mb-3' style={{ fontSize: "30px", fontFamily: "serif" }}>Skills</div>
            {skillsData.map((skill, index) => (
              <div key={index} className="mb-1">
                <div className='text-white mb-1' style={{fontSize:"17px"}}>{skill.skill}</div>
                <ProgressBar now={skill.proficiency} label={`${skill.proficiency}%`} />
              </div>
            ))}
          </Col>

          {/* Experience Column */}
          <Col sm={12} md={6} lg={4} className="mb-4" style={{ borderLeft: "1px solid white", padding: "15px" }}>
            <div className='text-danger text-center mb-3' style={{ fontSize: "30px", fontFamily: "serif" }}>Experience</div>
            {
              experienceData.map((experience) => (
                <Card key={experience.id} style={{ width: '100%', marginBottom: '15px' }}>
                  <Card.Body>
                    <Card.Title className='text-danger'>{experience.position}</Card.Title>
                    <Card.Text>{experience.company}</Card.Text>
                    <div className='d-flex justify-content-between align-items-center'>
                      <Card.Text>
                        {experience.duration}
                      </Card.Text>
                    </div>
                    <Card.Text>
                      {experience.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
          </Col>
        </Row>
      </Container>
      <hr style={{ borderColor: "white", margin: "0" }} />
    </section>
  );
};

export default Resume;
