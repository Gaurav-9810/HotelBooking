import express from 'express';
import Hotel from '../models/Hotels.js';
import { createError } from '../utils/error.js';
import { countByCity, countByType, createHotel , deleteHotel , getHotel, getHotelRooms, getHotels, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin} from '../utils/verifyToken.js'

const router=express.Router();

//Create
router.post("/",verifyAdmin ,createHotel);
//update
router.put('/:id',verifyAdmin ,updateHotel )

//Delete
router.delete('/:id',verifyAdmin ,deleteHotel)
//Get
router.get('/find/:id', getHotel)
//Get All
router.get('/', getHotels);

router.get('/countByCity', countByCity);
router.get('/countByType', countByType);
router.get('/room/:id', getHotelRooms);







// router.get('/', async(req,res,next)=>{
      
//       const failed =true
//       // const err=new Error()
//       // err.status=404;
//       // err.message="sorry not is found!";
//       if(failed) return next(createError(401,"you are not authenticated!"));
//       try{
//          const allhotels=await Hotel.findById("sdkjhsd")
//          res.status(200).json(allhotels);
//        }
//        catch(err){
//          next(err)
//        }  
//    });



export default router;