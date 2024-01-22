import { Router} from 'express';
import { newUser,loginUser, getUsers, getOne, deletee, updatee } from '../controllers/user';

const router=Router();

router.post('/',newUser);
router.post('/login',loginUser);
router.get('/',getUsers);
router.get('/:id',getOne);
router.delete('/:id',deletee);
router.put('/:id',updatee);


export default router;
