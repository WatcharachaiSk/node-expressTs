import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import db_user from "./schema/user/user";
import db_tblcar from "./schema/tblcar/tblcar";
dotenv.config();

const sequelizeData: any = {
  database: process.env.DATABASE_NAME,
  user: process.env.USERNAME_DB,
  pass: process.env.PASSWORD_DB,
  dialect: process.env.DIALECT,
  host: process.env.HOST_DB,
};
const operatorsAliases: any = 0;

const sequelize = new Sequelize(
  sequelizeData.database,
  sequelizeData.user,
  sequelizeData.pass,
  {
    dialect: sequelizeData.dialect,
    host: sequelizeData.host,
    define: {
      charset: "utf8",
      collate: "utf8_general_ci",
      createdAt: false,
      updatedAt: false,
    },
    operatorsAliases: operatorsAliases,
    timezone: "+07:00",
  }
);

const db: any = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Users = db_user(sequelize, Sequelize);
db.Tblcar = db_tblcar(sequelize, Sequelize);

export const { Users, Tblcar } = db;

export default db;
