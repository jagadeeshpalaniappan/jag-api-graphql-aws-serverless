const db = require("@begin/data");
const { convertKeyToId } = require("../../utils/common");

async function getPosts() {
  const posts = await db.get({ table: "posts" });
  return convertKeyToId(posts);
}

async function getPost({ id }) {
  const post = await db.get({ table: "posts", key: id });
  return convertKeyToId([post])[0];
}

async function createPost({ post }) {
  const dbPost = await db.set({ table: "posts", ...post });
  return convertKeyToId([dbPost])[0];
}

async function updatePost({ id, post }) {
  const dbPost = await db.set({ table: "posts", key: id, ...post });
  return convertKeyToId([dbPost])[0];
}

function deletePost({ id }) {
  return db.destroy({ table: "posts", key: id });
}

module.exports = { getPosts, getPost, createPost, updatePost, deletePost };
