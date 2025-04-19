import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost/user-api/api.php";

export default function UserForm({ onSave }) {
  const [form, setForm] = useState({ name: "", email: "", password: "", dob: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API_URL, form);
    setForm({ name: "", email: "", password: "", dob: "" });
    onSave();
  };

  return (
    <form onSubmit={handleSubmit} className="row g-3">
      <div className="col-md-3">
        <input type="text" name="name" className="form-control" placeholder="Name" value={form.name} onChange={handleChange} required />
      </div>
      <div className="col-md-3">
        <input type="email" name="email" className="form-control" placeholder="Email" value={form.email} onChange={handleChange} required />
      </div>
      <div className="col-md-2">
        <input type="password" name="password" className="form-control" placeholder="Password" value={form.password} onChange={handleChange} required />
      </div>
      <div className="col-md-2">
        <input type="date" name="dob" className="form-control" value={form.dob} onChange={handleChange} required />
      </div>
      <div className="col-md-2">
        <button type="submit" className="btn btn-success w-100">Add User</button>
      </div>
    </form>
  );
}
