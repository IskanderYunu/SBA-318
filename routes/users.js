import express from "express";

import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

//all routes in here stat with /users
//GET
router.get("/", getUsers);

//POST from client to the server AND makes unique ID for everyone
router.post("/", createUser);

// /users/2 => req.params { id: 2}

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router; //exports to index.js
