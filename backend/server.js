import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToDB from "./db/connectToDB.js";

const app = express();
dotenv.config()
const port = process.env.PORT || 5000;

app.use("/api/auth", authRoutes)

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, async () => {
    connectToDB();
    console.log(`Whisperlink server listening on port ${port}!`)
});
