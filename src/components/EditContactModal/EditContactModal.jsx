import { useState } from 'react';
import s from './EditContactModal.module.css';

const EditContactModal = ({ contact, onSave, onCancel }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleSubmit = e => {
    e.preventDefault();
    onSave({ ...contact, name, number });
  };

  return (
    <div className={s.backdrop}>
      <form onSubmit={handleSubmit} className={s.modal_edit}>
        <h2>Edit Contact</h2>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Number:
          <input
            type="text"
            value={number}
            onChange={e => setNumber(e.target.value)}
            required
          />
        </label>
        <div className={s.buttons}>
          <button type="submit" className={s.modal_btn_edit}>
            Save
          </button>
          <button type="button" onClick={onCancel} className={s.modal_btn_edit}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditContactModal;
