var fs = require('fs');
var path = require('path');

fs.readdir(path.resolve(__dirname, '..', 'src', 'pages'), function (err, files) {
	var a = ['export default ['];
	files.forEach(function(file) {
		if ( !file.match(/\.js$/) || file === 'index.js' ) return;
		file.substr(0, file.length-3);
		a.push("'" + file.substr(0, file.length-3) + "',");
	});
	a.push('];');
	fs.writeFile(path.resolve(__dirname, '..', 'src', 'pages', 'index.js'), a.join("\n"), function() {
		console.log('done.');
	});
});