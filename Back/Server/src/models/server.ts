import express,{Application} from 'express';
import cors from 'cors';
import routesProducts from '../routes/product';
import routesUser from '../routes/user';
import {Product } from './product';
import { User } from './user';

 class Server{
    private app: Application;
    private port: string;

    constructor(){

       this.app=express();
       this.port=process.env.PORT||'3000';
       this.listen();
       this.midlewares();
       this.routes();
       this.dbConnect();
     
    }
    
    listen(){
        this.app.listen(this.port,()=>{
            console.log('Aplicación corriendo en el puerto '+this.port);
        })
    }
    routes(){
        this.app.use('/api/products',routesProducts);
        this.app.use('/api/users',routesUser)
    }

    midlewares(){
        //parseo body
        this.app.use(express.json());
        //cors
       this.app.use(cors());
    }

    async dbConnect()
    {
        try{
            await Product.sync();
            await User.sync();
        }catch(error){
            console.log('Unable to connect to the database.',error);
        }
    }
}
export default Server;