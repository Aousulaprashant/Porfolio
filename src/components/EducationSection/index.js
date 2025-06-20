import { FaGraduationCap } from "react-icons/fa";

const EducationSection = ({ education }) => {
  return (
    <section id="education" className="ml-1 max-w-5xl px-0 py-1">
      {/* Heading */}
      <div className="flex items-center gap-2 text-3xl font-bold mb-6 text-[#1e1e1e]">
        <FaGraduationCap className="text-[#2b475c]" />
        <span>{education.heading}</span>
      </div>

      {/* Vertical Lines */}
      <div className="relative pl-6">
        <div className="absolute top-0 left-2 h-full w-2 bg-[#050b0a] z-0"></div>
        <div className="absolute top-0 left-4 h-full w-2 bg-[#3faad8c9] z-0"></div>

        {/* Content */}
        <div className="relative z-10 ml-6 space-y-10" data-aos="fade-up">
          {education.EduDetails.map((edu, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold text-[#2f5689]">{edu.Name}</h3>
              <a
                href="#"
                className="text-[#00000084] underline underline-offset-2 block mb-1"
              >
                {edu.Study}
              </a>
              <p className="text-gray-800">
                {edu.CGPA ? `CGPA: ${edu.CGPA}` : `Percentage: ${edu.CPGA}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
