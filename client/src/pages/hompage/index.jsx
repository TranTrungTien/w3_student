import React from "react";
import { useState } from "react";
import { Register, Show } from "../../components";

const HomePage = () => {
  const [editUser, setEditUser] = useState(null);
  const onEdit = (user) => {
    setEditUser(Array.isArray(user) ? user[0] : user);
  };
  return (
    <div className="xl:w-[75%] m-auto mt-5">
      <Register editUser={editUser} />
      <Show onEditUser={onEdit} />
    </div>
  );
};

export default HomePage;
