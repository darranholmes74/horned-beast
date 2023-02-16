
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Main from './Main'
import { Col, Container, Modal, ModalFooter, Row, ThemeProvider } from 'react-bootstrap';
import HornedBeast from './hornedbeast';


function App() {


  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Container className='App'>
        
      
      {/* <Modal open={this.isOpen} onClose={() => this.setIsOpen(false)}> Hello </Modal> */}
        <Main />
        
      </Container>
      {/* {this.modal && (
          <div>
            <div className='modal'></div>
            <div onClick={this.toggleModal} className='overlay'></div>
            <div className='modal-content'>
              <h2>Hello Modal</h2>
              <p>
                words
              </p>
              <button
                className='close-modal'
                onClick={this.toggleModal}
              >Close</button>
            </div>
          </div>
        )} */}

    </ThemeProvider>
  );
}



export default App;
