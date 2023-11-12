// Skills.js

import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Skills = () => {
  const skillsList = [
    'JavaScript',
    'React',
    'HTML',
    'CSS',
    'Node.js',
    'Express.js',
    'MongoDB',
    // Add more skills as needed
  ];

  return (
    <Card>
      <Card.Body>
        <Card.Title>Skills</Card.Title>
        <ListGroup variant="flush">
          {skillsList.map((skill, index) => (
            <ListGroup.Item key={index}>{skill}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Skills;
