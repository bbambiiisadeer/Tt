import { eq } from "drizzle-orm";
import { dbClient, dbConn } from "@db/client.js";
import { userTable } from "@db/schema.js";

async function insertUser() {
  await dbClient.insert(userTable).values({
    name: "bambiiisadeer",
    email: "bambii@example.com",
    password: "5678",
  });
  dbConn.end();
}

async function queryUsers() {
  const users = await dbClient.query.userTable.findMany();
  console.log(users);
  dbConn.end();
}

async function updateUser() {
  const users = await dbClient.query.userTable.findMany();
  if (users.length === 0) return dbConn.end();

  const id = users[0].id;
  await dbClient
    .update(userTable)
    .set({
      name: "amour",
    })
    .where(eq(userTable.id, id));

  dbConn.end();
}

async function deleteUser() {
  const users = await dbClient.query.userTable.findMany();
  if (users.length === 0) return dbConn.end();

  const id = users[0].id;
  await dbClient.delete(userTable).where(eq(userTable.id, id));

  dbConn.end();
}

insertUser();
// queryUsers();
// updateUser();
// deleteUser();
