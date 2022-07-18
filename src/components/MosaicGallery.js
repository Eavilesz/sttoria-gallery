import React, { useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";

const Mosaicgallery = (props) => {
  const { imageList, setImageList } = props;
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const clickedImage = (idx) => {
    setCurrentImage(idx);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const like = (idx) => {
    setImageList(
      imageList
        .slice(0, idx)
        .concat([
          { src: imageList[idx].src, isChecked: !imageList[idx].isChecked },
        ])
        .concat(imageList.slice(idx + 1, imageList.length))
    );
  };

  return (
    <>
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
      <div className="sm:columns-2 lg:columns-3 p-4 bg-black">
        {imageList.length > 0 &&
          imageList.map((image, idx) => (
            <div key={idx} className="mb-4 rounded-xl relative">
              <img
                src={image.src}
                alt="gallery"
                className=" cursor-pointer rounded-xl"
                loading="lazy"
                onClick={(e) => clickedImage(idx)}
              ></img>
              <div className="flex absolute bottom-0 top-100 bg-gray-600 w-full h-10 rounded-lg justify-center">
                <div className={`flex my-1.5 lg:my-1.5 w-4/5 justify-center`}>
                  {image.isChecked ? (
                    <>
                      <div onClick={(e) => like(idx)}>
                        <AiFillHeart
                          className="cursor-pointer"
                          color="MediumVioletRed"
                          size={"1.75rem"}
                        />
                      </div>
                      <div>
                        <AiOutlineMessage
                          className="ml-2"
                          color="lightgrey"
                          size={"1.75rem"}
                        />
                      </div>
                      <input
                        placeholder="Escriba un comentario"
                        className=" ml-4 bg-slate-200 appearance-none border-1 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      ></input>
                      {/* </div> */}
                    </>
                  ) : (
                    <div onClick={(e) => like(idx)}>
                      <AiOutlineHeart
                        className="cursor-pointer "
                        color="lightgrey"
                        size={"1.75rem "}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default Mosaicgallery;
