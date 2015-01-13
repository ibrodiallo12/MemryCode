$(function(){
	//INTRODUCTION WORD
	var w = "Memorize keyboard and css propriety and make a page beautiful!";
	//The separator in the ARRAY
	var s = "¢";
	// code in the ARRAY
	var c = "";
	// know not affecte in same ARRAY to code
	var k = "";
	
	// N 1	
	c = "p {\n\tcolor: red;\n\ttext-align: center;\n}";
	k = "CSS Example. In the example all <p> elements will be center-aligned, with a red text color";
	// N 2
	c = c + s + "p {\n\tcolor: red;\n\t/* This is a single-line comment */\n\ttext-align: center;\n}";
	k = k + s + "CSS Comments. Comments are used to explain your code, and may help you when you edit the source code at a later date. Comments are ignored by browsers.";
	// N 3
	c = c + s + "#para1 {\n\ttext-align: center;\n\tcolor: red;\n}";
	k = k + s + "The id Selector. The id selector uses the id attribute of an HTML element to select a specific element. An id should be unique within a page, so the id selector is used if you want to select a single, unique element. To select an element with a specific id, write a hash character, followed by the id of the element.";
	// N 4
	c = c + s + ".center {\n\ttext-align: center;\n\tcolor: red;\n}";
	k = k + s + "The class Selector. The class selector selects elements with a specific class attribute. To select elements with a specific class, write a period character, followed by the name of the class. In the example. all HTML elements with class=\"center\" will be center-aligned";
	// N 5
	c = c + s + "";
	k = k + s + "";
	// N 6
	c = c + s + "";
	k = k + s + "";
	// N 7
	c = c + s + "";
	k = k + s + "";
	// N 8
	c = c + s + "";
	k = k + s + "";
	// N 9
	c = c + s + "";
	k = k + s + "";
	// N 10
	c = c + s + "";
	k = k + s + "";
	
	
	//PRINT IN THE 
	$("#introWord").text(w);
	$("#lang").text(c);
	$("#know").text(k);
	$("#separator").text(s);
});
