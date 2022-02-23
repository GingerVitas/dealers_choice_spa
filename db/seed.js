const Sequelize = require('sequelize')
const sequelize = require('./db')
const { Employee, Car, Sale } = require('./models')

const dataSeed = async()=> {
    try{
        await sequelize.sync({force:true})
        const [larry, curly, moe, lucy, ethyl] = await Promise.all([
            Employee.create({name: 'larry'}),
            Employee.create({name: 'curly'}),
            Employee.create({name: 'moe'}),
            Employee.create({name: 'lucy'}),
            Employee.create({name: 'ethyl'}),
        ]);
        const [camry, corolla, rav4, avalon, sienna] = await Promise.all([
            Car.create({name: 'camry', cost: 26000}),
            Car.create({name: 'corolla', cost: 20000}),
            Car.create({name: 'rav4', cost: 26000}),
            Car.create({name: 'avalon', cost: 36000}),
            Car.create({name: 'sienna', cost: 34000})
        ]);
        await Promise.all([
            Sale.create({carId: camry.id, EmployeeId: lucy.id}),
            Sale.create({carId: camry.id, EmployeeId: lucy.id}),
            Sale.create({carId: corolla.id, EmployeeId: lucy.id}),
            Sale.create({carId: camry.id, EmployeeId: moe.id}),
            Sale.create({carId: corolla.id, EmployeeId: curly.id}),
            Sale.create({carId: camry.id, EmployeeId: curly.id}),
            Sale.create({carId: avalon.id, EmployeeId: larry.id}),
            Sale.create({carId: rav4.id, EmployeeId: larry.id}),
            Sale.create({carId: rav4.id, EmployeeId: larry.id}),
            Sale.create({carId: sienna.id, EmployeeId: larry.id}),
            Sale.create({carId: camry.id, EmployeeId: ethyl.id}),
        ]);
    }
    catch(ex){
        console.log(ex)
    }
}

module.exports = dataSeed