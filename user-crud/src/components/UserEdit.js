import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost/user-api/api.php";

export default function UserEdit({ user, onSave }) {
  const [form, setForm] = useState({ ...user, password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`${API_URL}?id=${user.id}`, form);
    onSave();
  };

  return (
    <div className="mt-4 border p-3 rounded bg-light">
      <h5>Edit User: {user.name}</h5>
      <form onSubmit={handleUpdate} className="row g-3">
        <div className="col-md-3">
          <input type="text" name="name" className="form-control" value={form.name} onChange={handleChange} required />
        </div>
        <div className="col-md-3">
          <input type="email" name="email" className="form-control" value={form.email} onChange={handleChange} required />
        </div>
        <div className="col-md-2">
          <input type="password" name="password" className="form-control" placeholder="New Password" value={form.password} onChange={handleChange} required />
        </div>
        <div className="col-md-2">
          <input type="date" name="dob" className="form-control" value={form.dob} onChange={handleChange} required />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-primary w-100">Update</button>
        </div>
      </form>
    </div>
  );
}
