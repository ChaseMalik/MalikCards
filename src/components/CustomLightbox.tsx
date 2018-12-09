import React, { Component } from 'react';
import Lightbox, { Image } from 'react-images';

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
    openLightbox = (index: number, event) => {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox = () => {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious = () => {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext = () => {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    public render() {
        return (
            <>
                <a
                    href={this.props.images[0].src}
                    onClick={(e) => this.openLightbox(0, e)}
                >
                    <img src={this.props.images[0].src} style={{ maxWidth: '100%' }} />
                </a>
                <Lightbox
                    currentImage={this.state.currentImage}
                    images={this.props.images}
                    isOpen={this.state.lightboxIsOpen}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    onClose={this.closeLightbox}
                />
            </>
        );
    }
}