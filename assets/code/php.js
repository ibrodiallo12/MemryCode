$(function(){
	//The separator in the ARRAY
	var s = ",";
	// code in the ARRAY
	var c = "";
	// know not affecte in same ARRAY to code
	var k = "";
	
	// N 1	
	c = "<?php echo \"Hello world !\"; ?>";
	k = "A simple hello world in php";
	// N 2
	c = c + s + "<?php $my_variable = 5; ?>";
	k = k + s + "Create a simple variable and sign it value 5 in php";
	
	
	//PRINT IN THE 
	$("#lang").text(c);
	$("#know").text(k);
	$("#separator").text(s);
});
