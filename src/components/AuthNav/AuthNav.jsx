import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={s.authNav_wrapper}>
      <NavLink to="/register" className={s.btn}>
        Register
      </NavLink>
      <NavLink to="/login" className={s.btn}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
