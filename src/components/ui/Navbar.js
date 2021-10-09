import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { eventLogout } from '../../actions/events';

export const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
    dispatch(eventLogout());
  };

  const { name } = useSelector((state) => state.auth);
  return (
    <div className="navbar navbar-dar bg-dark mb-4">
      <span className="navbar-brand">{name}</span>
      <button className="btn btn-outline-danger" onClick={handleLogout}>
        <i className="fas fa-sign-out-alt"></i>
        <span> Salir</span>
      </button>
    </div>
  );
};
