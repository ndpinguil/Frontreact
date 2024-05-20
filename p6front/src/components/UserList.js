import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css';

const UserList = ({ onEdit, onDelete }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('http://localhost:8081/users');
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      {users.map((user) => (
        <div key={user.id} className="user-item">
          <span>{user.username}</span>
          <div>
            <button onClick={() => onEdit(user)}>Edit</button>
            <button onClick={() => onDelete(user.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
