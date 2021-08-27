import { Router } from 'express'
import { getWebHook, postWebHook } from '../controllers/webhook';

const router = Router();

router.get('/', getWebHook);
router.post('/', postWebHook)

export default router