import express from "express";
const router = express.Router();

router.get("/test", (req, res) => {
  // console.log(req.body.images);
  return res.send({ msg: "Express + TypeScript Server", hello: "Hello!" });
});

export default router;
