const db = require("@begin/data");
const { convertKeyToId } = require("../../utils/common");

async function getUsers() {
  const users = await db.get({ table: "users" });
  return convertKeyToId(users);
}

async function getUser({ id }) {
  const user = await db.get({ table: "users", key: id });
  return convertKeyToId([user])[0];
}

async function createUser({ user }) {
  const dbUser = await db.set({ table: "users", ...user });
  return convertKeyToId([dbUser])[0];
}

async function updateUser({ id, user }) {
  const dbUser = await db.set({ table: "users", key: id, ...user });
  return convertKeyToId([dbUser])[0];
}

async function deleteUser({ id }) {
  return db.destroy({ table: "users", key: id });
}

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
