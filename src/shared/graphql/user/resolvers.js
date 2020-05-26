const data = require("@begin/data");
const xss = require("xss");
const dao = require("./dao");
const postDao = require("../post/dao");
const todoDao = require("../todo/dao");
const { validateFields } = require("../../utils/common");

/*
function users(root, args, session) {
  return dao.getUsers();
}
*/

async function users(root, args, session) {
  const { options } = args;
  const { pagination } = options;

  const { data, cursor } = await dao.getLimitedUsers({
    limit: pagination.limit,
    cursor: pagination.cursor,
  });

  const totalCount = await dao.getAllUsersCount();
  const meta = { totalCount, cursor };

  // return: UsersPage
  return { data, meta };
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
  const user = {};
  if (name) user.name = xss(name);
  if (email) user.email = xss(email);
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

function posts(root, args, session) {
  const user = root; // from: root we can parentInfo
  return postDao.getPostsByUserId({ userId: user.id });
}

function todos(root, args, session) {
  const user = root; // from: root we can parentInfo
  return todoDao.getTodosByUserId({ userId: user.id });
}

const resolvers = {
  Query: { users, user },
  Mutation: {
    createUser,
    updateUser,
    deleteUser,
  },
  User: {
    posts,
    todos,
  },
};

module.exports = resolvers;
