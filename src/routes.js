import express from "express";

import {
  createNewEstablishment,
  findEstablishments,
  deleteEstablishment,
  deleteAll,
} from "./services/establishment/index.js";

const app = express();

app.route('/health').get(async (_, response) => {
  return response.send('Running...');
})

app.route("/establishment/create").post(async (request, response) => {
  console.log(request.body)
  return response.send(await createNewEstablishment(request.body));
});

app.route("/establishment/findAll").get(async (_, response) => {
  return response.send(await findEstablishments());
});

app.route("/establishment/delete").delete(async (request, response) => {
  const res = await deleteEstablishment(request.headers)
  return response.send(res);
});

app.route("/establishment/deleteAll").delete(async (_, response) => {
  return response.send(await deleteAll());
});

export default app;
