import {React, useState} from 'react';
import  Form  from 'react-bootstrap/Form';
import  Button  from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    const handleSubmit = (event) => {
      event.preventDefault();
    }

    const submitForm = (e) => {
      e.preventDefault()

      console.log({name, email, phone})
    }

    return (
      <>
        <Container>
          <Form  onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => {setName(e.target.value)}}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupphoneNumber">
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Enter Phone Number"
                value={phone}
                onChange={(e) => {setPhone(e.target.value)}}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Type your message here"
                rows={3}
              />
              <br></br>
              <Button
                variant="primary"
                size="lg"
                as="input"
                type="submit"
                value="Submit"
                onClick={submitForm}
              />{" "}
            </Form.Group>
          </Form>
        </Container>
      </>
    );
}

export default Contact;
