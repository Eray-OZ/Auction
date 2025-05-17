import express from 'express'
import { registerAuctioneer, registerCustomer } from "../controllers/controller.user.js"


const router = express.Router()




router.post("/registerA", registerAuctioneer)

router.post("/registerC", registerCustomer)





export default router