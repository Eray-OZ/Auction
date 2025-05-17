import sqlite3 from "sqlite3"






export const registerAuctioneer = async (req, res) => {


    const db = new sqlite3.Database("./database/auction.db");


    const newAuctioneer = {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    }

    console.log(newAuctioneer)

    const insertQuery = `INSERT INTO Auctioneer (name, surname, email, password, phone)
    VALUES (?, ?, ?, ?, ?)`



    db.run(
        insertQuery,
        Object.values(newAuctioneer),
        function (err) {
            if (err) {
                res.json(err)
            }
            console.log("Success")
        }
    )


    res.redirect("/")

}







export const registerCustomer = async (req, res) => {


    const db = new sqlite3.Database("./database/auction.db");


    const newAuctioneer = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    }

    console.log(newAuctioneer)

    const insertQuery = `INSERT INTO Auctioneer (username, email, password)
    VALUES (?, ?, ?)`



    db.run(
        insertQuery,
        Object.values(newAuctioneer),
        function (err) {
            if (err) {
                res.json(err)
            }
            console.log("Success")
        }
    )


    res.redirect("/")

}