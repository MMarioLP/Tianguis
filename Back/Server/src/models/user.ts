
import { DataTypes } from 'sequelize';
import sequelize from '../db/conection';

export const User = sequelize.define('usuario',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    username:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    nombre:{

        type: DataTypes.STRING,
        
        allowNull:false
   
},
apellidos:{

    type: DataTypes.STRING,
    
    allowNull:false

},
    pass:{

        type: DataTypes.STRING,
        
        allowNull:false
    }

 } );