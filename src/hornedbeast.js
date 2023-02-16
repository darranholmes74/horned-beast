import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';
import { useState } from 'react';
import Modal from './Modal';



// card
class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    isOpen: false,
    setIsOpen: false,
    }
    
  }


  

  favoriteClicks = () => {
    this.setState({ favorites: this.state.favorites + 1 });

  }

  toggleModal = () => {
    this.setModal(!this.modal);
  }



  render() {
    
    return (

          <Card style={{ maxWidth: '400px'}} className='hornedbeast' onClick={this.favoriteClicks}>
            <Card.Body>
              <Card.Title>Horned Beast Name: {this.props.title}</Card.Title>
              <Card.Img className="profile-photo" variant="top" style={{ width: '100px', height: '100px' }} src={this.props.imageUrl} alt={this.props.description} />
              <Card.Text>Description: {this.props.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Text> &#9825; {this.state.favorites}</Card.Text>
              <div>
              <button onClick={() => this.setIsOpen(true)}>
                Popup
              </button>

              {/* <Modal open={this.isOpen} onClose={() => this.setIsOpen(false)}> Hello </Modal> */}
              </div>
            </Card.Footer>
          </Card>
    )
    
  }

}


export default HornedBeast;