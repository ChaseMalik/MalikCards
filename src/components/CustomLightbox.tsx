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
    toggleLightbox = (selectedIndex: number) => {
        this.setState(state => ({
            selectedIndex,
            lightboxIsOpen: !state.lightboxIsOpen,
        }));
    };

    public render() {
        return (
            <>
                <div className="card-cover" onClick={() => this.toggleLightbox(0)}>
                    <img src={this.props.images[0].source} />
                </div>
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