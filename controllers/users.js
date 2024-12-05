import { v4 as uuidv4 } from "uuid";

//normal array
let users = [];

export const getUsers = (req, res) => {
  //console.log(users);

  res.send(users); //test correct route
};

export const createUser = (req, res) => {
  //see if callback funciont was fired
  //console.log("POST ROUTE REACHED");

  const user = req.body;

  users.push({ ...user, id: uuidv4() });
  // console.log(req.body); // req.body works with post requests

  res.send(`User with the username ${user.firstName} added to the database!`);
};

export const getUser = (req, res) => {
  const { id } = req.params;

  const foundUsers = users.find((user) => user.id == id);

  res.send(foundUsers);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`User with the id ${id} deleted from the database.`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;

  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;

  if (lastName) user.lastName = lastName;

  if (age) user.age = age;

  res.send(`User with the id ${id} has been updated.`);
};
