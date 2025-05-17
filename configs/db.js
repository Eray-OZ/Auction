import sqlite3 from "sqlite3";
import { auctioneer, customer, auction, bids } from "../models/models.js";



export const connectDB = async (req, res) => {

    const queries = [auctioneer, customer, auction, bids]


    const db = new sqlite3.Database("./database/auction.db", (err) => {
        if (err) {
            console.error("Veritabanı bağlantı hatası:", err.message);
        } else {
            console.log("SQLite veritabanına başarıyla bağlanıldı.");
        }
    });



    queries.map(query => {
        db.run(query, (err) => {
            if (err) {
                console.error("Tablo oluşturulurken hata oluştu:", err.message);
            }
        });

    })
}