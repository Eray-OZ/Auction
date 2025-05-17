import express from 'express'
import { getIndexPage, getAuctionPage, getRegisterAPage, getRegisterCPage, getLoginPage } from '../controllers/controller.page.js'



const router = express.Router()




router.get("/", getIndexPage)

router.get("/auction", getAuctionPage)

router.get("/registerA", getRegisterAPage)

router.get("/registerC", getRegisterCPage)

router.get("/login", getLoginPage)







export default router