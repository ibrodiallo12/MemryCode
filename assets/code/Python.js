$(function(){
	//INTRODUCTION WORD
	var w = "Memorize Python language quickly and coding fast with your keyboard";
	//The separator in the ARRAY
	var s = "¢";
	// code in the ARRAY
	var c = "";
	// know not affecte in same ARRAY to code
	var k = "";
	
	// N 1	
	c = "print \"Welcome to the language of Python !\"";
	k = "Print a simple welcome in python";
	// N 2
	c = c + s + "my_variable = 5";
	k = k + s + "create a variable and sign value 5";
	// N 3
	c = c + s + "#!/usr/bin/python\n\n# First comment\nprint \"Hello, Python!\";  # second comment";
	k = k + s + "Comments in Python: A hash sign (#) that is not inside a string literal begins a comment. All characters after the # and up to the physical line end are part of the comment and the Python interpreter ignores them.";
	// N 4
	c = c + s + "myint = 7";
	k = k + s + "Numbers. Python supports two types of numbers - integers and floating point numbers. (It also supports complex numbers, which will not be explained in this tutorial).";
	// N 5
	c = c + s + "myfloat = 7.0\nmyfloat = float(7)";
	k = k + s + "Numbers. Python supports two types of numbers - integers and floating point numbers. (It also supports complex numbers, which will not be explained in this tutorial). To define a floating point number, you may use one of the tow notations:";
	// N 6
	c = c + s + "mystring = 'hello'\nmystring = \"hello\"";
	k = k + s + "Strings. Strings are defined either with a single quote or a double quotes.";
	// N 7
	c = c + s + "mystring = \"Don't worry about apostrophes\"";
	k = k + s + "Using double quotes makes it easy to include apostrophes (whereas these would terminate the string if using single quotes)";
	// N 8
	c = c + s + "one = 1\ntwo = 2\nthree = one + two\n\nhello = \"hello\"\nworld = \"world\"\nhelloworld = hello + \" \" + world";
	k = k + s + "Simple operators can be executed on numbers and strings";
	// N 9
	c = c + s + "a, b = 3, 4";
	k = k + s + "Assignments can be done on more than one variable \"simultaneously\" on the same line like this";
	// N 10
	c = c + s + "# This will not work!\nprint 1 + 2 + \"hello\"";
	k = k + s + "Mixing operators between numbers and strings is not supported";
	
	
	
	
	//PRINT IN THE 
	$("#introWord").text(w);
	$("#lang").text(c);
	$("#know").text(k);
	$("#separator").text(s);
	$("#choiceLang").text("Python programming language");
});
