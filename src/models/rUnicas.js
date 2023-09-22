import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { rMultiples } from "./rMultiples.js";
import { rOtros } from "./rOtros.js";

export const rUnicas = sequelize.define("rUnicas", {
  cuestn: {
    type: DataTypes.INTEGER(3),
    primaryKey: true,
    autoIncrement: true,
  },
  pEdad: {
    type: DataTypes.INTEGER(2),
    allowNull: false,
  },
  pSexo: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
  },
  p1: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
  },
  p2: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
  },
  p3: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
  },
  p4: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
  },
  p5: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
  },
  p8: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
  },
  p9: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
  },
  p10: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
  },
  p11: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
  },
  p12: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
  },
  p14: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
  },
  p15: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
  },
  p16: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
  },
  p17: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
  },
});

//relacion 1 a n
rUnicas.hasMany(rMultiples, {
  foreignKey: "cuestnId",
  sourceKey: "cuestn",
});

rUnicas.hasMany(rOtros, {
  foreignKey: "cuestnId",
  sourceKey: "cuestn",
});

//relacion n a 1

rMultiples.belongsTo(rUnicas, {
  foreignKey: "cuestnId",
  targetKey: "cuestn",
});

rOtros.belongsTo(rUnicas, {
  foreignKey: "cuestnId",
  targetKey: "cuestn",
});
