import db from "../db/db.js";
import {DataTypes} from "sequelize";



const note_categoryModel = db.define('note_category',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
    id_note: {
        type: DataTypes.INTEGER
        },
    id_category:{
        type: DataTypes.INTEGER
        },
}
);
await note_categoryModel.sync(); // if the table dont exist sync  create  table
export default note_categoryModel;   