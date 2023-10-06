import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const rFormWeb = sequelize.define("registros", {
  cuestn: {
    type: DataTypes.INTEGER(3),
    primaryKey: true,
    autoIncrement: true,
  },
  edad: {
    type: DataTypes.STRING(2),
    allowNull: true,
  },
  sexo: {
    type: DataTypes.STRING(1),
    allowNull: true,
  },
  p1: {
    type: DataTypes.STRING(1),
    allowNull: true,
  },
  p2: {
    type: DataTypes.STRING(1),
    allowNull: true,
  },
  p3: {
    type: DataTypes.STRING(2),
    allowNull: true,
  },
  p4: {
    type: DataTypes.STRING(1),
    allowNull: true,
  },
  p5: {
    type: DataTypes.STRING(1),
    allowNull: true,
  },
  p6: {
    type: DataTypes.STRING(1),
    allowNull: true,
  },
  p7: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  p8: {
    type: DataTypes.STRING(1),
    allowNull: true,
  },
  p9: {
    type: DataTypes.STRING(1),
    allowNull: true,
  },
  p10: {
    type: DataTypes.STRING(1),
    allowNull: true,
  },
  p11: {
    type: DataTypes.STRING(2),
    allowNull: true,
  },
  p12: {
    type: DataTypes.STRING(5),
    allowNull: true,
  },
  p13: {
    type: DataTypes.STRING(1),
    allowNull: true,
  },
  p14: {
    type: DataTypes.STRING(1),
    allowNull: true,
  },
  p15: {
    type: DataTypes.STRING(1),
    allowNull: true,
  },
  p16: {
    type: DataTypes.STRING(1),
    allowNull: true,
  },
  p17: {
    type: DataTypes.STRING(8),
    allowNull: true,
  },
  p17_o:{
    type: DataTypes.STRING(180),
    allowNull: false,
  },
  p4_o:{
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  p5_o:{
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  p6_o:{
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  p7_o:{
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  p11_o:{
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  p12_o:{
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  p14_o:{
    type: DataTypes.STRING(80),
    allowNull: false,
  }
}, {
  timestamps: false
});
