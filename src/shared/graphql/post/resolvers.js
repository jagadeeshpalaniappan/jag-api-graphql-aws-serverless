const data = require("@begin/data");
const xss = require("xss");
const dao = require("./dao");
const { validateFields } = require("../../utils/common");

function posts(root, args, session) {
  return dao.getPosts();
}

function post(root, args, session) {
  const { id } = args;
  return dao.getPost({ id });
}

function createPost(root, args, session) {
  console.log("createPost:", args);
  const { title, body } = args.input;
  const post = { title: xss(title), body: xss(body) };
  let required = ["title"];
  validateFields(post, required);

  return dao.createPost({ post });
}

function updatePost(root, args, session) {
  const { id } = args;
  const { title, body } = args.input;
  const post = { title: xss(title), body: xss(body) };
  let required = ["title"];
  validateFields(post, required);
  return dao.updatePost({ id, post });
}

async function deletePost(root, args, session) {
  const { id } = args;
  validateFields({ id }, ["id"]);
  const deletedPost = await dao.deletePost({ id });
  return !!deletedPost;
}

const resolvers = {
  Query: { posts, post },
  Mutation: {
    createPost,
    updatePost,
    deletePost,
  },
};

module.exports = resolvers;
