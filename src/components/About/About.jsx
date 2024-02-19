import React from 'react';
import { skills } from './skillsData';
import SkillItem from './SkillItem';

const About = () => {
  return (
    <div id="about" className="flex flex-col min-h-screen gap-y-10 py-20 items-center justify-center">
      <div className="flex flex-col text-center gap-y-4">
        <h1 className="text-5xl heading-underline">About me</h1>
        <p className="text-lg">
          Here you will find more information about me, what I do, and my current skills mostly in terms of programming
          and technology
        </p>
      </div>
      <div className="grid grid-flow-row lg:grid-cols-2 lg:grid-flow-col gap-5 justify-center items-start">
        <div className="flex flex-col gap-y-4 text-lg">
          <h1 className="text-3xl font-bold">Get to know me!</h1>
          <div>
            Hello! I'm <span className="primary-text">Abdul Gani Shaikh</span>, a Mumbai-based
            <span className="primary-text"> Java Full Stack Developer.</span>
          </div>
          <div>
            I recently graduated in computer science from
            <span className="primary-text"> Watumull Institute</span> and gained practical experience through
            internships, crafting user-friendly mobile apps and responsive websites.
          </div>
          <div>
            With a passion for technology and a commitment to excellence, I'm eager to contribute my skills to a dynamic
            team like yours. Let's connect and create something amazing together!
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <h1 className="text-3xl font-bold">My Skills!</h1>
          <div>
            {skills.map((skill) => (
              <SkillItem skill={skill.skillName} borderColor={skill.borderColor} />
            ))}
          </div>
          <div>
            {skills.map((val, i) =>
              val.content.map((skill) => <SkillItem skill={skill} color={val.color} borderColor={val.borderColor} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
