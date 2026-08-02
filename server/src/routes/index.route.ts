import { Router } from "express";
import healthRouter from "./health.route.js";

const indexRoute = Router();

indexRoute.use("/", healthRouter);
indexRoute.use("/test", (req,res)=>{
  res.send('test')
});

export default indexRoute;
