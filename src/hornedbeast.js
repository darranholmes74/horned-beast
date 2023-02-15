import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    }
  }

  favoriteClicks = () => {
    this.setState({ favorites: this.state.favorites + 1 });
  }
  render() {
    return (
<Container>
      <Row>
        <Col>
          <Card className='hornedbeast' onClick={this.favoriteClicks}>
            <Card.Body>
              <Card.Title>Horned Beast Name: {this.props.title}</Card.Title>
              <Card.Img className="profile-photo" variant="top" style={{ width: '100px', height: '100px' }} src={this.props.imageUrl} alt={this.props.description} />
              <Card.Text>Description: {this.props.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Text> &#9825; {this.state.favorites}</Card.Text>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      </Container>

    )
  }
}

export default HornedBeast;