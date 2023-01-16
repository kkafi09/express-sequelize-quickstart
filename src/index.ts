import { Request, Response } from "express";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import {config as dotenv} from "dotenv";

const app = express();
const port = 3001;
dotenv();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.json('Hello from world')
});

app.listen(port, () => {
    console.log("Running express on port ", port)
})