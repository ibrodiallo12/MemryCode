$(function(){
	//INTRDUCTION WORD
	var w = "Memorize your keyboard, php code and be fast to make a dynamic website";
	//The separator in the ARRAY
	var s = "¢";
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
	// N 3
	c = c + s + "<?php\n// PHP code goes here\n?>";
	k = k + s + "Basic PHP Syntax. A PHP script can be placed anywhere in the document. A PHP script starts with <?php and ends with ?>:";
	// N 4
	c = c + s + "<!DOCTYPE html>\n<html>\n<body>\n<h1>My first PHP page</h1>\n\n<?php\n\techo \"Hello World!\";\n?>\n\n</body>\n</html>";
	k = k + s + "A PHP file normally contains HTML tags, and some PHP scripting code. Below, we have an example of a simple PHP file, with a PHP script that uses a built-in PHP function \"echo\" to output the text \"Hello World!\" on a web page";
	// N 5
	c = c + s + "<?php\n// This is a single-line comment\n\n# This is also a single-line comment\n\n/*\nThis is a multiple-lines comment block\nthat spans over multiple\nlines\n*/\n\n// You can also use comments to leave out parts of a code line\n$x = 5 /* + 15 */ + 5;\necho $x;\n?>";
	k = k + s + "Comments in PHP. A comment in PHP code is a line that is not read/executed as part of the program. Its only purpose is to be read by someone who is looking at the code.";
	// N 6
	c = c + s + "<?php\n\tECHO \"Hello World!<br>\";\necho \"Hello World!<br>\";\nEcHo \"Hello World!<br>\";\n?>";
	k = k + s + "PHP Case Sensitivity. In PHP, all keywords (e.g. if, else, while, echo, etc.), classes, functions, and user-defined functions are NOT case-sensitive. In the example below, all three echo statements below are legal (and equal)";
	// N 7
	c = c + s + "<?php\n\t$color = \"red\";\n\techo \"My car is \" . $color . \"<br>\";\n\techo \"My house is \" . $COLOR . \"<br>\";\n\techo \"My boat is \" . $coLOR . \"<br>\";\n?>";
	k = k + s + "In the example below, only the first statement will display the value of the $color variable (this is because $color, $COLOR, and $coLOR are treated as three different variables)";
	// N 8
	c = c + s + "<?php\n\t$txt = \"Hello world!\";\n\t$x = 5;\n\t$y = 10.5;\n?>";
	k = k + s + "Creating (Declaring) PHP Variables. In PHP, a variable starts with the $ sign, followed by the name of the variable:";
	// N 9
	c = c + s + "<?php\n\t$txt = \"PHP\";\n\techo \"I love $txt!\";\n?>";
	k = k + s + "Output Variables. The PHP echo statement is often used to output data to the screen. The example will show how to output text and a variable";
	// N 10
	c = c + s + "<?php\n\t$txt = \"PHP\";\n\techo \"I love \" . $txt . \"!\";\n?>";
	k = k + s + "Output Variables. The PHP echo statement is often used to output data to the screen. The example will show how to output text and a variable";
	// N 11
	c = c + s + "<?php\n\t$x = 5;\n\t$y = 4;\n\techo $x + $y;\n?>";
	k = k + s + "The example will output the sum of two variables";
	// N 12
	c = c + s + "<?php\n$x = 5; // global scope\nfunction myTest() {\n\t// using x inside this function will generate an error\n\techo \"<p>Variable x inside function is: $x</p>\";\n}\nmyTest();\necho \"<p>Variable x outside function is: $x</p>\";\n?>";
	k = k + s + "Global and Local Scope. A variable declared outside a function has a GLOBAL SCOPE and can only be accessed outside a function";
	// N 13
	c = c + s + "<?php\nfunction myTest() {\n\t$x = 5; // local scope\n\techo \"<p>Variable x inside function is: $x</p>\";\n}\nmyTest();\n\n// using x outside the function will generate an error\necho \"<p>Variable x outside function is: $x</p>\";\n?>";
	k = k + s + "A variable declared within a function has a LOCAL SCOPE and can only be accessed within that function";
	// N 14
	c = c + s + "<?php\n$x = 5;\n$y = 10;\n\nfunction myTest() {\n\tglobal $x, $y;\n\t$y = $x + $y;\n}\nmyTest();\necho $y; // outputs 15\n?>";
	k = k + s + "PHP The global Keyword. The global keyword is used to access a global variable from within a function. To do this, use the global keyword before the variables (inside the function)";
	// N 15
	c = c + s + "<?php\n$x = 5;\n$y = 10;\nfunction myTest() {\n\t$GLOBALS['y'] = $GLOBALS['x'] + $GLOBALS['y'];\n}\nmyTest();\necho $y; // outputs 15\n?>";
	k = k + s + "PHP also stores all global variables in an array called $GLOBALS[index]. The index holds the name of the variable. This array is also accessible from within functions and can be used to update global variables directly.";
	// N 16
	c = c + s + "<?php\nfunction myTest() {\n\tstatic $x = 0;\n\techo $x;\n\t$x++;\n}\n\nmyTest();\nmyTest();\nmyTest();\n?>";
	k = k + s + "PHP The static Keyword. Normally, when a function is completed/executed, all of its variables are deleted. However, sometimes we want a local variable NOT to be deleted. We need it for a further job.";
	// N 17
	c = c + s + "";
	k = k + s + "";
	// N 18
	c = c + s + "";
	k = k + s + "";
	// N 19
	c = c + s + "";
	k = k + s + "";
	// N 20
	c = c + s + "";
	k = k + s + "";
	
	
	
	
	//PRINT IN THE 
	$("#introWord").text(w);
	$("#lang").text(c);
	$("#know").text(k);
	$("#separator").text(s);
	$("#choiceLang").text("PHP");
});
