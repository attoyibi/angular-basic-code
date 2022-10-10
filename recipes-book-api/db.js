const db = require("./db.json");
const recipes = require("./db-json/recipes.json");

module.exports = {
  ...db,
  ...recipes,
};

// [
//   {
//     posts: [{ id: 1, title: "json-server", author: "typicode" }],
//     comments: [{ id: 1, body: "some comment", postId: 1 }],
//     profile: { name: "typicode" },
//   },
// ];
