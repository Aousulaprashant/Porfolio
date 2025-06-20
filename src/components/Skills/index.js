import React from "react";

const skills = [
  { label: "HTML", icon: "/icons/html.png" },
  { label: "CSS", icon: "/icons/css.png" },
  { label: "JavaScript", icon: "/icons/js.png" },
  { label: "React.js", icon: "/icons/react.png" },
  { label: "Next.js", icon: "/icons/Next.js.png" },
  { label: "Express.js", icon: "/icons/Express.png" },
  { label: "Node.js", icon: "/icons/Node.js.png" },
  { label: "Tailwind CSS", icon: "/icons/Tailwind CSS.png" },
  { label: "React-Redux", icon: "/icons/Redux.png" },
  { label: "C++", icon: "/icons/C++.png" },
  { label: "Machine Learning", icon: "/icons/brain.png" },
  { label: "MongoDB", icon: "/icons/MongoDb.png" },
  { label: "SQL", icon: "/icons/sql.png" },
  { label: "GitHub", icon: "/icons/GitHub.png" },
  { label: "Git", icon: "/icons/Git.png" },
  { label: "Python", icon: "/icons/Python.png" },
  { label: "Docker", icon: "/icons/Docker.png" },
];

const SkillsSection = () => {
  return (
    <section id="Skills" className="py-16 px-6 text-center max-w-7xl mx-auto">
      <p className="text-gray-500 text-lg">Explore My</p>
      <h2 className="text-4xl font-bold mb-12">Practical Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2"
            data-aos="zoom-in"
            data-aos-delay={index * 50} // optional stagger effect
            data-aos-duration="300" // slower popup
          >
            <img
              src={skill.icon}
              alt={skill.label}
              className="w-10 h-10 object-contain "
            />
            <p className="text-lg font-medium">{skill.label}</p>
          </div>
        ))}
      </div>
      <h3 className="text-4xl pb-2 pt-20 font-extrabold">
        DSA & Problem Solving
      </h3>
      <div className="mt-20 text-center items-center md:flex cursor-auto">
        <div className="text-left max-w-xl mx-auto md:mx-0">
          <p className="text-gray-600 text-2xl text-md max-w-xl mx-auto mb-4">
            Solved <strong>400+</strong> problems on{" "}
            <a
              href="https://leetcode.com/u/A_PRASHANTH/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f1b647] underline"
            >
              LeetCode
            </a>{" "}
            using C++, focusing on Data Structures and Algorithms.
          </p>
        </div>

        <img
          src="https://leetcard.jacoblin.cool/A_PRASHANTH"
          href="https://leetcode.com/u/A_PRASHANTH/"
          alt="Prashanth's Leetcode Profile"
          className="mx-auto w-full h-full mt-2 cursor-pointer"
        />
      </div>
      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-10 cursor-auto">
        {/* <a
          href="https://auth.geeksforgeeks.org/user/prashanthcvg9i"
          target="_blank"
          rel="noopener noreferrer"
        > */}
        <img
          src="https://gfgstatscard.vercel.app/prashanthcvg9i" // Make sure this file exists in public/icons
          alt="GeeksforGeeks"
          className="rounded-md w-full h-full"
        />
        {/* </a> */}
        <div className="text-left max-w-xl">
          <p className="text-gray-600 text-2xl mb-4">
            Solved <strong>150+</strong> problems on{" "}
            <a
              href="https://auth.geeksforgeeks.org/user/prashanthcvg9i"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 underline"
            >
              GeeksforGeeks
            </a>{" "}
            using C++, practicing core DSA concepts through challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
