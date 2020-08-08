import React, { useState } from 'react';

import Modal from './Modal';
import ProjectList from './ProjectList'

const Sidebar = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [isToggle, setIstoggle] = useState(false)

  const handleModal = () => {
    setModalOpen(!modalOpen)
  }

  const handleToggle = () => {
    setIstoggle(!isToggle)
  }

  return (
    <div className='sidebar'>
      <ul>
        <li>Projects
          <button onClick={handleToggle}>toogle</button>
          <button onClick={handleModal}>add</button>
          <Modal modalOpen={modalOpen} handleModal={handleModal} />
          {isToggle && <ProjectList />}
        </li>
        <li>Labels</li>
      </ul>
    </div>
  )
}


export default Sidebar