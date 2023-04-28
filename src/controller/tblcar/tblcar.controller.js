"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCarAll = exports.getCarRegisterid = void 0;
// import {Tblcar} from "../../model/index.model";
const index_model_1 = require("../../model/index.model");
const getCarRegisterid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const car = yield index_model_1.Tblcar.findOne({
            where: { Registerid: (_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.registerid },
        });
        return res.send(car);
    }
    catch (error) {
        throw error;
    }
});
exports.getCarRegisterid = getCarRegisterid;
const getCarAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { order, limit } = req.query;
    // console.log("limit is ", limit, " type limit is ", typeof limit);
    try {
        let cars;
        if (limit) {
            cars = yield index_model_1.Tblcar.findAll({
                order: [["id", order != "DESC" ? "ASC" : "DESC"]],
                limit: Number(limit),
            });
        }
        else {
            cars = yield index_model_1.Tblcar.findAll({
                order: [["id", order != "DESC" ? "ASC" : "DESC"]],
            });
        }
        return res.send(cars);
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
    // Tblcar.findAll({
    //   order: [["item_id", order != "DESC" ? "ASC" : "DESC"]],
    // })
    //   .then((car: [{}]) => {
    //     return res.sen(car);
    //   })
    //   .catch((error: any) => {
    //     throw error;
    //   });
    // return res.send(car);
});
exports.getCarAll = getCarAll;
