// import {Tblcar} from "../../model/index.model";
import { Tblcar } from "../../model/index.model";
import { QueryGetCarAll } from "./dto/queryGetCarAll.dto";
const getCarRegisterid = async (
  req: { body: { registerid: string } },
  res: any
) => {
  try {
    const car = await Tblcar.findOne({
      where: { Registerid: req?.body?.registerid },
    });
    return res.send(car);
  } catch (error) {
    throw error;
  }
};
const getCarAll = async (req: { query: QueryGetCarAll }, res: any) => {
  const { order, limit } = req.query;
  // console.log("limit is ", limit, " type limit is ", typeof limit);

  try {
    let cars;
    if (limit) {
      cars = await Tblcar.findAll({
        order: [["id", order != "DESC" ? "ASC" : "DESC"]],
        limit: Number(limit),
      });
    } else {
      cars = await Tblcar.findAll({
        order: [["id", order != "DESC" ? "ASC" : "DESC"]],
      });
    }

    return res.send(cars);
  } catch (error: any) {
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
};

export { getCarRegisterid, getCarAll };
