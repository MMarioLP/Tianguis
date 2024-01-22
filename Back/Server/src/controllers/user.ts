import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';

export const newUser = async (req: Request, res: Response) => {

    const { username,nombre,apellidos, pass } = req.body;

    //validamos si el usuario ya existe en la DB
    const hashedPassword = await bcrypt.hash(pass, 10)

    const user = await User.findOne({ where: { username: username } })

    if (user) {
        return res.status(400).json({
            msg: 'ya existe un usuario con ese nombre' + user
        })
    }

    try {
        //guardamos usuario en la base de dats
        await User.create({
            username: username,
            nombre:nombre,
            apellidos:apellidos,
            pass: hashedPassword,
           
        });


        res.json({

            msg: 'Usuario ' + username + ' creado exitosamentes'
        })

    } catch (error) {
        res.status(400).json({
            msg: 'ups ocurrio un error',
            error
        })

    }



}

//----------------------------------------------------------------------------
export const getUsers=async(req:Request,res:Response)=>{

    const listUsers= await User.findAll();
  
    
      res.json(listUsers);
  }
  
  export const getOne= async (req: Request, res: Response) =>{
      
  const{id}=req.params;
     const listUser= await User.findOne({ where: { id:id} });
  
    
     res.json(listUser);
    
  
  }
  export const  deletee = async  (req: Request, res: Response) => {

    const {id}=req.params;

     await User.destroy({ where: { id:id} });
   res.json(
   {
    msg: 'producto eliminado'}
 ) 
}

export const  updatee = async  (req: Request, res: Response) => {

    const{id}=req.params;
    const {username}=req.body;

  
     await User.update({username:username},{ where: { id:id} });
   res.json(
   {
    msg: 'Usuario actualizado'}
 ) 
}








//----------------------------------------------------------------------------------------













export const loginUser =async (req: Request, res: Response) => {


    const { username, pass } = req.body;


    
   //validamos si el usuario existe en la DB



   const user:any = await User.findOne({ where: { username: username }});
   
   if(!user){
        return res.status(400).json({
            msg:'no existe '+username +' en la DB'

        })
   }


   //validamos passworrd

   const passwordValid= await bcrypt.compare(pass,user.pass)
   console.log(passwordValid);
   if(!passwordValid){
    return res.status(400).json({
    msg:'password incorrecto'
    })
   }

  
      
   
      
    
    



   //generamos token
   const token = jwt.sign({
    username:username

    
   },process.env.SECRET_KEY||'pepito123');
res.json({token});
}
