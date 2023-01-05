import fs from "fs"

import express from "express"
import morgan from "morgan"

import data from "./data/data.json" assert { type: "json" }

const app = express()

const logStream = fs.createWriteStream(
    "/home/sene/microservices/node_api/logs/requests.log",
    { flags: "a" }
)

app.use(morgan("combined", { stream: logStream }))

app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.get("/entry/:id", (req, res) => {
    // console.log(data)
    res.send(
        data.filter((entry) => {
            return entry.id == req.params.id
        })
    )
})

app.listen(3000)
