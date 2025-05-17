import express from 'express'
import { getIndexPage, getAuctionPage, getRegisterAPage } from '../controllers/controller.page.js'



const router = express.Router()




router.get("/", getIndexPage)

router.get("/auction", getAuctionPage)

router.get("/registerA", getRegisterAPage)






export default router