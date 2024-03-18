import { db  } from '../db.js';

export const participate = async(req,res) =>{
   const pdata = req.body;
//    console.log(pdata);
//    const q= "select * from participants";
   const q = "insert into participants( eventid, userid,uname,email,phone) values(?, ?, ?, ?,?)";
    try {
        const [data]=  await db.query(q,[pdata.eventid,pdata.uid,pdata.name ,pdata.email,pdata.phone]);
        //  const [data]=   await db.query(q);
        res.status(201).json({ message: ' added successfully'});
    } catch (error) {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to add event' });
          } 
            
          
    }
}
export const Myparticipants = async (req, res) => {
    const q = "SELECT p.userid, p.eventid, e.title, e.date FROM participants p JOIN events e ON e.eventid = p.eventid WHERE p.userid = ?";
   console.log(req.params.id); 
   try {
        
        const result = await db.query(q, [req.params.id]);
        console.log(result);
        if (result[0].length > 0) {
            res.status(200).json(result[0]);
        } else {
            res.status(404).json({ message: "No participants found for the specified user ID." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

