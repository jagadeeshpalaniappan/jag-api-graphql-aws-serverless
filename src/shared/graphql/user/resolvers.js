const data = require("@begin/data");
const xss = require("xss");
const dao = require("./dao");
const { validateFields } = require("../../utils/common");

function users(root, args, session) {
  return dao.getUsers();
}

function user(root, args, session) {
  const { id } = args;
  return dao.getUser({ id });
}

function createUser(root, args, session) {
  console.log("createUser:", args);
  const { name, email } = args.input;
  const user = { name: xss(name), email: xss(email) };
  let required = ["name", "email"];
  validateFields(user, required);

  return dao.createUser({ user });
}

function updateUser(root, args, session) {
  const { id } = args;
  const { name, email } = args.input;
  const user = { name: xss(name), email: xss(email) };
  let required = ["name", "email"];
  validateFields(user, required);
  return dao.updateUser({ id, user });
}

async function deleteUser(root, args, session) {
  const { id } = args;
  validateFields({ id }, ["id"]);
  const deletedUser = await dao.deleteUser({ id });
  return !!deletedUser;
}

const resolvers = {
  Query: { users, user },
  Mutation: {
    createUser,
    updateUser,
    deleteUser,
  },
};

module.exports = resolvers;
