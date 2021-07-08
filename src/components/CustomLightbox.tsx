import { makeStyles } from '@material-ui/core';
import Image from 'next/image';
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

  const src = images[0].source as string;
  // =w1200-h901-no
  const [width, height] = src
    .split('=')
    .pop()
    .split('-')
    .map((s) => s.substring(1));
  return (
    <>
      <a className={root} onClick={toggleLightbox} href={src}>
        <Image
          src={src}
          className={image}
          sizes="33vw"
          width={width}
          height={height}
          layout="responsive"
        />
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
