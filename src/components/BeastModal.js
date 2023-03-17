
import Image from "react-bootstrap/Image";
import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";

class BeastModal extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props.beast)
    }
    handleOnHide = () => {
        this.props.removeModal()
        console.log("closing")
    }

    render(){
        return(
            <Modal
            show={this.props.showModal}
            onHide={this.props.removeModal}
            >
                <Modal.Header closeButton>{this.props.beast?.title}</Modal.Header>
                <Modal.Body>{this.props.beast?.description}</Modal.Body>
                <Modal.Footer>
                <Image src={this.props.beast?.image_url} width={300} height={300}></Image>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default BeastModal;