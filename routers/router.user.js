import express from 'express'
import { registerAuctioneer } from "../controllers/controller.user.js"


const router = express.Router()




router.post("/registerA", registerAuctioneer)




export default router