import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Img from "../../IMG/myAiPic.png";
const index = () => {
  return (
    <div id="summary" className="">
      <div className="mt-16 pt-[40px] flex flex-col md:flex-row items-center justify-center px-6 py-16 shadow-sm">
        <div className="ml-11 md:w-1/2 text-center md:text-left">
          <p className="text-lg text-gray-600">Hey! I'm</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Aousula Prashanth
          </h1>
          <h2 className="text-xl  mt-1 font-semibold text-[#237192]">
            <Typewriter
              words={[
                "MERN Stack Developer",
                "AI/ML Enthusiast",
                "Frontend Developer",
                "Backend Developer",
                "Problem Solver",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            I am a passionate software engineer with hands-on experience in
            building full-stack web applications using the MERN stack (MongoDB,
            Express.js, React.js, Node.js). I also have a strong foundation in
            Data Structures & Algorithms, and have completed multiple projects
            in Machine Learning and AI.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I specialize in developing scalable systems and clean, intuitive
            user interfaces. My core strength lies in solving real-world
            problems through technology — from deploying full-stack apps to
            building predictive ML models. I'm continuously learning and aiming
            to contribute to high-impact engineering teams.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <button className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
              <a
                href="/Resume/Aousula Prashanth1.pdf" // Replace with your actual file path
                download="Prashanth-Resume.pdf"
                className="hover:text-white transition inline-block"
              >
                View Resume
              </a>
            </button>
            <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-[#0000009d] transition">
              <a href="#contact">Contact Info</a>
            </button>
          </div>
        </div>

        {/* Right: Profile Image */}
        {/* Right: Profile Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative z-[50]">
          <div className="absolute w-[19rem] h-[19rem] bg-[#3faad8c9] rounded-full top-0 md:top-4 z-10"></div>

          <div className="relative z-[60]">
            <img
              src={Img}
              alt="Profile"
              className="w-[21rem] h-[31rem] rounded-full animate-fade-in-up"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
