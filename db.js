const Sequelize = require('sequelize');
const CustModel = require('./models/customer.js');

const sequelize = new Sequelize('node_customer', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

const Cust = CustModel(sequelize, Sequelize);
sequelize.sync({ force: false}).then(() =>{
    console.log('Tablas sincronizadas')
}) 

module.exports = {Cust}