const express = require('express');
const router = express.Router();

const data = require('../../Database/Data.json');

router.get('/', (req, res) => {
	res.send('home route');
});

router.get('/common', (req, res) => {
	res.status(200).json(data.hospital);
});

module.exports = router;
