$(function(){
	// Introduction word
	var w = "Memorize your keyboard and JavaScript code now and coding fast!!";
	//The separator in the ARRAY
	var s = "¢";
	// code in the ARRAY
	var c;
	// know not affecte in same ARRAY to code
	var k;
	
	// N 1	
	c = "<script> alert(\"Hello world !\");</script>";
	k = "A simple hello world in javascript";
	// N 2
	c = c + s + "<script>\n\tdocument.getElementById(\"demo\").innerHTML = \"My JavaScript\";\n</script>";
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
	c = c + s + "/*\nThe code below will change\nthe heading with id = \"myH\"\nand the paragraph with id = \"myP\"\nin my web page:\n*/\ndocument.getElementById(\"myH\").innerHTML = \"My First Page\";\ndocument.getElementById(\"myP\").innerHTML = \"My paragraph.\";";
	k = k + s + "Multi-line Comments. Multi-line comments start with /* and end with */. Any text between /* and */ will be ignored by JavaScript. This example uses a multi-line comment (a comment block) to explain the code:";
	// N 20
	c = c + s + "var carName;";
	k = k + s + "Declaring (Creating) JavaScript Variables. Creating a variable in JavaScript is called \"declaring\" a variable. You declare a JavaScript variable with the var keyword:";
	// N 21
	c = c + s + "var person = \"John Doe\", carName = \"Volvo\", price = 200;";
	k = k + s + "One Statement, Many Variables. You can declare many variables in one statement. Start the statement with var and separate the variables by comma";
	// N 22
	c = c + s + "var person = \"John Doe\", carName = \"Volvo\", price = 200;";
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
	c = c + s + "x = 5 + 5;\ny = \"5\" + 5;\nz = \"Hello\" + 5;";
	k = k + s + "Adding Strings and Numbers. Adding two numbers, will return the sum, but adding a number and a string will return a string";
	// N 43
	c = c + s + "var length = 16; // Number\nvar lastName = \"Johnson\"; // String\nvar cars = [\"Saab\", \"Volvo\", \"BMW\"]; // Array\nvar x = {firstName:\"John\", lastName:\"Doe\"}; // Object";
	k = k + s + "JavaScript Data Types. JavaScript variables can hold many data types: numbers, strings, arrays, objects and more";
	// N 44
	c = c + s + "var x; // Now x is undefined\nvar x = 5; // Now x is a Number\nvar x = \"John\"; // Now x is a String";
	k = k + s + "JavaScript Has Dynamic Types. JavaScript has dynamic types. This means that the same variable can be used as different types";
	// N 45
	c = c + s + "var x1 = 34.00; // Written with decimals\nvar x2 = 34; // Written without decimals";
	k = k + s + "JavaScript Numbers. JavaScript has only one type of numbers. Numbers can be written with, or without decimals";
	// N 46
	c = c + s + "var x = true;\nvar y = false;";
	k = k + s + "JavaScript Booleans. Booleans can only have two values: true or false.";
	// N 47
	c = c + s + "var cars = [\"Saab\", \"Volvo\", \"BMW\"];";
	k = k + s + "JavaScript Arrays. JavaScript arrays are written with square brackets. Array items are separated by commas. The following code declares (creates) an array called cars, containing three items (car names)";
	// N 48
	c = c + s + "var person = {firstName:\"John\", lastName:\"Doe\", age:50, eyeColor:\"blue\"};";
	k = k + s + "JavaScript Objects. JavaScript objects are written with curly braces. Object properties are written as name:value pairs, separated by commas.";
	// N 49
	c = c + s + "typeof \"John\" // Returns string\ntypeof 3.14 // Returns number\ntypeof false // Returns boolean\ntypeof [1,2,3,4] // Returns object\ntypeof {name:'John', age:34} // Returns object";
	k = k + s + "The typeof Operator. You can use the JavaScript typeof operator to find the type of a JavaScript variable";
	// N 50
	c = c + s + "var person; // The value is undefined, the typeof is undefined";
	k = k + s + "Undefined. In JavaScript, a variable without a value, has the value undefined. The typeof is also undefined.";
	// N 51
	c = c + s + "var car = \"\"; // The value is \"\", the typeof is string";
	k = k + s + "Empty Values. An empty value has nothing to do with undefined. An empty string variable has both a value and a type.";
	// N 52
	c = c + s + "var answer = \"It's alright\"; //Single quote in double quotes\nvar answer = \"He is called 'Johnny'\"; //Single quotes in double quotes\nvar answer = 'He is called \"Johnny\"'; //Double quotes in single quotes";
	k = k + s + "JavaScript Strings. A string (or a text string) is a series of characters like \"John Doe\".Strings are written with quotes. You can use single or double quotes. You can use quotes inside a string, as long as they don't match the quotes surrounding the string";
	// N 53
	c = c + s + "var carName = \"Volvo XC60\"; // Using double quotes\nvar carName = 'Volvo XC60'; // Using single quotes";
	k = k + s + "JavaScript Strings. A string (or a text string) is a series of characters like \"John Doe\". Strings are written with quotes. You can use single or double quotes:";
	// N 54
	c = c + s + "functionName(parameter1, parameter2, parameter3){\n\t//code to be executed\n}";
	k = k + s + "JavaScript Function Syntax. A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses (). Function names can contain letters, digits, underscores, and dollar signs (same rules as variables)..The parentheses may include parameter names separated by commas: (parameter1, parameter2, ...). The code to be executed, by the function, is placed inside curly brackets: {}";
	// N 55
	c = c + s + "var x = myFunction(4, 3); // return value will end up in x\n\nfunction myFunction(a, b){\n\treturn a * b; // Function returns the product of a and b\n}";
	k = k + s + "Function Return. When JavaScript reaches a return statement, the function will stop executing. If the function was invoked from a statement, JavaScript will \"return\" to execute the code after the invoking statement. Functions often compute a return value. The return value is \"returned\" back to the \"caller\"";
	// N 56
	c = c + s + "// Convert Fahrenheit to Celsius:\nfunction toCelsius(fahrenheit){\n\treturn (5/9) * (fahrenheit-32);\n}\ndocument.getElementById(\"demo\").innerHTML = toCelsius(32);";
	k = k + s + "Why Functions? You can reuse code: Define the code once, and use it many times.You can use the same code many times with different arguments, to produce different results.";
	// N 57
	c = c + s + "//Accessing a function without () will return the function definition:\nfunction toCelsius(fahrenheit){\n\treturn (5/9) * (fahrenheit-32);\n}\ndocument.getElementById(\"demo\").innerHTML = toCelsius;";
	k = k + s + "The () Operator Invokes the Function. Using the example above, toCelsius refers to the function object, and toCelcius() refers to the function result.";
	// N 58
	c = c + s + "// Instead of:\ntemp = toCelsius(32);\ntext = \"The temperature is \" + temp + \" Centigrade\";\n// You can use:\ntext = \"The temperature is \" + toCelsius(32) + \" Centigrade\";";
	k = k + s + "Functions Used as Variables. In JavaScript, functions can be used as variables:";
	// N 59
	c = c + s + "var person = {firstName:\"John\", lastName:\"Doe\", age:50, eye:\"blue\"};";
	k = k + s + "Object Definition. You define (and create) a JavaScript object with an object literal";
	// N 60
	c = c + s + "var person = {\n\tfirstName:\"John\",\n\tlastName:\"Doe\",\n\tage:50,\n\teyeColor:\"blue\"\n};";
	k = k + s + "Object Definition. You define (and create) a JavaScript object with an object literal. Spaces and line breaks are not important. An object definition can span multiple lines";
	// N 61
	c = c + s + "objectName.propertyName\n// OR\nobjectName[propertyName];";
	k = k + s + "Accessing Object Properties. You can access object properties in two ways";
	// N 62
	c = c + s + "person.lastName;\n// OR\nperson[\"lastName\"];";
	k = k + s + "Accessing Object Properties. You can access object properties in two ways";    
	// N 63
	c = c + s + "objectName.methodName();\n//OR with variable\nname = person.fullName();";
	k = k + s + "Accessing Object Methods. You access an object method with the following syntax";  
	// N 64
	c = c + s + "name = person.fullName;";
	k = k + s + "Accessing Object Methods. If you access the fullName property, without (), it will return the function definition";
	// N 65
	c = c + s + "var x = new String(); // Declares x as a String object\nvar y = new Number(); // Declares y as a Number object\nvar z = new Boolean(); // Declares z as a Boolean object";
	k = k + s + "Do Not Declare Strings, Numbers, and Booleans as Objects! When a JavaScript variable is declared with the keyword \"new\", the variable is created as an object";
	// N 66
	c = c + s + "// code here can not use carName\n\nfunction myFunction(){\n\tvar carName = \"Volvo\";\n// code here can use carName\n}";
	k = k + s + "Local JavaScript Variables. Variables declared within a JavaScript function, become LOCAL to the function. Local variables have local scope: They can only be accessed within the function.";
	// N 67
	c = c + s + "var carName = \"Volvo\";\n// code here can use carName\n\nfunction myFunction(){\n// code here can use carName\n}";
	k = k + s + "Global JavaScript Variables. A variable declared outside a function, becomes GLOBAL. A global variable has global scope: All scripts and functions on a web page can access it.";
	// N 68
	c = c + s + "// code here can use carName\nfunction myFunction(){\n\tcarName = \"Volvo\";\n// code here can use carName\n}";
	k = k + s + "Automatically Global. If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable. This code example will declare carName as a global variable, even if it is executed inside a function.";
	// N 69
	c = c + s + "// code here can use window.carName\nfunction myFunction(){\n\tcarName = \"Volvo\";\n}";
	k = k + s + "Global Variables in HTML. With JavaScript, the global scope is the complete JavaScript environment. In HTML, the global scope is the window object: All global variables belong to the window object.";
	// N 70
	c = c + s + "<button onclick='getElementById(\"demo\").innerHTML=Date()'>The time is?</button>";
	k = k + s + "HTML Events. An HTML event can be something the browser does, or something a user does. Here are some examples of HTML events. An HTML web page has finished loading. An HTML input field was changed. An HTML button was clicked";
	
	
	//PRINT IN THE 
	$("#introWord").text(w);
	$("#lang").text(c);
	$("#know").text(k);
	$("#separator").text(s);
});
