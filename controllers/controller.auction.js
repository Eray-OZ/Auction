import sqlite3 from "sqlite3"



export const addItem = async (req, res) => {


    try {

        const db = new sqlite3.Database("./database/auction.db");



        const newAuction = {
            title: req.body.title,
            category: req.body.category,
            description: req.body.description,
            starting_price: req.body.starting_price,
            current_price: req.body.starting_price,
            user_id: 1
        }


        const insertQuery = `INSERT INTO auction 
    (title, category, description, starting_price, current_price, user_id)
    VALUES (?, ?, ?, ?, ?, ?)`


        db.run(
            insertQuery,
            Object.values(newAuction),
            function (err) {
                if (err) {
                    return res.status(500).json({ err });
                }
                db.close()
                res.redirect("/")
            }
        )




    } catch (error) {
        res.json(error)
    }


}




export const makeBid = async (req, res) => {

    const db = new sqlite3.Database("./database/auction.db");


    const insertQuery = `INSERT INTO bids 
    (bid_price, item_id, )
    VALUES (?, ?, ?, ?, ?)`


}