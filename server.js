var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');
var http = require('http');
var querystring='SELECT * from gumball';

		var connection = mysql.createConnection({
  host     : 'http://ec2-54-200-183-187.us-west-2.compute.amazonaws.com',
  user     : 'root',
  password : 'admin',
  database : 'cmpe281'
});

//app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/', function (req, res) {

	request.post({
		url: 'http://ec2-54-200-183-187.us-west-2.compute.amazonaws.com',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			"output": "rows"
		})
		}, connection.query('SELECT * from gumball', function(err, rows, fields)) {
  if (!err)
    res.send(rows);
  else
    console.log('Error while performing Query.');
});


app.listen(process.env.PORT);
console.log(process.env.PORT);



connection.query('SELECT * from < table name >', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end();