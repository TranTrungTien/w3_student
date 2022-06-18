import React from "react";
import axios from "axios";

const Register = ({ editUser }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.username.value;
    const fullName = e.target.fullname.value;
    const email = e.target.email.value;
    const birthDay = e.target.birthday.value;

    console.log({ userName, fullName, email, birthDay });

    if (!userName || !fullName || !email || !birthDay) {
      return;
    }
    if (editUser) {
      axios
        .put(
          "http://localhost:3001/api/v1/users/update",
          { _id: editUser._id, userName, fullName, email, birthDay },
          {
            headers: {
              contentType: "application/json",
            },
          }
        )
        .then((_) => alert("Update Successfully"))
        .catch((_) => alert("Something went wrong"));
    } else {
      axios
        .post(
          "http://localhost:3001/api/v1/users/save",
          { userName, fullName, email, birthDay },
          {
            headers: {
              contentType: "application/json",
            },
          }
        )
        .then((_) => alert("Update Successfully"))
        .catch((_) => alert("Something went wrong"));
    }
  };
  return (
    <div className="border border-gray-600 rounded shadow-md">
      <div className="px-3 py-4 bg-green-700">
        <h2 className="text-white font-semibold leading-[22px] text-lg">
          Đăng ký tài khoản User
        </h2>
      </div>
      <form onSubmit={onSubmit} className="mt-6 pb-6">
        <div>
          <div className="flex flex-col justify-start px-4 gap-y-2 items-start mb-4">
            <label className="text-black text-base " htmlFor="username">
              User Name
            </label>
            <input
              type="text"
              name="username"
              defaultValue={editUser?.userName ? editUser.userName : ""}
              className="border block w-full px-2 py-3 rounded focus: outline-none"
              id="username"
            />
          </div>
          <div className="flex flex-col justify-start px-4 gap-y-2 items-start mb-4">
            <label className="text-black text-base" htmlFor="fullname">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              defaultValue={editUser?.fullName ? editUser.fullName : ""}
              className="border block w-full px-2 py-3 rounded focus: outline-none"
              id="fullname"
            />
          </div>
          <div className="flex flex-col justify-start px-4 gap-y-2 items-start mb-4">
            <label
              className="text-black text-base 
            "
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="text"
              defaultValue={editUser?.email ? editUser.email : ""}
              name="email"
              className="border block w-full px-2 py-3 rounded focus: outline-none"
              id="email"
            />
          </div>
          <div className="flex flex-col justify-start px-4 gap-y-2 items-start mb-4">
            <label className="text-black text-base" htmlFor="birthday">
              BirthDay
            </label>
            <input
              defaultValue={editUser?.birthDay ? editUser.birthDay : ""}
              type="date"
              name="birthday"
              className="border block w-full px-2 py-3 rounded focus: outline-none"
              id="birthday"
            />
          </div>
        </div>
        <div className="px-4 flex items-center gap-x-4">
          <button
            className="rounded px-8 py-3 text-white font-medium bg-green-500"
            type="submit"
          >
            Save
          </button>
          <button
            className="rounded px-8 py-3 text-white font-medium bg-yellow-500"
            type="reset"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
