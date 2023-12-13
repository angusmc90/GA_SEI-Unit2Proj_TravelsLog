const router = require('express').Router();
const passport = require('passport');
const excursionsCntrl = require('../controllers/excursions')

// when the path below is called, execute the corresponding method functions defined in the controller
router.get('/new', excursionsCntrl.new)
router.post('/', excursionsCntrl.create)

module.exports = router;