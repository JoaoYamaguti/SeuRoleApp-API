import express from "express";

import {
  createNewEstablishment,
  findEstablishments,
  deleteEstablishment,
  deleteAll,
} from "./services/establishment/index.js";

const app = express();

app.route("/establishment/create").post(async (request, response) => {
  return response.send(await createNewEstablishment(request.body));
});

app.route("/establishment/findAll").get(async (request, response) => {
  return response.send(await findEstablishments());
});

app.route("/establishment/").get(async (request, response) => {
  console.log(request.body)
  return response.send(request.body);
});

app.route("/establishment/delete").delete(async (request, response) => {
  return response.send(await deleteEstablishment(request.body));
});

app.route("/establishment/deleteAll").delete(async (request, response) => {
  return response.send(await deleteAll());
});

export default app;
