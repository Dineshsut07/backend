import express from "express";
import { addEvent, deleteEvent, getEvent, getEvents, updateEvent } from "../controllers/event.js";
import multer from "multer";
import path from "path";


const storage = multer.diskStorage({
    destination: (req,file, cb ) => {
        cb(null,'public/images');

    },
    filename: (req,file,cb) =>{
        cb(null, file.fieldname + "_"+ Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({
    storage :storage
})

const router = express.Router(); // Capitalize 'Router'
// router.use("/public", express.static("public/images"));
router.get("/events",getEvents);
router.get("/events/:id", getEvent);
router.post("/createevent",upload.single('image'), addEvent);
router.delete("/hook", deleteEvent);
router.put("/:id", updateEvent);

export default router;
