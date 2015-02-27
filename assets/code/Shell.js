$(function(){
	// Introduction word
	var w = "Memorize line-command, your keyboard being good in linux";
	//The separator in the ARRAY
	var s = "¢";
	// code in the ARRAY
	var c;
	// know not affecte in same ARRAY to code
	var k;
	// N 1
	c = c + s + "ls";
	k = k + s + "Listining in a Directory";
	// N 2
	c = c + s + "cd";
	k = k + s + "Change directory";
	// N 3
	c = c + s + "mv";
	k = k + s + "Moving file or Directory";
	
	
	
	
	//PRINT IN THE 
	$("#introWord").text(w);
	$("#lang").text(c);
	$("#know").text(k);
	$("#separator").text(s);
	$("#choiceLang").text("Linux");
});
