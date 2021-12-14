import { useState } from 'react';
import Carousel, { Modal, ModalGateway, ViewType } from 'react-images';

const CustomLightbox = ({ images }: { images: ViewType[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleLightbox = (event) => {
    event && event.preventDefault();
    setIsOpen((o) => !o);
  };
  return (
    <>
      <a
        className="hover:opacity-80 focus:opacity-80"
        onClick={toggleLightbox}
        href={images[0].source as string}
      >
        <img src={images[0].source as string} className="max-w-full" />
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
