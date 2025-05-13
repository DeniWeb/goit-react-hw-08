import s from './HomePage.module.css';
import { RiContactsBook2Fill } from 'react-icons/ri';

const HomePage = () => {
  return (
    <>
      <div className={s.container}>
        <h1 className={s.title}>This is contacts manager</h1>
        <RiContactsBook2Fill size={69} />
      </div>
    </>
  );
};

export default HomePage;
