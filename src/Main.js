import React from "react";

import HornedBeast from "./hornedbeast";
import data from "./data.json"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class Main extends React.Component {
    render() {
        return (
            <main>
                <Container xs={2}>
                    <Row>
                        {data.map(beasts =>
                            <Col sm="12" md="6" lg="3">
                                <HornedBeast
                                    title={beasts.title}
                                    imageUrl={beasts.image_url}
                                    description={beasts.description}
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