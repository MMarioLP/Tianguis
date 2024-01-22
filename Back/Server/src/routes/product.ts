import { Router } from "express";
import { getProducts, getOne, createe, deletee, updatee } from '../controllers/product';
import validateToken from "./validate-token";

const router=Router();


router.get('/',getProducts);
router.get('/:id',getOne);
router.post('/',createe);
router.delete('/:id',deletee);
router.put('/:id',updatee);

export default router;
