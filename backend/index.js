import express from "express";
import cors from "cors";
let server = express();
import mongoose from "mongoose";
import "./controller.js";
import { create, read, readById, update, del } from "./controller.js";
import "dotenv/config";
let url = process.env.dataBaseUrlString;
let port = process.env.PORT || 8080;
mongoose
    .connect(url)
    .then(() => {
        console.log("DataBase connected...");
    })
    .catch(() => {
        console.log("DataBase is not connected...");
    });
server.use(express.json());
server.use(cors());
// CRUD operations and REST APIs
server.post("/", (req, res) => create(req, res));
server.get("/", (req, res) => read(req, res));
server.get("/:name", (req, res) => readById(req, res));
server.put("/:name", (req, res) => update(req, res));
server.delete("/:id", (req, res) => del(req, res));

server.listen(port, () => {
    console.log("Server started...");
});
