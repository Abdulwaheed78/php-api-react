import React, { useEffect, useState } from "react";
import axios from "axios";
import UserForm from "./UserForm";
import UserEdit from "./UserEdit";

const API_URL = "http://localhost/user-api/api.php"; // adjust path

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    const res = await axios.get(API_URL);
    setUsers(res.data.data || []);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`${API_URL}?id=${id}`);
    fetchUsers();
  };

  const onEdit = (user) => {
    setEditingUser(user);
  };

  const onSave = () => {
    setEditingUser(null);
    fetchUsers();
  };

  return (
    <>
      <UserForm onSave={fetchUsers} />
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>DOB</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.dob}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(u)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => deleteUser(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingUser && <UserEdit user={editingUser} onSave={onSave} />}
    </>
  );
}
