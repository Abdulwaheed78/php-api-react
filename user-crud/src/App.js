import React from "react";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">User Management</h2>
      <UserList />
    </div>
  );
}

export default App;
