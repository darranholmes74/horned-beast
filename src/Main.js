import { render } from "@testing-library/react";
import React from "react";
import HornedBeast from "./hornedbeast";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data.json'
import './Main.css'


class Main extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }


render() {
    return(
        <main>
            <Container className="container">
                <Row className="row">
                    {data.map(beasts =>
                    <Col sm={12} md={6} lg={3}>
                    <HornedBeast className='hornedBeast'
                    imageUrl={beasts.image_url}
                    description={beasts.description}
                    title={beasts.description}
                    />
                    </Col>
                    )}
                </Row>
            </Container>
        </main>
    )
}
}
export default Main;