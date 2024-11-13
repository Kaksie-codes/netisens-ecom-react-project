/* eslint-disable react/prop-types */

import { useContext, useState } from 'react';
import { CartContext } from '../CartContext';

const EditTitleModal = ({ closeModal, isModalOpen }) => {
  const { title, editTitle } = useContext(CartContext);
  const [newTitle, setNewTitle] = useState(title);

  const handleSave = () => {
    editTitle(newTitle);
    closeModal();
  };

  const handleChange = (e) => {
    setNewTitle(e.target.value);
    editTitle(newTitle);
  };

  return (
    <div className={`edit-title-modal ${isModalOpen ? "open" : ""}`}>
      <div className="modal-content">
        {/* Displaying the live-updating title */}
        <h2>{newTitle || 'Edit Website Title'}</h2>
        <input
          type="text"
          value={newTitle}
          onChange={handleChange}
          placeholder="Enter new title"
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </div>
  );
};

export default EditTitleModal;
