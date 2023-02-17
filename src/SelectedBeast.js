import React from "react";
import Modal from 'react-bootstrap/Modal'

class SelectedBeast extends React.Component {

    render(){
        return(
            <Modal 
            show={this.props.showModal}
            onhide={this.props.removeModal}
            >
                <Modal.Header closeButton={this.props.removeModal}>{this.props.beast?.title}</Modal.Header>
                <Modal.Body>{this.props.beast?.description}</Modal.Body>
                <Modal.Footer>{this.props.beast?.image_url}</Modal.Footer>
                
            </Modal>
        )
    }
}

export default SelectedBeast;