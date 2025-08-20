import express from 'express';

const app = express();

app.get('/', function (req, res) {
	res.status(200).send('Hello World!');
});

app.listen(3000, function () {
	console.log('http://localhost:3000');
});
