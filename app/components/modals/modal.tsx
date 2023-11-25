'use client';
import React, { FC, ReactNode, useEffect } from 'react';
import styles from './modal.module.scss';

interface IModal {
  children: ReactNode;
  modalIsOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Modal: FC<IModal> = ({ children, modalIsOpen, setIsOpen }) => {
  useEffect(() => {
    // Add/remove class to body to disable/enable scrolling
    const body = document.body;
    if (modalIsOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }

    // Cleanup on component unmount
    return () => {
      body.style.overflow = 'auto';
    };
  }, [modalIsOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const stopPropagation = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  };

  return modalIsOpen ? (
    <div className={styles.modalWrapper} onClick={closeModal}>
      <div className={styles.modalContent} onClick={stopPropagation}>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
