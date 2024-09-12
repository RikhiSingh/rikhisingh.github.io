import React from 'react';

const skills = [
  "JavaScript",
  "Prisma ORM",
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
  "MVC .NET",
  "SQL",
  "EJS",
  "HTML",
  "CSS",
  "Razor Pages",
  "TailwindCSS",
  "BootStrap",
  "ShadCN",
  "Cloudinary",
  "Flutter",
  "Dart",
  "Java",
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
  "Clerk",
  "PostgreSQL",
  "Drizzle",
  "Neon",
  "ZaidxUI",
  "Zustand",
  "PlanetScale",
  "TanStack",
];

// Function to remove duplicates
const removeDuplicates = (array) => {
  return array.filter((item, index) => {
    return array.indexOf(item) === index;
  });
};

const uniqueSkills = removeDuplicates(skills);
uniqueSkills.sort();

const SkillList = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      {uniqueSkills.map((skill, index) => (
        <div key={index} className="rounded p-2 text-2m cursor-pointer bg-black text-white hover:bg-white hover:text-black">
          {skill}
        </div>
      ))}
    </div>
  );
}

export default SkillList;
