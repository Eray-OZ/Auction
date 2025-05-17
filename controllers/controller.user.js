import sqlite3 from "sqlite3"



const db = new sqlite3.Database("./database/auction.db");



export const registerAuctioneer = async (req, res) => {




    const newAuctioneer = {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    }


    const insertQuery = `INSERT INTO Auctioneer (name, surname, email, password, phone)
    VALUES (?, ?, ?, ?, ?)`



    db.run(
        insertQuery,
        Object.values(newAuctioneer),
        function (err) {
            if (err) {
                return res.status(500).json({ err });
            }
            db.close()
            res.redirect("/")

        }
    )


}







export const registerCustomer = async (req, res) => {


    const newCustomer = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    }


    const insertQuery = `INSERT INTO Customer (username, email, password)
    VALUES (?, ?, ?)`


    db.run(
        insertQuery,
        Object.values(newCustomer),
        function (err) {
            if (err) {
                return res.status(500).json({ err });

            }
            db.close()
            res.redirect("/")

        }
    )




}


