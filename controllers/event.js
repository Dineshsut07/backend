import { db  } from '../db.js';

import fs from  'fs';




export const getEvents = async (req, res) => {
  try {
    const cat = req.query.cat;
    const query = cat ? "SELECT * FROM events WHERE cat = ?" : "SELECT * FROM events";
    const [data] = await db.query(query, [cat]);
    //  const [img] ='select img from events';
    //  const eventData = {
    //   details:data,
    //   images: img,
    // };

    console.log('Data:', data);
    return res.status(200).json(data);
  } catch (error) {
    console.error('Query error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};





export const getEvent = async(req, res) => {
  try{

const q = "SELECT * FROM events where eventid = ?";
   
   const [data]= await  db.query(q, [req.params.id]);
    console.log(data[0]);
    return res.status(200).json(data);

  }catch (error) {

    console.error('Query error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const addEvent = async(req, res) => {
  const formData = req.body;
  const imagePath = req.file ? `/${req.file.filename}` : null;
  const query = 'INSERT INTO events (title, venue, date, img, `desc`,cat,uid) VALUES (?, ?, ?, ?, ?,?,?)';
  // console.log(req.file);
  // console.log(formData);
  try {
     const result =await db.query(
    query,
    [formData.title, formData.location, formData.date, imagePath, formData.description ,formData.category, formData.uid],);
    if(result[0].affectedRows> 0){
       res.status(201).json(result);
    } else {
      res.status(500).json({ error: "Failed to create event" });
    }
   
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
 
  
};
export const deleteEvent = (req,res) => {
    res.json("from controllers");

}
export const updateEvent = (req,res) => {
    res.status(200).json("from controllers");

}