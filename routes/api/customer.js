const router = require ('express').Router();

const {Cust} = require('../../db');

router.get('/', async (req, res) =>{
    const custom = await Cust.findAll();
    res.json(custom);
});

router.post('/', async (req, res) =>{
    const custom=await Cust.create(req.body);
    res.json(custom);
});

router.put('/:custId', async(req, res) => {
  await Cust.update(req.body, {
      where: {id: req.params.custId}
  });
  res.json({success: 'Modified'})  
});

router.delete('/:custId', async (req,res) =>{
    await Cust.destroy({
        where: {id: req.params.custId}
    });
    res.json({success: 'Eliminado'});
});

module.exports = router;