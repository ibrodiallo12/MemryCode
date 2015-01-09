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
	c = "p{background: blue;}";
	k = "Make all paragraphs in the page to background blue in css";
	// N 2
	c = c + s + "div{display: inline-block;}";
	k = k + s + "Make all divs to inline not a block in css";
	
	
	//PRINT IN THE 
	$("#introWord").text(w);
	$("#lang").text(c);
	$("#know").text(k);
	$("#separator").text(s);
});
