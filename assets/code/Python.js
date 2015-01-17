$(function(){
	//INTRODUCTION WORD
	var w = "Memorize Python language quickly and coding fast with your keyboard";
	//The separator in the ARRAY
	var s = "¢";
	// code in the ARRAY
	var c;
	// know not affecte in same ARRAY to code
	var k;
	
	// N 1	
	c = "print \"Welcome to the language of Python !\"";
	k = "Print a simple welcome in python";
	// N 2
	c = c + s + "my_variable = 5";
	k = k + s + "create a variable and sign value 5";
	
	
	//PRINT IN THE 
	$("#introWord").text(w);
	$("#lang").text(c);
	$("#know").text(k);
	$("#separator").text(s);
});
