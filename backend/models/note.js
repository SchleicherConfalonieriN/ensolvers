import db from "../db/db.js";
import {DataTypes} from "sequelize";



const noteModel = db.define('note',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },

    title: {type: DataTypes.STRING,   
            allowNull: false,
            },

    description: {type: DataTypes.STRING(250),   
                 allowNull: false,
                 },
    id_user: {
                type: DataTypes.INTEGER
                },
    status:  {
                type: DataTypes.INTEGER
                },
}
);
await noteModel.sync(); // if the table dont exist sync  create  table
export default noteModel;   