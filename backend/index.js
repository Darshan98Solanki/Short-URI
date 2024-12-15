const express = require('express')
const port = 3000
const app = express()
const conn = require('./getConnection')
const checkURL = require('./types')
const cors = require('cors')
const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

app.use(cors())
app.use(express.json())

// Shorten url function

function generateURL() {

    let shortURL = ""

    while (shortURL.length < 6) {
        shortURL += allChars[Math.floor(Math.random() * allChars.length)]
    }
    shortURL = "https://short-uri-two.vercel.app/" + shortURL

    const query = "SELECT COUNT(?) FROM urls"

    conn.query(query, [shortURL], async (err, res) => {

        if (err) {
            console.log(err)
            res.status(err.code).json({ message: "Some error occurred" })
            return
        }

        if (await res[0]["COUNT('" + shortURL + "')"] == 1) {
            generateURL()
        }
    })

    return shortURL

}

// Format date function

function formatDate(date = new Date()) {
    const year = date.toLocaleString('default', { year: 'numeric' });
    const month = date.toLocaleString('default', {
        month: '2-digit',
    });
    const day = date.toLocaleString('default', { day: '2-digit' });

    return [year, month, day].join('-');
}

// Routes start
app.post('/generateURL',(req, res) => {

    const url = req.body
    const parseURL = checkURL.safeParse(url)

    if (!parseURL.success) {
        res.status(411).json({ message: parseURL.error.issues[0].message })
        return
    }

    const validURL = parseURL.data.url
    const shortURL = generateURL()
    const query = "INSERT INTO urls VALUES(?,?,?,?)"
    const date = formatDate(new Date())

    conn.query(query, [shortURL, validURL,0 ,date], (err, res) => {
        if (err) {
            res.status(404).json({ message: "Some error occurred" })
            return
        }
    })

    res.json({ shortenURL: shortURL })
    return
})

app.get('/', (req, res)=>{
    const query = "SELECT * from urls"
    conn.query(query, (err, result) => {
        res.json({ result})
    }) 
})

app.get('/:url', (req, res) => {
    
    const shortURL = "https://short-uri-two.vercel.app/"+req.params.url
    const query = "SELECT originalURL from urls WHERE shortenURL=?"

    conn.query(query, [shortURL], (err, result) => {
        if (err) {
            res.status(404).json({ message: "Some error occurred" })
            return
        }

        conn.query("UPDATE urls SET clicks=clicks+1 where shortenURL=?",[shortURL], (err, result) => {
            if (err) {
                res.status(404).json({ message: "Some error occurred" })
                return
            }
        })


        res.redirect(result[0].originalURL)
        return
    })    
})

app.listen(port);