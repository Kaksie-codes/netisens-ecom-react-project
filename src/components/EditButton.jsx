import { useState } from 'react';
import EditTitleModal from './EditTitleModal';

const EditButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

 
  return (
    <>
      <button className="edit-button" onClick={openModal}>
        Edit
      </button>
      {isModalOpen && (
        <>
          <div className="overlay" onClick={closeModal} />
          <EditTitleModal closeModal={closeModal} />
        </>
      )}
    </>
  );
};

export default EditButton;
