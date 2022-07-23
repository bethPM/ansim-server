import express, { Request, Response } from "express";
import cors from "cors";
import { loadAnsims } from "./API";
import { ILatlng } from "./API/interface/index.interface";
const app: express.Application = express();
const port: string | number = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const whiteList = ["http://localhost:3000"];

const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (!origin || whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log("origin", origin);

      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/getAnsims", async (req: Request, res: Response) => {
  try {
    const latlng: ILatlng = {
      minX: parseFloat(req.query.minX as string),
      minY: parseFloat(req.query.minY as string),
      maxX: parseFloat(req.query.maxX as string),
      maxY: parseFloat(req.query.maxY as string),
    };

    const ansims = await loadAnsims(latlng);

    return res.json({ success: true, data: ansims.data });
  } catch (err: any) {
    console.log("getAnsimsError", err);
    return res.json({ success: false, data: { err, message: err.message } });
  }
});

app.listen(typeof port === "string" ? parseInt(port) : port , () => {
  console.log(`Example app listening on port ${port}`);
});
