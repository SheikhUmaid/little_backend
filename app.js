import express from "express"
import { createTodo, getTodos} from "./controllers.js";

const app = express();


app.use(express.json())

app.post("/create",createTodo )
app.get("/get", getTodos)


export default app;