define(function(require, exports, module) {
	var blah = 3;
	var bleh = 4;
	var bigArray = [];
	for(var i = 0; i < 10000; i++) {
		bigArray += blah + bleh * i;
	}
});
