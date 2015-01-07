$(function(){
	//The separator in the ARRAY
	var s = ",";
	// code in the ARRAY
	var c = "";
	// know not affecte in same ARRAY to code
	var k = "";
	
	// N 1	
	c = "<script> alert(\"Hello world !\");</script>";
	k = "A simple hello world in javascript";
	// N 2
	c = c + s + "function(i){alert(i);}";
	k = k + s + "simple function in javascript";
	
	
	//PRINT IN THE 
	$("#lang").text(c);
	$("#know").text(k);
	$("#separator").text(s);
});
