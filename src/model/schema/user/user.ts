const db_user = (sequelize: any, Sequelize: any) => {
  const user = sequelize.define("users", {
    user_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING(30),
    },
    password: {
      type: Sequelize.STRING,
    },
    user_status: {
      type: Sequelize.BOOLEAN,
    },
    admin: {
      type: Sequelize.BOOLEAN,
    },
    authentication_token: {
      type: Sequelize.STRING,
    },
    web_token: {
      type: Sequelize.STRING,
    },
  });
  return user;
};

export default db_user;
