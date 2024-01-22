import { Sequelize } from "sequelize";

const sequelize= new Sequelize('merca','root','',{
    host:'localhost',
    dialect: 'mysql'
});
export default sequelize