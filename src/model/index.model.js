"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
const user_1 = __importDefault(require("./schema/user/user"));
dotenv_1.default.config();
const sequelizeData = {
    database: process.env.DATABASE_NAME,
    user: process.env.USERNAME_DB,
    pass: process.env.PASSWORD_DB,
    dialect: process.env.DIALECT,
    host: process.env.HOST_DB,
};
const operatorsAliases = 0;
const sequelize = new sequelize_1.Sequelize(sequelizeData.database, sequelizeData.user, sequelizeData.pass, {
    dialect: sequelizeData.dialect,
    host: sequelizeData.host,
    define: {
        charset: "utf8",
        collate: "utf8_general_ci",
    },
    operatorsAliases: operatorsAliases,
    timezone: "+07:00",
});
const db = {};
db.Sequelize = sequelize_1.Sequelize;
db.sequelize = sequelize;
db.Users = (0, user_1.default)(sequelize, sequelize_1.Sequelize);
exports.default = db;
