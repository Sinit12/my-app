
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';
import React, { useEffect, useState } from "react";



const root = ReactDOM.createRoot(document.getElementById('root'));
const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://back-nvh7.onrender.com/users");
        setUsers(response.data);
      } catch (err) {
        setError("Error fetching users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.nitid}>{user.name}</li> // Assuming each user has 'id' and 'name'
        ))}
        </ul>
      </div>
    );
  };  
 

root.render(
  <UsersList/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

