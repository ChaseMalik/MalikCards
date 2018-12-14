import './CustomLightbox.css';

import React, { Component } from 'react';
import Carousel, { Image, Modal, ModalGateway } from 'react-images';

interface Props {
    images: Image[];
}

export default class CustomLightbox extends Component<Props, any> {

    constructor(props: Props) {
        super(props);

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };
    }
    toggleLightbox = (selectedIndex: number, event) => {
        event && event.preventDefault();
        this.setState(state => ({
            selectedIndex,
            lightboxIsOpen: !state.lightboxIsOpen,
        }));
    };

    public render() {
        return (
            <>
                <a className="card-cover" onClick={(e) => this.toggleLightbox(0, e)} href={this.props.images[0].source}>
                    <img src={this.props.images[0].source} />
                </a>
                <ModalGateway>
                    {this.state.lightboxIsOpen ? (
                        <Modal onClose={this.toggleLightbox}>
                            <Carousel
                                views={this.props.images}
                                currentIndex={this.state.currentImage}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </>
        );
    }
}