import React from 'react';
import { skills } from '../../data/skills';

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
