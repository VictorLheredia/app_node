const express = require("express");

const app = apress();

app.get("/", (request, response) => {
  return response.json({ mesage: "Server is up" });
});

app.listen(3333);
