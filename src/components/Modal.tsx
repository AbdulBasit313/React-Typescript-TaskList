import React, { FC } from 'react';

interface ModalProps {
  modalOpen: boolean
}

const Modal: FC<ModalProps> = ({ modalOpen }) => {
  return (
    <div className='modal' style={{
      opacity: modalOpen ? 1 : 0, visibility: modalOpen ? 'visible' : 'hidden'
    }}>
      <h1>This is your modal</h1>
    </div>
  )
}


export default Modal