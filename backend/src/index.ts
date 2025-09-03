import "dotenv/config";
import express from "express";
import { dbClient } from "@db/client.js";
import { userTable } from "@db/schema.js";

const app = express();

app.use(express.json());

app.get("/users", async (req, res, next) => {
  try {
    const users = await dbClient.query.userTable.findMany();
    res.json(users);
  } catch (err) {
    next(err); 
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
