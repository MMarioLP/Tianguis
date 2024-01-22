
import { DataTypes } from 'sequelize';
import sequelize from '../db/conection';

export const Product = sequelize.define('products3',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING
    },
    precio:{
        type:DataTypes.STRING
    },
    image:{
        type:DataTypes.STRING,
        allowNull:false
    },

    descripcion:{
        type: DataTypes.STRING
    }

});