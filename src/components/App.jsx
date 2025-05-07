import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contactsOps';
import { useEffect } from 'react';
import Loader from './Loader/Loader';
import {
  selectContacts,
  selectError,
  selectLoading,
} from '../redux/contacts/slice';

function App() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <Loader />}
      {contacts.length > 0 && <ContactList />}
      {!contacts.length && !isLoading && !error && (
        <p>You don't have any contacts yet.</p>
      )}
    </>
  );
}

export default App;
