const form = document.querySelector("#form");
const showUser = document.querySelector("#show-user");
let isUpdate = false;
let userUpdate = null;
const handleSubmit = async (e) => {
  e.preventDefault();
  const userName = e.target.username.value;
  const fullName = e.target.fullname.value;
  const email = e.target.email.value;
  const birthDay = e.target.birthday.value;

  if (!userName || !fullName || !email || !birthDay) {
    return;
  }
  console.log(isUpdate);
  console.log(userUpdate);
  if (isUpdate) {
    const data = {
      _id: userUpdate[0]._id,
      userName,
      fullName,
      email,
      birthDay,
    };
    console.log(data);
    const url = "http://localhost:3001/api/v1/users/update";
    const response = await fetch(url, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Successfully updated !!! please refresh your page");
    } else {
      alert("Something went wrong");
    }
  } else {
    const data = {
      userName,
      fullName,
      email,
      birthDay,
    };
    const url = "http://localhost:3001/api/v1/users/save";
    const response = await fetch(url, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log({ response });
    if (response.ok) {
      alert("Successfully saved !!! please refresh your page");
    } else {
      alert("Something went wrong");
    }
  }
};

let userData = null;

const fetchUser = async () => {
  const url = "http://localhost:3001/api/v1/users";
  const users = await fetch(url, {
    method: "get",
    headers: {
      "content-type": "application/json",
    },
  });
  userData = await users.json();
  Array.isArray(userData) &&
    userData.forEach((user, index) => {
      const userRecord = document.createElement("div");
      userRecord.classList.add("show__item");
      const indexWrapper = document.createElement("div");
      const indexSpan = document.createElement("span");
      indexWrapper.classList.add("col--item");
      indexWrapper.classList.add("col--1");
      indexSpan.textContent = index + 1;
      indexWrapper.appendChild(indexSpan);
      userRecord.appendChild(indexWrapper);
      Object.keys(user).forEach((value, index) => {
        // _id vs __v is default value of mongodb
        if (value !== "_id" && value != "__v") {
          const innerDiv = document.createElement("div");
          innerDiv.classList.add("col--item");
          innerDiv.classList.add("col--" + (index + 1));
          const spanText = document.createElement("span");
          spanText.classList.add("col--item--text");
          spanText.textContent = user[value];
          innerDiv.appendChild(spanText);
          userRecord.appendChild(innerDiv);
        }
      });
      const editBtn = document.createElement("button");
      const deleteBtn = document.createElement("button");
      const editBtnWrapper = document.createElement("div");
      const deleteBtnWrapper = document.createElement("div");
      editBtnWrapper.classList.add("col--edit");
      deleteBtnWrapper.classList.add("col--delete");
      editBtn.id = "editBtn" + index;
      editBtn.dataset.index = index;
      deleteBtn.dataset.index = index;
      deleteBtn.id = "deleteBtn" + index;
      editBtn.textContent = "Edit";
      deleteBtn.textContent = "Delete";
      editBtn.classList.add("show__btn--edit");
      deleteBtn.classList.add("show__btn--delete");
      editBtnWrapper.appendChild(editBtn);
      deleteBtnWrapper.appendChild(deleteBtn);
      document.querySelector(".editBtn");
      userRecord.appendChild(editBtnWrapper);
      userRecord.appendChild(deleteBtnWrapper);
      showUser.appendChild(userRecord);
    });
};
const handleEdit = (e) => {
  const index = e.target.dataset.index;
  const user =
    Array.isArray(userData) &&
    userData.filter((user, idx) => idx === Number(index));
  console.log(user);
  if (form) {
    isUpdate = true;
    userUpdate = user;
    form.elements.username.value = user[0].userName;
    form.elements.fullname.value = user[0].fullName;
    form.elements.email.value = user[0].email;
    form.elements.birthday.value = user[0].birthDay;
  }
};

const assignAction = () => {
  userData.forEach((_, index) => {
    const editBtn = document.querySelector("#editBtn" + index);
    const deleteBtn = document.querySelector("#deleteBtn" + index);
    editBtn && editBtn.addEventListener("click", handleEdit);
    deleteBtn && deleteBtn.addEventListener("click", handleDelete);
  });
};

const handleDelete = async (e) => {
  const index = e.target.dataset.index;
  const user =
    Array.isArray(userData) &&
    userData.filter((user, idx) => idx === Number(index));
  console.log(user);
  const url = "http://localhost:3001/api/v1/users/delete?id=" + user[0]._id;
  const response = await fetch(url, {
    method: "delete",
    headers: {
      "content-type": "application/json",
    },
  });

  if (response.ok) {
    alert("Successfully deleted !!! please refresh your page");
  } else {
    alert("Something went wrong");
  }
};

fetchUser().then((_) => {
  assignAction();
});

form.addEventListener("submit", handleSubmit);
