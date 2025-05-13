import s from './Contact.module.css';
import { FaPhoneAlt, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../../redux/contacts/operations';
import { useState } from 'react';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import EditContactModal from '../EditContactModal/EditContactModal';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleDelete = () => setDeleteModalOpen(true);
  const confirmDelete = () => {
    dispatch(deleteContact(id));
    setDeleteModalOpen(false);
  };
  const cancelDelete = () => setDeleteModalOpen(false);

  const handleEdit = () => setEditModalOpen(true);
  const confirmEdit = updatedContact => {
    dispatch(updateContact(updatedContact));
    setEditModalOpen(false);
  };
  const cancelEdit = () => setEditModalOpen(false);

  return (
    <>
      <div className={s.contact_item_wrap}>
        <span>
          <IoPersonSharp /> {name}
        </span>
        <span>
          <FaPhoneAlt /> {number}
        </span>
      </div>

      <div className={s.contact_btns}>
        <button onClick={handleEdit} className={`${s.contact_btn} ${s.edit}`}>
          <FaRegEdit />
        </button>
        <button
          onClick={handleDelete}
          className={`${s.contact_btn} ${s.delete}`}
        >
          <FaRegTrashAlt />
        </button>
      </div>

      {isDeleteModalOpen && (
        <ConfirmModal
          name={name}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}

      {isEditModalOpen && (
        <EditContactModal
          contact={{ id, name, number }}
          onSave={confirmEdit}
          onCancel={cancelEdit}
        />
      )}
    </>
  );
};

export default Contact;
