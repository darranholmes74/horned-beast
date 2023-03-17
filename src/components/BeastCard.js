import React from "react"
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';




class BeastCard extends React.Component {
    constructor() {
        super()
        this.state = {
            favorites: 0,
        }
    }

    favoriteClicks = () => {
        this.setState({
            favorites: this.state.favorites +1
        })
    }

    render() {
        return (
            <Card style={{ width: '12rem'}}>
                <Card.Img variant="top" onClick={() => this.props.setSelectBeast(this.props.beast)} src={this.props.imageUrl} alt={this.props.description} />
                <Card.Body>
                    <Card.Title>Horned Beast Name: {this.props.title}</Card.Title>
                    <Card.Text>
                        Description: {this.props.description}
                    </Card.Text>
                    <Button onClick={this.favoriteClicks}> &#9825; {this.state.favorites}</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default BeastCard;