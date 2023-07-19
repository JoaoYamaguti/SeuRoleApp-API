import express from "express";
import cors from 'cors'

import routes from "./routes.js";

const app = express();
const port = process.env.PORT || 5000

app.use(cors())

app.use(express.json())

app.use('/', routes)

console.log('oi')
app.listen(port, () => console.log(`Rodando na porta ${port}`))
