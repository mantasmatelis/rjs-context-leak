var rjs = require('requirejs')

for(var i = 0; i >= 0; i++) {
	rjs.config({context: i})("testmodule")
}
