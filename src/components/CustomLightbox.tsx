import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import Carousel, { Modal, ModalGateway, ViewType } from 'react-images';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      opacity: 0.9,
    },
  },
  image: {
    maxWidth: '100%',
  },
});

const CustomLightbox = ({ images }: { images: ViewType[] }) => {
  const { root, image } = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const toggleLightbox = (event) => {
    event && event.preventDefault();
    setIsOpen((o) => !o);
  };
  return (
    <>
      <a
        className={root}
        onClick={toggleLightbox}
        href={images[0].source as string}
      >
        <img src={images[0].source as string} className={image} />
      </a>
      <ModalGateway>
        {isOpen ? (
          <Modal onClose={toggleLightbox}>
            <Carousel
              views={images}
              styles={{
                view: (base) => ({
                  ...base,
                  '& > img': {
                    maxHeight: '100vh',
                  },
                }),
              }}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
};

export default CustomLightbox;
