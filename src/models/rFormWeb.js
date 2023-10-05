import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const rFormWeb = sequelize.define("rFormWeb", {
  cuestn: {
    type: DataTypes.INTEGER(3),
    primaryKey: true,
    autoIncrement: true,
  },
  pEdad: {
    type: DataTypes.STRING(2),
    allowNull: false,
  },
  pSexo: {
    type: DataTypes.STRING(1),
    allowNull: false,
  },
  p1: {
    type: DataTypes.STRING(1),
    allowNull: false,
  },
  p2: {
    type: DataTypes.STRING(1),
    allowNull: false,
  },
  p3: {
    type: DataTypes.STRING(2),
    allowNull: false,
  },
  p4: {
    type: DataTypes.STRING(1),
    allowNull: false,
  },
  p5: {
    type: DataTypes.STRING(1),
    allowNull: false,
  },
  p6: {
    type: DataTypes.STRING(1),
    allowNull: false,
  },
  p7: {
    type: DataTypes.STRING(3),
    allowNull: false,
  },
  p8: {
    type: DataTypes.STRING(1),
    allowNull: false,
  },
  p9: {
    type: DataTypes.STRING(1),
    allowNull: false,
  },
  p10: {
    type: DataTypes.STRING(1),
    allowNull: false,
  },
  p11: {
    type: DataTypes.STRING(2),
    allowNull: false,
  },
  p12: {
    type: DataTypes.STRING(5),
    allowNull: false,
  }
});
