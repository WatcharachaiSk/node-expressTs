import express from "express";
import {
  getCarRegisterid,
  getCarAll,
} from "../controller/tblcar/tblcar.controller";
const router = express.Router();

router.get("/test", (req, res) => {
  // console.log(req.body.images);
  return res.send({ msg: "Express + TypeScript Server", hello: "Hello!" });
});

router.get("/tblcar/get-car-all", getCarAll);
router.post("/tblcar/get-car-registerid", getCarRegisterid);

export default router;
