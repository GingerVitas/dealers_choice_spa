const router = require('express').Router();
const { Sale } = require('../db/models')

module.exports = router;

router.get('/', async(req, res, next)=>{
    try{
        const sales = await Sale.findAll({
            order: ['EmployeeId']
        });
        res.send(sales)
    }
    catch(ex){
        next(ex)
    }
})