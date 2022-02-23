const router = require('sequelize').Router();
const { Car } = require('../db/models')

router.get('/', async(req, res, next)=>{
    try{
        const cars = await Car.findAll();
        res.send(cars)
    }
    catch(ex){
        next(ex)
    }
})