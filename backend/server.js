import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js"
import messageRoutes from "./routes/message.routes.js";
import connectToDB from "./db/connectToDB.js";

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

//middlewares
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)


app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, async () => {
    connectToDB();
    console.log(`Whisperlink server listening on port ${port}!`)
});
