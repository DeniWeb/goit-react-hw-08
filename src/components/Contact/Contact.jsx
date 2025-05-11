import s from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(id));
  };

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
      <button onClick={onDelete} className={s.contact_btn_delete}>
        Delete
      </button>
    </>
  );
};

export default Contact;
