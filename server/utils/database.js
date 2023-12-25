import mysql from 'mysql'

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '9878059867gG@',
    database: 'progress_tracker'
})

con.connect(function(err){
    if(err){
        console.log('connection error')
    }
    else {
        console.log("connected")
    }
})