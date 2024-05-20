import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserForm.css';

const UserForm = ({ userToEdit, onSave }) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    firstname: '',
    lastname: '',
  });

  useEffect(() => {
    if (userToEdit) {
      setUser(userToEdit);
    }
  }, [userToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userToEdit) {
      await axios.put(`http://localhost:8081/users/${user.id}`, user);
    } else {
      await axios.post('http://localhost:8081/users', user);
    }
    onSave();
    setUser({
      username: '',
      password: '',
      firstname: '',
      lastname: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={user.username}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={user.password}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="firstname"
        placeholder="First Name"
        value={user.firstname}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastname"
        placeholder="Last Name"
        value={user.lastname}
        onChange={handleChange}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;
