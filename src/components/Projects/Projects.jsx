import React from 'react';
import ProjectItem from './ProjectItem';
import projects from './projectData';

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col min-h-screen gap-y-10 py-20 items-center justify-center">
      <div className="flex flex-col text-center gap-y-4">
        <h1 className="text-5xl heading-underline">Projects</h1>
        <p className="text-lg">
          Here you will find some of the personal and clients projects that I created with each project containing its
          own source files
        </p>
      </div>
      <div className="grid gap-5 items-start justify-between h-full w-full">
        {projects.map((project) => (
          <ProjectItem {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
