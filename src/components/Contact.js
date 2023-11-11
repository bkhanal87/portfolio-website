import React from 'react';
import  Form  from 'react-bootstrap/Form';
import  Button  from 'react-bootstrap/Button';

const Contact = () => {
    return (
        <Form>
            <Form.Group className='mb-3' controlId='formGroupName'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='name' placeholder='Enter Name'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Enter Email'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupMessage'>
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" placeholder='Type your message here' rows={3} />
                <Button variant='primary' size='lg' as="input" type="submit" value="Submit" />{' '}
            </Form.Group>
        </Form>
    );
}

export default Contact;
