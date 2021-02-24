const router = require('express').Router();

const apiCustRouter = require ('./api/customer');
router.use('/customer', apiCustRouter);
module.exports = router;