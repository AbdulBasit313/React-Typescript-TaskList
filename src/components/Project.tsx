import React, { FC } from 'react'
import { Link } from 'react-router-dom';

interface ProjectProps {
  project: Project
}

const Project: FC<ProjectProps> = ({ project }) => {
  return (
    <Link to={`/ + ${project.id}`}>
      <li>
        {project.name}
      </li>
    </Link>
  )
}

export default Project