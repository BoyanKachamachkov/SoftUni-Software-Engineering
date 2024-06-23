const router = require('express').Router();



router.get('/', (req,res) => {
    res.render('recipes/catalog')
})





module.exports = router;