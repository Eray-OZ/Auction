import sqlite3 from "sqlite3"





export const getIndexPage = async (req, res) => {

    const db = new sqlite3.Database("./database/auction.db");


    db.all("SELECT * FROM auction", (err, rows) => {
        if (err) {
            return console.error("Veri çekme hatası:", err.message);
        }


        res.render('index', { data: rows })

    });

    db.close()


}


export const getAuctionPage = async (req, res) => {
    res.render('auction')
}


export const getRegisterAPage = async (req, res) => {
    res.render('register-auctioneer')
}



export const getRegisterCPage = async (req, res) => {
    res.render('register-customer')
}



export const getLoginPage = async (req, res) => {
    res.render('login')
}



