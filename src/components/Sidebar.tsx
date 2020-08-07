import React, { useState } from 'react';

import Modal from './Modal';


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
          <Modal modalOpen={modalOpen} />
          {isToggle && (
            <ul>
              <li>Welcome</li>
            </ul>
          )}
        </li>
        <li>Labels</li>
      </ul>
    </div>
  )
}


export default Sidebar