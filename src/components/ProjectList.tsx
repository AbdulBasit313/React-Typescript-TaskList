import React from 'react';

import Project from './Project';
import { useProject } from '../context/ProjectContext';


const ProjectList = () => {
  const { projects } = useProject()
  console.log('projects', projects)
  return (
    <ul>
      {projects.map((project: Project) => (
        <Project
          key={project.id}
          project={project}
        />
      ))}
    </ul>
  )
}


export default ProjectList