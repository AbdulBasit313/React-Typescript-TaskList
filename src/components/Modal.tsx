import React, { FC, CSSProperties, ChangeEvent, useState, FormEvent } from 'react';
import { useProject } from '../context/ProjectContext';

interface ModalProps {
  handleModal: () => void
  modalOpen: boolean
}


const Modal: FC<ModalProps> = ({ modalOpen, handleModal }) => {
  const { addNewProject } = useProject()
  const [projectName, setProjectName] = useState('')

  const modalVisibility: CSSProperties = {
    opacity: modalOpen ? 1 : 0,
    visibility: modalOpen ? 'visible' : 'hidden'
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setProjectName(value)
  }

  const onSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const addProject = {
      id: Math.random(), name: projectName
    }
    if (projectName.trim()) {
      addNewProject(addProject)
      handleModal()
    }
    else {
      alert('Project name can\'t be empty')
    }
    setProjectName('')
  }

  return (
    <div className='modal-overlay' style={modalVisibility}>
      <div className='modal' style={modalVisibility}>
        <button onClick={handleModal} style={{ float: 'right' }}>X</button>
        <h1 style={{ color: 'black' }} className='center'>Add New Project</h1>
        <form>
          <input
            value={projectName}
            onChange={handleChange}
            placeholder='project name'
          />
          <button onClick={onSubmit} style={{ display: 'block' }}>Add</button>
        </form>
      </div>
    </div>
  )
}


export default Modal