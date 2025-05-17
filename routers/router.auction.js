import express from 'express'
import { addItem, makeBid } from '../controllers/controller.auction.js'


const router = express.Router()




router.post("/add", addItem)

router.post("/bid", makeBid)






export default router