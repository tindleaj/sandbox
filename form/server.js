var http = require('http');
var fs = require('fs');
var formidable = require('formidable');
var util = require('util');
var date = new Date()
var data;

var server = http.createServer(function (req, res) {
    if (req.method.toLowerCase() == 'get') {
    	displayForm(res);
    } else if (req.method.toLowerCase() == 'post') {
    	processForm(req, res);
    }
});

function displayForm(res) {
    fs.readFile('form.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}

function processForm(req, res) {
	var form = new formidable.IncomingForm();

	form.parse(req, function(err, fields) {
		//Store data from the fields in a flatfile (JSON)
		data = {'fields' : fields, 'time' : getFormatedTime()};
		fs.appendFile('signin.json', JSON.stringify(data), function(err) {});
	});
}


// function to get a nicely formatted time to tell when visitors sign in 
function getFormatedTime() {

	var weekday = new Array(7);
	weekday[0]=  "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";

	var minutes;

	if (date.getMinutes() < 10) {
		minutes = '0' + date.getMinutes();
	} else {
		minutes = date.getMinutes();
	}

	var time = weekday[date.getDay()] 
		+ ", "
		+ date.getMonth()
		+ "/"
		+ date.getDate()
		+ "/"
		+ date.getFullYear()
		+ " "
		+ date.getHours()
		+ ":"
		+ minutes;

	return time;
}

//function will check if a directory exists, and create it if it doesn't
function checkDirectory(directory, callback) {  
	fs.stat(directory, function(err, stats) {
		//Check if error defined and the error code is "not exists"
		if (err && err.errno === 34) {
			//Create the directory, call the callback.
			fs.mkdir(directory, callback);
		} else {
			//just in case there was a different error:
			callback(err)
		}
	});
}
 
server.listen(1185);
console.log("server listening on 1185");