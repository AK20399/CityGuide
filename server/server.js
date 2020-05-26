const express = require('express');

const app = express();

const port = process.env.port || 5000;

// routes
const test = require('./routes/test');

app.use('/api', test);

app.listen(port, (err) => {
	if (err) console.log(err);
	console.log(`Server running on : ${port}`);
});
