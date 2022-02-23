const Sequelize = require('sequelize');
const sequelize = require('./db.js')

const Employee = sequelize.define('Employee', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

const Car = sequelize.define('car', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    cost: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

const Sale = sequelize.define('sale', {})

Sale.belongsTo(Employee);   
Sale.belongsTo(Car);
Employee.hasMany(Sale);
Car.hasMany(Sale);

module.exports= {
    Employee,
    Car,
    Sale
}