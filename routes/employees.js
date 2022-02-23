const router = require('express').Router();
const { Employee } = require('../db/models')

module.exports = router;

router.get('/', async(req, res, next)=>{
    try{
        const employees = await Employee.findAll();
        res.send(employees)
    }
    catch(ex){
        next(ex)
    }
})