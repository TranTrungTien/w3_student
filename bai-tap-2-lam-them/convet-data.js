"use strict";

const rawData = [
  { id: 999999, name: "Phòng to nhất", parentId: null },
  { id: 1, name: "GHTK", parentId: 999999 },
  { id: 11, name: "Phòng CNTT", parentId: 1 },
  { id: 111, name: "Nhóm 1", parentId: 11 },
  { id: 112, name: "Nhóm 2", parentId: 11 },
  { id: 12, name: "Phòng KT", parentId: 1 },
  { id: 121, name: "Nhóm 1", parentId: 12 },
  { id: 122, name: "Nhóm 2", parentId: 12 },
  { id: 2, name: "FPT", parentId: 999999 },
  { id: 21, name: "Phòng Giám sát FPT", parentId: 2 },
  { id: 211, name: "Nhóm 1", parentId: 21 },
  { id: 212, name: "Nhóm 2", parentId: 21 },
  { id: 22, name: "Phòng Pháp chế", parentId: 2 },
  { id: 221, name: "Nhóm 1", parentId: 22 },
  { id: 222, name: "Nhóm 2", parentId: 22 },
  { id: 3, name: "VNPAY", parentId: 999999 },
  { id: 31, name: "Phòng GTGT", parentId: 3 },
  { id: 311, name: "Nhóm 1", parentId: 31 },
  { id: 312, name: "Nhóm 2", parentId: 31 },
  { id: 32, name: "Phòng Vận hành", parentId: 3 },
  { id: 321, name: "Nhóm 1", parentId: 32 },
  { id: 322, name: "Nhóm 2", parentId: 32 },
];

// Chuyển data sang dạng sau
const newData = {
  id: 999999,
  name: "Phòng to nhất",
  parentId: null,
  children: [
    {
      id: 1,
      name: "GHTK",
      parentId: 999999,
      children: [
        {
          id: 11,
          name: "Phòng CNTT",
          parentId: 1,
          children: [
            { id: 111, name: "Nhóm 1", parentId: 11 },
            { id: 112, name: "Nhóm 2", parentId: 11 },
          ],
        },
        {
          id: 12,
          name: "Phòng KT",
          parentId: 1,
          children: [
            { id: 121, name: "Nhóm 1", parentId: 12 },
            { id: 122, name: "Nhóm 2", parentId: 12 },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "FPT",
      parentId: 999999,
      children: [
        {
          id: 21,
          name: "Phòng Giám sát FPT",
          parentId: 2,
          children: [
            { id: 211, name: "Nhóm 1", parentId: 21 },
            { id: 212, name: "Nhóm 2", parentId: 21 },
          ],
        },
        {
          id: 22,
          name: "Phòng Pháp chế",
          parentId: 2,
          children: [
            { id: 221, name: "Nhóm 1", parentId: 22 },
            { id: 222, name: "Nhóm 2", parentId: 22 },
          ],
        },
      ],
    },
    {
      id: 3,
      parentId: 999999,
      name: "VNPAY",
      children: [
        {
          id: 31,
          name: "Phòng GTGT",
          parentId: 3,
          childrens: [
            { id: 311, name: "Nhóm 1", parentId: 31 },
            { id: 312, name: "Nhóm 2", parentId: 31 },
          ],
        },
        {
          id: 32,
          name: "Phòng Vận hành",
          parentId: 3,
          childrens: [
            { id: 321, name: "Nhóm 1", parentId: 32 },
            { id: 322, name: "Nhóm 2", parentId: 32 },
          ],
        },
      ],
    },
  ],
};

// traversal all children of tree;
function traversalTree(parent, room) {
  if (room.parentId == parent.id) {
    parent.children.push({ ...room, children: [] });
  } else {
    if (Array.isArray(parent.children) && parent.children.length > 0) {
      parent.children.forEach((child) => {
        traversalTree(child, room);
      });
    }
  }
}

function convertData(data) {
  let tree = {
    id: 0,
    name: "",
    parentId: null,
    children: [],
  };
  data.forEach((room) => {
    if (!room.parentId) {
      tree = { ...room, children: [] };
    } else {
      traversalTree(tree, room);
    }
  });
  return tree;
}

const converted = convertData(rawData);

console.log("before :", converted);

const anchoi = {
  id: 1111,
  name: "Phòng Ăn Chơi",
  parentId: 111,
};

function addMoreRoom(tree, newRoom) {
  traversalTree(tree, newRoom);
}

const massage = {
  id: 11111,
  name: "Phòng Massage",
  parentId: 1111,
};

const kara = {
  id: 11112,
  name: "Phòng Karaoke",
  parentId: 1111,
};

addMoreRoom(converted, anchoi);
console.log("after add new room 1:", converted);
addMoreRoom(converted, massage);
console.log("after add new room 2:", converted);
addMoreRoom(converted, kara);
console.log("after add new room 3:", converted);
