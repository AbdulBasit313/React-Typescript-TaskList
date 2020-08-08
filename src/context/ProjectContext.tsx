import React, { useState, createContext, FC, useContext } from "react"

type Props = {
  children: React.ReactNode,
}

interface ProjectContextProps {
  projects: Project[]
  addNewProject: addNewProject
}

const initialProjects: Array<Project> = [
  {
    id: 1,
    name: 'Welcome'
  }
]

export const ProjectContext = createContext<ProjectContextProps>({
  projects: [],
  addNewProject: () => { }
})

export const useProject = () => useContext(ProjectContext)

const ProjectContextProvider: FC<Props> = ({ children }) => {
  const [projects, setProjects] = useState(initialProjects)

  const addNewProject: addNewProject = (newProject) => {
    setProjects([newProject, ...projects])
  }

  return (
    <ProjectContext.Provider value={{
      projects,
      addNewProject
    }}>
      {children}
    </ProjectContext.Provider>
  )
}

export default ProjectContextProvider