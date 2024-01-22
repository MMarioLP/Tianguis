import { Request,Response } from "express"
import sequelize from "../db/conection";
import { Product } from '../models/product';

export const getProducts=async(req:Request,res:Response)=>{

  const listProducts= await Product.findAll();

  
    res.json(listProducts);
}

export const getOne= async (req: Request, res: Response) =>{
    
const{id}=req.params;
   const listProducts= await Product.findOne({ where: { id:id} });

  
   res.json(listProducts);
  

}
  
   export const  createe = async  (req: Request, res: Response) => {

    const {nombre,precio,image,descripcion}=req.body;

   await Product.create({nombre:nombre,precio:precio ,image:image,descripcion:descripcion });
 res.json(
   {
     msg:'producto nuevo'}
 ) 
}
export const  deletee = async  (req: Request, res: Response) => {

    const {id}=req.params;

     await Product.destroy({ where: { id:id} });
   res.json(
   {
    msg: 'producto destruido'}
 ) 
}

export const  updatee = async  (req: Request, res: Response) => {

    const{id}=req.params;

     await Product.update(req.body,{ where: { id:id} });
   res.json(
   {
    msg: 'producto modificado'}
 ) 
}




