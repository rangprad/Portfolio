import React from 'react';

interface Skill {
  id: number;
  name: string;
  level: string;
}

const Skills: React.FC = () => {
  const dummySkills: Skill[] = [
    { id: 1, name: 'React', level: 'Beginner' },
    { id: 2, name: 'JavaScript', level: 'Intermediate' },
    { id: 3, name: 'Node.js', level: 'Intermediate' },
    { id: 3, name: 'Laravel', level: 'Intermediate' },
    { id: 4, name: 'Express.js', level: 'Intermediate' },
    { id: 5, name: 'MySQL', level: 'Intermediate' },

  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Skills</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {dummySkills.map((skill) => (
          <li key={skill.id} className="bg-gray-800 p-3 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-white">{skill.name}</span>
              <span className="text-sm text-gray-400">{skill.level}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
