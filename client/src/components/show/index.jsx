import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Box from "../box";

const Show = ({ onEditUser }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/users", {
        headers: {
          contentType: "application/json",
        },
      })
      .then((data) => setUsers(data.data))
      .catch((_) => alert("Something went wrong"));
  }, []);
  const onEdit = (index) => {
    onEditUser(
      users.filter((_, idx) => {
        return index === idx;
      })
    );
  };
  const onDelete = (index) => {
    const user = users.filter((_, idx) => {
      return index === idx;
    });
    axios
      .delete("http://localhost:3001/api/v1/users/delete", {
        headers: {
          contentType: "application/json",
        },
        params: {
          id: user[0]._id,
        },
      })
      .then((_) => alert("Deleted Successfully"))
      .catch((_) => alert("Something went wrong"));
  };
  return (
    <div className="w-full border border-gray-600 mt-8 shadow">
      <div className="bg-green-500 flex items-center">
        <div className="w-[5%] border-r px-2 text-black font-semibold py-3 border-white">
          <span>No</span>
        </div>
        <div className="w-[15%] border-r px-2 text-black font-semibold py-3 border-white">
          <span>User Name</span>
        </div>
        <div className="w-[20%] border-r px-2 text-black font-semibold py-3 border-white">
          <span>Full Name</span>
        </div>
        <div className="w-[25%] border-r px-2 text-black font-semibold py-3 border-white">
          <span>Email</span>
        </div>
        <div className="w-[15%] border-r px-2 text-black font-semibold py-3 border-white">
          <span>BirthDay</span>
        </div>
        <div className="w-[10%] border-r text-black font-semibold py-6 border-white"></div>
        <div className="w-[10%] py-6"></div>
      </div>
      {users.length > 0 &&
        users.map((user, index) => {
          return (
            <Box
              {...user}
              key={index}
              index={index}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          );
        })}
    </div>
  );
};

export default Show;
