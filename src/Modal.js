import React from 'react'
import './Modal.css';

export default function Modal({isModalOpen, setModalOpen, selectedImage}) {
    if (!isModalOpen) return null;
  return (
        <div className="modal-background" onClick={() => setModalOpen(false)}>
            <img className="modal-image" src={selectedImage} alt="Enlarged" />
        </div>
  )
}

