// Gallery.js
import React, { forwardRef } from "react";
import "./Gallery.css";
import imageData from "./imageData";
import { useState, useEffect, useRef } from "react";
import Modal from "./Modal";
const Gallery = forwardRef((props, galleryRef) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedButton, setSelectedButton] = useState("extensions");

  const imagesRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      rootMargin: "-50px 0px",
      threshold: 0.1, // Trigger the callback when 10% of the image is visible
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    imagesRef.current.forEach((img) => observer.observe(img));

    // Cleanup: unobserve the images when the component unmounts
    return () => {
      imagesRef.current.forEach((img) => observer.unobserve(img));
    };
  }, []); // Empty dependency array to run this effect once on mount

  function handleImageClick(src) {
    console.log(src);
    setSelectedImage(src);
    setModalOpen(true);
  }
  function handleGallerySelectorClick(value) {
    setSelectedButton(value);
  }
  return (
    <>
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          setModalOpen={setModalOpen}
          selectedImage={selectedImage}
        />
      )}
      <div className="gallery-selector" ref={galleryRef}>
        <button
          className={selectedButton === "extensions" ? "selected" : " "}
          onClick={() => handleGallerySelectorClick("extensions")}
        >
          Extensions
        </button>
        <button
          className={selectedButton === "press-ons" ? "selected" : " "}
          onClick={() => handleGallerySelectorClick("press-ons")}
        >
          Press Ons
        </button>
      </div>
      <div className="gallery">
        {imageData.map((image, index) => (
          <div>
            <img
              ref={(el) => (imagesRef.current[index] = el)}
              className="fade-in"
              key={index}
              src={image.src}
              alt={image.alt}
              onClick={() => handleImageClick(image.src)}
            />
          </div>
        ))}
      </div>
    </>
  );
});

export default Gallery;
