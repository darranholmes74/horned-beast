import { render } from "@testing-library/react";
import React from "react";
import HornedBeast from "./hornedbeast";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data.json'
import './Main.css'
import SelectedBeast from './SelectedBeast'


class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            selectedBeast: {},
            showModal: false,
        }
    }

    setSelectBeast = (beastObj) => {
        this.setState({
            selectedBeast: beastObj,
            showModal: true,
        });
    }


render() {
    console.log(this.state);
    return(
        <main>
            <Container className="container">
                <Row className="row">
                    {data.map(beasts =>
                    <Col sm={12} md={6} lg={3}>
                    <HornedBeast className='hornedBeast'
                    beast={beasts}
                    imageUrl={beasts.image_url}
                    description={beasts.description}
                    title={beasts.description}
                    setSelectBeast={this.setSelectBeast}
                    />
                    </Col>
                    )}
                </Row>
            </Container>
            <SelectedBeast
            beast={this.state.selectedBeast}
            showModal= {this.state.showModal}
            removeModal={() => this.setState({showModal: false})}
            />
        </main>
    )
}
}
export default Main;