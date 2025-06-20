import React from "react";

import EducationSection from "../../components/EducationSection";
import { FaBriefcase } from "react-icons/fa";
const index = () => {
  const experienceData = {
    heading: {
      subtitle: "Want to know me",
      title: "About Me",
      experienceDuration: "1 year",
    },
    jobs: [
      {
        title: "Full Stack Developer Intern",
        duration: "Aug 2024 – Nov 2024",
        company: "Gwing Software Technologies",
        location: "Hyderabad, Telangana, India",
        bullets: [
          "Built a Modular Learning Platform with role-based access using Node.js, Express, MongoDB, and Next.js, Tailwind CSS.",
          "Implemented admin and learner dashboards with a nested course structure (Courses → Sections → Units → Chapters).",
          "Integrated JWT authentication, protected routes, and dynamic rendering based on user roles.",
          "Enabled chapter-wise interactive questions (MCQ, fill-in-the-blank, text/audio) and progress tracking using a custom UserProgress model.",
          "Used Redux/React Context for state management and Mongoose populate for efficient nested data handling.",
        ],
        tags: [
          "Node.js",
          "Express.js",
          "MongoDB",
          "Next.js",
          "Tailwind CSS",
          "JWT",
          "Redux",
          "React Context",
          "Mongoose",
        ],
      },
      {
        title: "Software Development Engineer Intern | Team Leader",
        duration: "Aug 2024 – Sep 2024",
        company: "Bluestock Fintech",
        location: "Pune, India",
        bullets: [
          "Designed and developed the frontend for an IPO web application featuring upcoming IPO companies, using React.js and CSS.",
          "Implemented an admin dashboard to manage IPO listings, including features to add, update, and delete content.",
          "Integrated APIs and optimized the user interface for seamless interaction and smooth data flow between frontend and backend.",
        ],
        tags: [
          "React.js",
          "CSS",
          "JavaScript",
          "Frontend Development",
          "API Integration",
          "UI/UX",
          "Admin Dashboard",
        ],
      },
    ],
  };

  const Education = {
    heading: " Education",
    EduDetails: [
      {
        Name: "Nalla Malla Reddy Engineering College",
        Study:
          "Bachelors of Technology in Artificial Intelligence and Data science",
        CGPA: "8.4/10",
      },
      {
        Name: "Sri Gayatri Junior College",
        Study: "MPC ",
        CPGA: "84%",
      },
    ],
  };

  return (
    <section
      id="about"
      className="ml-4 md:ml-16  max-w-5xl  px-0 py-4 cursor-auto "
    >
      {/* Header Section */}
      {/* Header Section - Centered */}
      <div
        className="flex flex-col items-center text-center mb-10 "
        data-aos="fade-left"
      >
        <p className="text-gray-500">{experienceData.heading.subtitle}</p>
        <h2 className="text-4xl font-bold">{experienceData.heading.title}</h2>
      </div>

      <div className="flex items-center gap-2 mt-4 text-[#020202] text-2xl font-semibold pb-10 ">
        <FaBriefcase />
        <span>Experience - {experienceData.heading.experienceDuration}</span>
      </div>

      <div className="relative pl-6 ">
        <div className="absolute top-0 left-2 h-full w-2 bg-[#050b0a] z-0"></div>{" "}
        <div className="absolute top-0 left-4 h-full w-2 bg-[#3faad8c9] z-0 "></div>{" "}
        <div className="relative z-10 ml-6 " data-aos="fade-up">
          {experienceData.jobs.map((job, index) => (
            <div key={index} className="mb-10 ">
              <h3 className="text-2xl font-bold text-[#2f5689]">
                {job.title} - {job.duration}
              </h3>
              <a
                href="#"
                className="text-[#393939ad] underline underline-offset-2 block mb-2"
              >
                {job.company}, {job.location}
              </a>
              <ul className="list-disc list-inside text-gray-800 space-y-1 mb-3">
                {job.bullets.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="border border-gray-600 rounded-full px-4 py-1 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <EducationSection data-aos="fade-up" education={Education} />
    </section>
  );
};

export default index;
