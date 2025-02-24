import express from "express";
const router = express.Router();
import { stdController} from "../controllers/studentController";

router.get('/',stdController.stdList);
router.get('/addStudent',stdController.addStudent);

export default router;