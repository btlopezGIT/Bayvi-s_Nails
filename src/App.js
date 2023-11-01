import "./App.css";
import Navbar from "./Navbar";
import HomeBanner from "./HomeBanner";
import Gallery from "./Gallery";
import { useRef } from "react";

function App() {
  const galleryRef = useRef(null);

  function scrollToGallery() {
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className="App">
      <Navbar />
      <HomeBanner handleScrollButton={scrollToGallery} />
      <Gallery ref={galleryRef} />
      {/* Other components can follow */}
    </div>
  );
}

export default App;
