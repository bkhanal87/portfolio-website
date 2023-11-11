import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import  Button  from 'react-bootstrap/Button';

const Another = () => {
  const linkedinURL = 'https://www.linkedin.com/in/basu-khanal'
  const gitHubURL = 'https://www.github.com/bkhanal87'
  return (
    <section id="about" className="py-5">
      <Container>
        <Row>
          <Col lg={8}>
            <h2 className="section-heading text-uppercase text-center">
              About Me
            </h2>
            <p className="text-primary">
              Hi there! I'm Basu Khanal, a passionate and creative web developer
              based in Cincinnati, Ohio. With a background in Software
              Development, I bring a unique perspective to web development. My
              goal is to create innovative and user-friendly websites that leave
              a lasting impression.
            </p>
            <p className="text-primary">
              I specialize in front-end development, using technologies like
              React, HTML, CSS, and JavaScript. I enjoy turning complex problems
              into simple, beautiful, and intuitive designs. Constantly seeking
              to improve my skills, I stay updated with the latest trends and
              technologies in the ever-evolving world of web development.
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <Button className='rounded-circle' variant="primary" size="lg" href={linkedinURL}>
                LinkedIn
              </Button>{" "}
              <Button className='rounded-circle' variant="success" size="lg" href={gitHubURL}>
                GitHub
              </Button>
            </div>
          </Col>
          <Col lg={4}>
            <img
              className="img-fluid rounded-circle"
              src="new-image.jpg"
              alt="Basu Khanal"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Another;
