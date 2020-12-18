const express = require('express')
const router =  express.Router()

router.get('/' , (req , res) => {
    res.send('sa')
})

router.post('/' , (req , res) => {
    res.send('sa post')
})

module.exports = router