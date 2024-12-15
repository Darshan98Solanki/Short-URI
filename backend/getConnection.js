const mysql = require('mysql2')
require('dotenv').config();

const host = process.env.HOST
const user = process.env.USER
const password = process.env.PASSWORD
const database = process.env.DATABASE


const conn = mysql.createConnection({
    host:host,
    user:user,
    password:password,
    database:database
})

conn.connect((err)=>{
    if(err)
        throw err
})

module.exports = conn
