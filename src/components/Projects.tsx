import React from "react";
import ProjectCard from "./ProjectCard";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-7">
        <ProjectCard
          title="Blogging Website"
          main="this is a bloggin website created in React TS and used some component library"
        />
        <ProjectCard
          title="Youtube Clone"
          main="this is a youtube website created in React TS and used some component library"
        />
        <ProjectCard
          title="Netflix Clone"
          main="this is a netflix website created in React TS and used some component library"
        />
      </div>
    </div>
  );
};

export default Projects;
