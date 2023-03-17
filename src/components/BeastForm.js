import React from 'react'
import Form from 'react-bootstrap/Form';



class BeastForm extends React.Component {
    constructor(){
        super();
        this.state = {
            numberOfHorns: 0,
        }
    }

setBeastFilter = (e) => {
    this.props.handleHornFilter(e);
}

    render(){
        return(
            <Form>
                <Form.Select onChange={this.setBeastFilter}>
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={100}>100</option>
                </Form.Select>
            </Form>
        )
    }
}

export default BeastForm;