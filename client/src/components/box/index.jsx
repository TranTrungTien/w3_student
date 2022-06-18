import React from "react";

const Box = ({
  index,
  userName,
  fullName,
  email,
  birthDay,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="flex items-center border-t border-gray-500">
      <div className="w-[5%] border-r px-2  flex justify-start items-center text-black font-semibold h-16 border-gray-500">
        <span className="leading-[22px] block">{index + 1}</span>
      </div>
      <div className="w-[15%] border-r px-2 flex justify-start items-center text-black font-semibold h-16 border-gray-500">
        <span className="leading-[22px] block">{userName}</span>
      </div>
      <div className="w-[20%] border-r px-2 flex justify-start items-center text-black font-semibold h-16 border-gray-500">
        <span className="leading-[22px] block">{fullName}</span>
      </div>
      <div className="w-[25%] border-r px-2 flex justify-start items-center text-black font-semibold h-16 border-gray-500">
        <span className="leading-[22px] block">{email}</span>
      </div>
      <div className="w-[15%] border-r px-2 flex justify-start items-center text-black font-semibold h-16 border-gray-500">
        <span className="leading-[22px] block">{birthDay}</span>
      </div>
      <div className="w-[10%] border-r text-white font-semibold border-gray-500 h-16 flex justify-center items-center">
        <button
          onClick={() => onEdit(index)}
          className="bg-yellow-500 rounded-sm border-none outline-none px-6 py-2 "
        >
          Edit
        </button>
      </div>
      <div className="w-[10%] text-white flex justify-center items-center">
        <button
          onClick={() => onDelete(index)}
          className="bg-red-500 rounded-sm border-none outline-none px-6 py-2 "
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Box;
