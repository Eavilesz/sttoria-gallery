import React, { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery-react17";

const ImageGallery = (props) => {
  const { imageList } = props;

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  console.log("%ccurrentImage: %o", "color: #c084fc ;", currentImage);
  return (
    <div>
      <Gallery photos={imageList} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={imageList.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};
export default ImageGallery;
