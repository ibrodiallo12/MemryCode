$(function(){
	//The separator in the ARRAY
	var s = "¢";
	// code in the ARRAY
	var c = "";
	// know not affecte in same ARRAY to code
	var k = "";
	
	// N 1	
	c = "<script> alert(\"Hello world !\");</script>";
	k = "A simple hello world in javascript";
	// N 2
	c = c + s + "<script>\n\tdocument.getElementById(\"demo\").innerHTML = \"My First JavaScript\";\n</script>";
	k = k + s + "The <script> Tag In HTML, JavaScript code must be inserted between <script> and </script> tags.";
	// N 3
	c = c + s + "<script src=\"myScript.js\"></script>";
	k = k + s + "External JavaScript Scripts can also be placed in external files. External scripts are practical when the same code is used in many different web pages. JavaScript files have the file extension .js. To use an external script, put the name of the script file in the src (source) attribute of the <script> tag:";
	// N 4
	c = c + s + "<script>\n\twindow.alert(5 + 6);\n</script>";
	k = k + s + "Using window.alert() You can use an alert box to display data:.";
	// N 5
	c = c + s + "<script>\n\tdocument.write(5 + 6);\n</script>";
	k = k + s + "Using document.write(). For testing purposes, it is convenient to use document.write()";
	// N 6
	c = c + s + "<p id=\"demo\"></p>\n\n<script>\n\tdocument.getElementById(\"demo\").innerHTML = 5 + 6;\n</script>";
	k = k + s + "Using innerHTML. To access an HTML element, JavaScript can use the document.getElementById(id) method. The id attribute defines the HTML element. The innerHTML property defines the HTML content";
	// N 7
	c = c + s + "<h1>My First Web Page</h1>\n<p>My first paragraph.</p>\n\n<script>\n\tconsole.log(5 + 6);\n</script>";
	k = k + s + "Using console.log(). In your browser, you can use the console.log() method to display data.Activate the browser console with F12, and select \"Console\" in the menu.";
	// N 8
	c = c + s + "var x = 5;\nvar y = 6;\nvar z = x + y;";
	k = k + s + "JavaScript Programs. A computer program is a list of \"instructions\" to be \"executed\" by the computer. In a programming language, these program instructions are called statements. JavaScript is a programming language. JavaScript statements are separated by semicolon:";
	// N 9
	c = c + s + "10.50\n1001";
	k = k + s + "JavaScript Literals. The most important rules for writing fixed values are: Numbers are written with or without decimals:";
	// N 10
	c = c + s + "\"John Doe\"\n\'John Doe\'";
	k = k + s + "Strings are text, written within double or single quotes";
	// N 11
	c = c + s + "5 + 6\n5 * 10";
	k = k + s + "Expressions can also represent fixed values";
	// N 12
	c = c + s + "var x;\nx = 6;";
	k = k + s + "JavaScript Variables. In a programming language, variables are used to store data values. JavaScript uses the var keyword to define variables. An equal sign is used to assign values to variables. In this example, x is defined as a variable. Then, x is assigned (given) the value 6:";
	// N 13
	c = c + s + "var x = 5;\nvar y = 6;";
	k = k + s + "JavaScript Operators. JavaScript uses an assignment operator ( = ) to assign values to variables";
	// N 14
	c = c + s + "(5 + 6) * 10";
	k = k + s + "JavaScript uses arithmetic operators ( + - *  / ) to compute values";
	// N 15
	c = c + s + "var x = 5 + 6;\nvar y = x * 10;";
	k = k + s + "JavaScript Keywords. JavaScript keywords are used to identify actions to be performed. The var keyword tells the browser to create a new variable:";
	// N 16
	c = c + s + "var x = 5; // I will be executed\n// var x = 6; I will NOT be executed";
	k = k + s + "JavaScript Comments. Not all JavaScript statements are \"executed\". Code after double slashes // or between /* and */ is treated as a comment. Comments are ignored, and will not be executed:";
	// N 17
	c = c + s + "lastName = \"Doe\";\nlastname = \"Peterson\";";
	k = k + s + "JavaScript is Case Sensitive. All JavaScript identifiers are case sensitive. The variables lastName and lastname, are two different variables.";
	// N 18
	c = c + s + "var x = 5;\nvar y = 6;\nvar z = x + y;\ndocument.getElementById(\"demo\").innerHTML = z;";
	k = k + s + "JavaScript Programs. Most JavaScript programs contain many JavaScript statements. The statements are executed, one by one, in the same order as they are written. In this example, x, y, and z is given values, and finally z is displayed:";
	// N 19
	c = c + s + "/*\nThe code below will change\nthe heading with id = \"myH\"\nand the paragraph with id = \"myP\"\nin my web page:\n*/\ndocument.getElementById(\"myH\").innerHTML = \"My First Page\";\ndocument.getElementById(\"myP\").innerHTML = \"My first paragraph.\";";
	k = k + s + "Multi-line Comments. Multi-line comments start with /* and end with */. Any text between /* and */ will be ignored by JavaScript. This example uses a multi-line comment (a comment block) to explain the code:";
	// N 20
	c = c + s + "var carName;";
	k = k + s + "Declaring (Creating) JavaScript Variables. Creating a variable in JavaScript is called \"declaring\" a variable. You declare a JavaScript variable with the var keyword:";
	// N 21
	c = c + s + "var person = \"John Doe\", carName = \"Volvo\", price = 200;";
	k = k + s + "One Statement, Many Variables. You can declare many variables in one statement. Start the statement with var and separate the variables by comma";
	// N 22
	c = c + s + "var person = \"John Doe\",carName = \"Volvo\",price = 200;";
	k = k + s + "Many Variables. A declaration can span multiple lines";
	// N 23
	c = c + s + "var carName;";
	k = k + s + "Value = undefined. In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input.";
	// N 24
	c = c + s + "var carName = \"Volvo\";\nvar carName;";
	k = k + s + "Re-Declaring JavaScript Variables If you re-declare a JavaScript variable, it will not lose its value. The variable carName will still have the value \"Volvo\" after the execution of these statements";
	// N 25
	c = c + s + "var x = 5 + 2 + 3;";
	k = k + s + "JavaScript Arithmetic. As with algebra, you can do arithmetic with JavaScript variables, using operators like = and +";
	// N 26
	c = c + s + "var x = \"John\" + \" \" + \"Doe\";";
	k = k + s + "JavaScript Arithmetic. You can also add strings, but strings will be concatenated (added end-to-end)";
	// N 27
	c = c + s + "var x = \"5\" + 2 + 3;";
	k = k + s + "If you add a number to a string, the number will be treated as string, and concatenated.";
	// N 28
	c = c + s + "var x = 5;\nvar y = 2;\nvar z = x + y;";
	k = k + s + "JavaScript Arithmetic Operators. The addition operator (+) adds a value";
	// N 29
	c = c + s + "var x = 5;\nvar y = 2;\nvar z = x - y;";
	k = k + s + "JavaScript Arithmetic Operators. The subtraction operator (-) subtracts a value.";
	// N 30
	c = c + s + "var x = 5;\nvar y = 2;\nvar z = x * y;";
	k = k + s + "JavaScript Arithmetic Operators. The multiplication operator (*) multiplies a value.";
	// N 31
	c = c + s + "var x = 5;\nvar y = 2;\nvar z = x / y;";
	k = k + s + "JavaScript Arithmetic Operators. The division operator (/) divides a value.";
	// N 32
	c = c + s + "var x = 5;\nvar y = 2;\nvar z = x % y;";
	k = k + s + "JavaScript Arithmetic Operators. The modular operator (%) returns division remainder.";
	// N 33
	c = c + s + "var x = 5;\nx++;\nvar z = x;";
	k = k + s + "JavaScript Arithmetic Operators. The increment operator (++) increments a value.";
	// N 34
	c = c + s + "var x = 5;\nx--;\nvar z = x;";
	k = k + s + "JavaScript Arithmetic Operators. The decrement operator (--) decrements a value.";
	// N 35
	c = c + s + "var x = 10;\nx += 5;";
	k = k + s + "JavaScript Arithmetic Operators. The += assignment operator adds a value to a variable.";
	// N 36
	c = c + s + "var x = 10;\nx -= 5;";
	k = k + s + "JavaScript Arithmetic Operators. The -= assignment operator subtracts a value from a variable.";
	// N 37
	c = c + s + "var x = 10;\nx *= 5;";
	k = k + s + "JavaScript Arithmetic Operators. The *= assignment operator multiplies a variable.";
	// N 38
	c = c + s + "var x = 10;\nx /= 5;";
	k = k + s + "JavaScript Arithmetic Operators. The /= assignment divides a variable.";
	// N 39
	c = c + s + "var x = 10;\nx %= 5;";
	k = k + s + "JavaScript Arithmetic Operators. The %= assignment operator assigns a remainder to a variable.";
	// N 40
	c = c + s + "txt1 = \"What a very\";\ntxt2 = \"nice day\";\ntxt3 = txt1 + \" \" + txt2;";
	k = k + s + "JavaScript Arithmetic Operators. Insert a space into the expression:";
	// N 41
	c = c + s + "txt1 = \"What a very\";\ntxt1 += \"nice day\";";
	k = k + s + "JavaScript Arithmetic Operators. The += operator can also be used to concatenate strings";
	// N 42
	c = c + s + "x = 5 + 5;\ny = \"5\" + 5;\nz= \"Hello\" + 5;";
	k = k + s + "Adding Strings and Numbers. Adding two numbers, will return the sum, but adding a number and a string will return a string:";
	
	//PRINT IN THE 
	$("#lang").text(c);
	$("#know").text(k);
	$("#separator").text(s);
});
