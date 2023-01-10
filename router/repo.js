const express = require('express');
const { getData } = require('../utills/func');
const router = express.Router();


router.get('/',async(req,res)=>{
    const {id,per_page,page} = req.query
    if(id){
        const url=`https://api.github.com/users/${id}/repos?per_page=${per_page}&page=${page}`
        const result = await getData(url)
        res.json(result)
    }
    else{
        res.json({err:'not a valid git id'})
    }
    
})


module.exports = router