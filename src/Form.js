import { render } from '@testing-library/react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
class Forms extends React.Component {
    constructor(){
        super();
        this.state = {
           
        }
    }




    render(){
        console.log(this.state);
        return(
            <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Number of Horns</Form.Label>
            <Form.Select>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='100'>100</option>
            </Form.Select>
            <Button  variant="primary" type='submit'>
              Submit
            </Button>
          </Form.Group>
          </Form>
        );
    }
}

export default Forms;