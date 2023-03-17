import React from 'react'
import BeastCard from './BeastCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import data from '../data.json'
import BeastForm from './BeastForm'
import BeastModal from './BeastModal'

class BeastContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedBeast: {},
            numberOfHorns: 0,
            showModal: false,
        }
    }

    setSelectBeast = (beastObj) => {
        this.setState({
            selectedBeast: beastObj,
            showModal: true,
        })
    }

    removeModal = () => {
        this.setState({ showModal: false })
        console.log("closing")
    }

    handleHornFilter = (e) => {
        this.setState({ numberOfHorns: e.target.value })
    }

    render() {
        return (
            <>
                <BeastForm handleHornFilter={this.handleHornFilter} />
                <Container>
                    <Row>

                        {data.map(beasts => {
                            if (this.state.numberOfHorns > 0) {
                                if (this.state.numberOfHorns == beasts.horns) {
                                    return <Col sm={12} md={6} lg={3}>
                                        <BeastCard
                                            horns={beasts.horns}
                                            beast={beasts}
                                            imageUrl={beasts.image_url}
                                            description={beasts.description}
                                            title={beasts.description}
                                            setSelectBeast={this.setSelectBeast}


                                        />
                                    </Col>
                                }
                            }

                            else return <BeastCard
                                horns={beasts.horns}
                                beast={beasts}
                                imageUrl={beasts.image_url}
                                description={beasts.description}
                                title={beasts.description}
                                setSelectBeast={this.setSelectBeast}


                            />;
                        })}
                    </Row>
                </Container>
                <BeastModal
                    beast={this.state.selectedBeast}
                    showModal={this.state.showModal}
                    removeModal={() => this.removeModal()}
                />
            </>
        )
    }
}

export default BeastContainer;