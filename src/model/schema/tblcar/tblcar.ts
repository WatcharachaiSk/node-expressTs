const db_tblcar = (sequelize: any, Sequelize: any) => {
  const tblcar = sequelize.define("tblcar", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    IDCar: {
      type: Sequelize.STRING,
    },
    HeaderCenter: {
      type: Sequelize.STRING,
    },
    Registerid: {
      type: Sequelize.STRING,
    },
    Type: {
      type: Sequelize.STRING,
    },
    Brand: {
      type: Sequelize.STRING,
    },
    Model: {
      type: Sequelize.STRING,
    },
    Color: {
      type: Sequelize.STRING,
    },
    Carbodyno: {
      type: Sequelize.STRING,
    },
    Code: {
      type: Sequelize.STRING,
    },
    Oganize: {
      type: Sequelize.STRING,
    },
    FlagMeter: {
      type: Sequelize.BOOLEAN,
    },
    Detail: {
      type: Sequelize.STRING,
    },
    User: {
      type: Sequelize.STRING,
    },
    DateTimeUse: {
      type: Sequelize.DATE,
    },
    Trackingtransport: {
      type: Sequelize.STRING(50),
    },
    Drivertitle: {
      type: Sequelize.STRING,
    },
    Drivername: {
      type: Sequelize.STRING,
    },
    DriverSername: {
      type: Sequelize.STRING,
    },
    Detail2: {
      type: Sequelize.STRING,
    },
    Taxicenter: {
      type: Sequelize.STRING,
    },
    Callsign: {
      type: Sequelize.INTEGER(5),
    },
    Provice: {
      type: Sequelize.STRING,
    },
    ndriver: {
      type: Sequelize.STRING,
    },
    meter_vendor_id: {
      type: Sequelize.STRING,
    },
    meter_unit_id: {
      type: Sequelize.STRING,
    },
    kid: {
      type: Sequelize.STRING,
    },
  });
  return tblcar;
};

export default db_tblcar;
