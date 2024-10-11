import React from 'react';

interface Skill {
  id: number;
  name: string;
  level: string; // Skill level (e.g., Beginner, Intermediate, Advanced)
}

const Skills: React.FC = () => {
  // Static array of dummy skills
  const dummySkills: Skill[] = [
    { id: 1, name: 'React', level: 'Advanced' },
    { id: 2, name: 'JavaScript', level: 'Advanced' },
    { id: 3, name: 'Node.js', level: 'Intermediate' },
    { id: 4, name: 'Express.js', level: 'Intermediate' },
    { id: 5, name: 'MySQL', level: 'Intermediate' },
    { id: 6, name: 'MongoDB', level: 'Intermediate' },
    { id: 7, name: 'Git', level: 'Advanced' },
    { id: 8, name: 'Docker', level: 'Intermediate' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Skills</h2> {/* White text for title */}

      {/* Combined Skills List */}
      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {dummySkills.map((skill) => (
            <li key={skill.id} className="bg-gray-800 p-3 rounded-lg shadow-md"> {/* Dark background for skill cards */}
              <div className="flex justify-between items-center">
                <span className="font-semibold text-white">{skill.name}</span> {/* White text for skill name */}
                <span className="text-sm text-gray-400">{skill.level}</span> {/* Gray for skill level */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
