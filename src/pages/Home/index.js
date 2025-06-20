import React from "react";
import Header from "../../components/Header";

import About from "../../components/About";

import Projects from "../../components/Projects";

import Summary from "../../components/Summary";

import Contact from "../../components/Contact";
import BlobCursor from "../../components/BlobCursor/BlobCursor";
import SkillsSection from "../../components/Skills";
import Footer from "../../components/Footer";

const index = () => {
  return (
    <div className="bg-[#56595b0a] font-comfortaa">
      <Header />
      <div className="relative w-full min-h-screen ">
        {/* ✅ BlobCursor sits absolutely inside the relative parent */}
        <BlobCursor
          blobType="circle"
          fillColor="rgba(238, 221, 90, 0.85)"
          trailCount={6}
          sizes={[500, 375, 250, 225, 200, 175, 42]}
          innerSizes={[37, 32, 27, 22, 17, 12, 1]}
          innerColor="rgba(255,255,255,0.8)"
          opacities={[0.6, 0.6, 0.6, 0.6, 0.6, 0.6]}
          shadowColor="rgba(97, 87, 9, 0.8)"
          shadowBlur={5}
          shadowOffsetX={20}
          shadowOffsetY={20}
          filterStdDeviation={30}
          useFilter={true}
          fastDuration={0.1}
          slowDuration={0.5}
          zIndex={0}
        />

        {/* ✅ This section appears ABOVE the blob but doesn't block movement */}
        <div className="relative z-[1]">
          <Summary />
        </div>
      </div>

      <About data-aos="fade-up" />
      <SkillsSection data-aos="fade-up" />
      <Projects />
      <Contact data-aos="fade-up" />
      <Footer />
    </div>
  );
};

export default index;
