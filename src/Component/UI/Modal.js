import React, { Component } from 'react';
import Card from './Card';
import './Modal.css'

class Modal extends Component {
    render() {
        return (
            <div>
                <div className="backdrop"></div>
                <Card className="modal">
                    {this.props.children}</Card>
            </div>
        );
    }
}

export default Modal;