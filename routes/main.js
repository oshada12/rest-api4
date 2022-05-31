__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/api', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/api/game', (req, res) => {
    res.sendFile(__path + '/views/game.html')
})

router.use(function (req, res) {
res.status(404)
.sendFile(__path + '/views/404.html')
});

module.exports = router
