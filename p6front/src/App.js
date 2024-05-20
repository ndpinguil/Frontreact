import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import axios from 'axios';

const App = () => {
  const [userToEdit, setUserToEdit] = useState(null);

  const handleEdit = (user) => {
    setUserToEdit(user);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8081/users/${id}`);
    setUserToEdit(null);
  };

  const handleSave = () => {
    setUserToEdit(null);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>User CRUD App</h1>
      <UserForm userToEdit={userToEdit} onSave={handleSave} />
      <UserList onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f8ff',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '800px',
    margin: '0 auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '20px',
  },
};

export default App;
