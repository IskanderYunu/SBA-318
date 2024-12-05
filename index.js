import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js"; //imports the routes Users.js can name "userRoutes" to anything

const app = express(); //The whole app lives here
const PORT = 5000;

app.use(bodyParser.json());

app.use("/users", usersRoutes); //set the starting path for ALL the user paths - visit users runs UsersRoutes

app.get(
  "/",
  (req, res) => res.send("Hello from Homepage.")
  //   console.log("[TEST]!");
);

app.listen(PORT, () =>
  console.log(`Server is ALIIIIVE!: http://localhost:${PORT}`)
);
