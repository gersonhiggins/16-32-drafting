import React, { useRef } from "react";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import gallery from "../../constants/gallery";
import "./Portfolio.css";

const galleryImages = [
    gallery.g1,
    gallery.g2,
    gallery.g3,
    gallery.g4,
];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="gallery" id="gallery">
      <div className="gallery-content">
        <h1>Galeria de Fotos</h1>
        <p>
          galeria de fotos
          </p>
      </div>

      <div className="gallery-images">
        <div className="gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className="gallery-images_card"
              key={`gallery_image-${index + 1}`}
            > 
            <img src={image} allow="autoplay" alt="gallery" title="gallery" className="gallery__image" />
            </div>
          ))}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("Right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
