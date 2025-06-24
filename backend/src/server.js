import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config(); //allow using .env 

const app = express();
const port = process.env.PORT || 5001;



//middlewares
app.use(
  cors({
    origin: ["http://localhost:5173"]
  })
);
app.use(express.json());
app.use(rateLimiter);


app.use("/api/notes", notesRoutes);

app.use((err, req, res, next) => {
    console.log("The global error handle at server.js");
    console.error(err);  // Log the error
    res.status(500).json({ message: err.message || "Some error" });
})


connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
})

