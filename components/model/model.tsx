"use client"
import React, { ReactNode } from 'react';
import { FaTimes } from 'react-icons/fa';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <div className="flex justify-end">
          <button onClick={onClose} aria-label="Close modal">
            <FaTimes />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
