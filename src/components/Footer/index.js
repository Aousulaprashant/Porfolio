import {
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaEnvelope,
  FaYoutube,
  FaMedium,
  FaDev,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t mt-16 cursor-auto">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold mb-4">CONTACT DETAILS</h4>
          <ul className="flex flex-col gap-4 text-sm cursor-auto">
            <li className="flex items-center gap-2 cursor-pointer">
              <FaLinkedin />
              <a
                href="https://www.linkedin.com/in/prashanth-aousula-9a9b33369/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>

            <li className="flex items-center gap-2 cursor-pointer">
              <FaGithub />
              <a
                href="https://github.com/Aousulaprashant"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </li>

            <li className="flex items-center gap-2 cursor-pointer">
              <FaEnvelope />
              <a
                href="mailto:prashanthaousula@gmail.com"
                className="hover:underline"
              >
                prashanthaousula@gmail.com
              </a>
            </li>

            <li className="flex items-center gap-2 cursor-pointer">
              <FaMapMarkerAlt />
              <a
                href="https://www.google.com/maps/place/Kushaiguda,+Secunderabad,+Telangana+500062/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Kushaiguda, ECIL, Hyderabad
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">SERVICES</h4>
          <ul className="space-y-2 text-sm">
            <li>Website Development</li>
            <li>ML Models Development</li>
            <li>Others</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-4">LINKS</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#summary">Summary</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#Skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-semibold mb-4">FOLLOW US</h4>
          <div className="flex flex-wrap gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/prashanth-aousula-9a9b33369/">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Aousulaprashant">
              <FaGithub />
            </a>

            <a href="https://leetcode.com/u/A_PRASHANTH/">
              <SiLeetcode />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-4 text-sm border-t">
        © 2025 Made with <span className="text-blue-600">React.js</span>
      </div>
    </footer>
  );
};

export default Footer;
