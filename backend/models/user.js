import db from "../db/db.js";
import {DataTypes} from "sequelize";



const userModel = db.define('user',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },

    email: {type: DataTypes.STRING,   
            allowNull: false,
            unique: true
            },

    password: {type: DataTypes.STRING(250),   
            allowNull: false,
            },

    name: {type: DataTypes.STRING,   
            allowNull: false,
            },

    lastname: {type: DataTypes.STRING,   
            allowNull: false,
            }
  
}
);
await userModel.sync(); // if the table dont exist sync  create  table
export default userModel;   