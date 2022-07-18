import React, { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import Mosaicgallery from "./MosaicGallery";

const ImageRender = () => {
  const [imageList, setImageList] = useState([]);

  //   reference to the folder from which i want to grab the images
  const ImageListref = ref(storage, "images/");

  //   Taking all the images from the folder
  useEffect(() => {
    if (imageList.length === 0) {
      listAll(ImageListref).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageList((prev) => [...prev, { src: url, isChecked: false }]);
          });
        });
      });
    }
  });

  return (
    <>
      <Mosaicgallery imageList={imageList} setImageList={setImageList} />
    </>
  );
};
export default ImageRender;
