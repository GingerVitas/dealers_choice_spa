const express = require('express');
const app = express();
const path = require('path');
const { Employee } = require('./db/models');
const dataSeed = require('./db/seed')

app.use('/src', express.static(path.join(__dirname, './src')))
app.use('/', express.static(path.join(__dirname, './public')))

app.use('/api/sales', require('./routes/sales'))
app.use('/api/employees', require('./routes/employees'))

app.delete('/api/employees/:id', async(req, res, next)=>{
    try{
        const employee = await Employee.findByPk(req.params.id);
        await employee.destroy();
        res.sendStatus(204);
    }
    catch(ex){
        next(ex)
    }
})

app.get('/', async(req, res, next) => {
    try{
        res.sendFile('index.html')
    }
    catch(ex){
        next(ex)
    }
})



const start = async () => {
    try{
       await dataSeed();
       const port = process.env.PORT || 3000;
       app.listen(port, ()=> console.log(`listening on port ${port}`))
    }
    catch(ex){
        console.log(ex)
    }
}

start()