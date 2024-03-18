import express from "express"
import { Myparticipants, participate } from "../controllers/participants.js";


const router = express.Router();

router.post("/participate", participate);
// router.get("/getparticipants",getparticipants);
router.get("/myparticipants/:id",Myparticipants);
export default router;