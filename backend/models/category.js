import db from "../db/db.js";
import {DataTypes} from "sequelize";



const categoryModel = db.define('category',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },

    title:{
        type: DataTypes.STRING,   
        allowNull: false,
          },
}
);
await categoryModel.sync(); // if the table dont exist sync  create  table
export default categoryModel;   