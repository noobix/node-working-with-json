const express = require("express");
const file = require("path");

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(file.join(__dirname, "./public")));
server.post("/account", (requestobject, responseobject) => {
  const { email, password } = requestobject.body;
  responseobject.send({ email, password });
});
server.listen(3000, () => console.log("server engaged"));
