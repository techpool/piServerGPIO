var express = require('express');
var router = express.Router();
var gpio = require('rpi-gpio');

gpio.setup(3, gpio.DIR_OUT, write);

function write(valueToWrite, callback) {
    gpio.write(3, valueToWrite, function(err) {
        if (err) throw err;
        console.log('Written to pin');
        callback(null)
    });
}

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/ON', function(req, res, next) {
    write(true, function() {
        res.send('respond with a resource');
    });
});

router.post('/OFF', function(req, res, next) {
    write(false, function() {
        res.send('respond with a resource');
    });
});

module.exports = router;
