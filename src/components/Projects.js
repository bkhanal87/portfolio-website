import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { projects } from '../data';
import  Button  from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import data from '../data';
import { Container } from 'react-bootstrap';
import { getNextKeyDef } from '@testing-library/user-event/dist/keyboard/getNextKeyDef';

const Projects = () => {
  return (
    <CardGroup>
      {projects.map((project) => (
        <Card border='primary' style={{ width: "18rem" }}>
          <>
            <Card.Body>
              <Card.Title style={{ textAlign:'center'}}>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <Container>
                <Card.Img
                  className='center'
                  style={{ width: "18rem"}}
                  variant="top"
                  src={project.image}
                />
              </Container>
              <Card.Link href={project.demo}>Demo</Card.Link>
              <Card.Link href={project.repo}>Repo</Card.Link>
            </Card.Body>
          </>
        </Card>
      ))}
    </CardGroup>
  );
};

export default Projects;
