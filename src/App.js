import React from "react";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import BlobCursor from "./components/BlobCursor/SmallBlob";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 100,
      duration: 600,
      once: false,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <div className="overflow-x-hidden md:w-full">
      <BlobCursor count={18} size={15} />
      <Home />
    </div>
  );
}

export default App;
