export const auctioneer = `CREATE TABLE IF NOT EXISTS Auctioneer (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    surname TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    phone TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)`


export const customer = `CREATE TABLE IF NOT EXISTS Customer (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)`



export const auction = `CREATE TABLE IF NOT EXISTS Auction (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT,
    starting_price REAL NOT NULL,
    current_price REAL NOT NULL,
    status TEXT DEFAULT 'active',                 
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    auctioneer_id INTEGER NOT NULL,
    FOREIGN KEY (auctioneer_id) REFERENCES Auctioneer(id))`


export const bids = `CREATE TABLE IF NOT EXISTS Bids (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    bid_price REAL NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    item_id INTEGER NOT NULL,
    customer_id INTEGER NOT NULL,
    FOREIGN KEY (item_id) REFERENCES Auction(id),
    FOREIGN KEY (customer_id) REFERENCES Customer(id))`    