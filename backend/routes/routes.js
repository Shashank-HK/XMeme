import express from 'express';

//importing controllers
import { getMemes, getOneMeme, putMeme, updateMeme} from '../controllers/memes.js';

const router = express.Router();

//specifying route and corresponding controller 
router.get('/', getMemes);
router.post('/', putMeme);
router.get('/:id', getOneMeme);
router.patch('/:id',updateMeme);

export default router;