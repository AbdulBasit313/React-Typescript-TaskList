import React, { FC } from 'react'


interface ProjectProps {
  project: Project
}

const Project: FC<ProjectProps> = ({ project }) => {
  return (
    <li>
      {project.name}
    </li>
  )
}

export default Project