const express = require('express');
const { getData } = require('../utills/func');
const router = express.Router();

router.get('/',async(req,res)=>{
    const {id,repo} = req.query
    if(id && repo){
        const url=`https://api.github.com/repos/${id}/${repo}/languages`
        const result = await getData(url)
        res.json(result)
    }
    else{
        res.json({err:'not a valid git id or git repo'})
    }
})

module.exports = router