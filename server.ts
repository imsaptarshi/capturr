import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { applicationLevel } from "./middleware/applicationLevel";
import router from "./routes/browserJob"

dotenv.config();

const app: express.Application = express();
const port: (Number | String) = process.env.PORT || 3000;

app.use(cors());
app.use(applicationLevel)
app.use("/", router)

app.listen(port, (): (() => void) | any => {
    console.log(`Server is running on port: ${port}`);
});