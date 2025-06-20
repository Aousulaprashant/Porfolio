import React from "react";

const ExperienceCard = ({
  title,
  duration,
  company,
  location,
  bullets,
  tags,
}) => (
  <div className="mb-10">
    <h3 className="text-2xl font-semibold text-emerald-600">
      {title} - {duration}
    </h3>
    <a
      href="#"
      className="text-blue-700 underline underline-offset-2 block mb-2"
    >
      {company}, {location}
    </a>
    <ul className="list-disc list-inside text-gray-800 space-y-1 mb-3">
      {bullets.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, idx) => (
        <span
          key={idx}
          className="border border-gray-600 rounded-full px-4 py-1 text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default ExperienceCard;
