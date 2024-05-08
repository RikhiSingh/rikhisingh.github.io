import React from 'react';

const skills = [
  "JavaScript",
  "TypeScript",
  "Express.JS",
  "MongoDB",
  "React.JS",
  "Node.JS",
  "Next.JS",
  "SCSS",
  "Vite",
  "Insomnia",
  "Figma",
  "Visual Paradigm",
  "JustInMind",
  "C#",
  "Python",
  "Framer Motion",
  ".NET",
  "SQL",
  "ASP .NET",
  "EJS",
  "HTML",
  "CSS",
  "Razor Pages",
  "TailwindCSS",
  "BootStrap",
  "ShadCN",
  "Cloudinary",
  "Zod",
  "Axios",
  "MySQL",
  "Docker",
  "GCE",
  "Linux",
  "SSMS",
  "IIS",
  "Git",
  "GitHub",
  "WireShark",
  "Splunk",
  "LogRhytm",
  "PuTTy",
  "Suricata",
];

skills.sort();

const SkillList = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      {skills.map((skill, index) => (
        <div key={index} className="rounded p-2 text-2m cursor-pointer bg-black text-white hover:bg-white hover:text-black">
          {skill}
        </div>
      ))}
    </div>
  );
}

export default SkillList;
