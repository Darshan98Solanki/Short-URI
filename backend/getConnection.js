const mysql = require('mysql2')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'short-url'
})

conn.connect((err)=>{
    if(err)
        throw err
})

module.exports = conn
