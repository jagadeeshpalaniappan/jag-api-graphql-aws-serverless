const data = require("@begin/data");
const xss = require("xss");
const dao = require("./dao");
const userDao = require("../user/dao");
const { validateFields } = require("../../utils/common");

function todos(root, args, session) {
  return dao.getTodos();
}

function todo(root, args, session) {
  const { id } = args;
  return dao.getTodo({ id });
}

function createTodo(root, args, session) {
  console.log("createTodo:", args);
  const { title, completed, userId } = args.input;
  const todo = { title: xss(title), completed, userId };
  let required = ["title", "userId"];
  validateFields(todo, required);

  return dao.createTodo({ todo });
}

function updateTodo(root, args, session) {
  const { id } = args;
  const { title, completed, userId } = args.input;
  const todo = { title: xss(title), completed, userId };
  let required = ["title"];
  validateFields(todo, required);
  return dao.updateTodo({ id, todo });
}

async function deleteTodo(root, args, session) {
  const { id } = args;
  validateFields({ id }, ["id"]);
  const deletedTodo = await dao.deleteTodo({ id });
  return !!deletedTodo;
}

function user(root, args, session) {
  const todo = root; // from: root we can parentInfo
  return userDao.getUser({ id: todo.userId });
}

const resolvers = {
  Query: {
    todos,
    todo,
  },
  Mutation: {
    createTodo,
    updateTodo,
    deleteTodo,
  },
  Todo: {
    user,
  },
};

module.exports = resolvers;