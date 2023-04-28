"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tblcar_controller_1 = require("../controller/tblcar/tblcar.controller");
const router = express_1.default.Router();
router.get("/test", (req, res) => {
    // console.log(req.body.images);
    return res.send({ msg: "Express + TypeScript Server", hello: "Hello!" });
});
router.get("/tblcar/get-car-all", tblcar_controller_1.getCarAll);
router.post("/tblcar/get-car-registerid", tblcar_controller_1.getCarRegisterid);
exports.default = router;
