import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery-react17";
import SelectedImage from "./SelectedImage";

const SelectGallery = (props) => {
  const { imageList } = props;

  const [selectAll, setSelectAll] = useState(false);

  // const printTarget = useCallback((event, { photo, index }) => {
  //   alert("hello");
  // }, []);

  const imageRenderer = useCallback(
    ({ index, left, top, key, photo }) => (
      <SelectedImage
        selected={selectAll ? true : false}
        key={key}
        margin={"2px"}
        index={index}
        photo={photo}
        left={left}
        top={top}
      />
    ),
    [selectAll]
  );
  return (
    <>
      <Gallery
        photos={imageList}
        renderImage={imageRenderer}
        // onClick={printTarget}
      />
    </>
  );
};
export default SelectGallery;
// render(<App />, document.getElementById("app"));
