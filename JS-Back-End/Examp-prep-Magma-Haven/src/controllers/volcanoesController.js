const router = require('express').Router();


router.get('/create', (req,res) =>{
    res.render('volcanoes/create')
})






module.exports = router;