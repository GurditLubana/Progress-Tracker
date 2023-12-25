import express from 'express'

const router = express.Router()

router.post('/submitreport', (req, res) => {
    console.log(req.body)
})

export{router as reportRouter}