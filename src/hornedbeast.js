import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Main.css'


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
          <Card className='hornedbeast' onClick={this.favoriteClicks}>
            <Card.Body className='card-body'>
              <Card.Title>Horned Beast Name: {this.props.title}</Card.Title>
              <Card.Img onClick={() => this.props.setSelectBeast(this.props.beast)} className="profile-photo" variant="top"  src={this.props.imageUrl} alt={this.props.description} />
              <Card.Text>Description: {this.props.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Text> &#9825; {this.state.favorites}</Card.Text>
            </Card.Footer>
          </Card>
    )
  }
}

export default HornedBeast;