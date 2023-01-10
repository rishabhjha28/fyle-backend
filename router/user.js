const express = require('express');
const { getData } = require('../utills/func');
const router = express.Router();

router.get('/',async(req,res)=>{
    const {id} = req.query
    if(id){
        const url = `https://api.github.com/users/${id}`
        const result = await getData(url)
        res.json(result)
    }
    else{
        res.json({err:'not a valid git id'})
    }
})

module.exports = router;