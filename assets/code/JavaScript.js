$(function(){
	// Introduction word
	var w = "Memorize your keyboard and JavaScript code now and coding fast!!";
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
	k = k + s + "The () Operator Invokes the Function. Using the example, toCelsius refers to the function object, and toCelcius() refers to the function result.";
	// N 58
	c = c + s + "// Instead of:\ntemp = toCelsius(32);\ntext = \"The temperature is \" + temp + \" Centigrade\";\n// You can use:\ntext = \"The temperature is \" + toCelsius(32) + \" Centigrade\";";
	k = k + s + "Functions Used as Variables. In JavaScript, functions can be used as variables:";
	// N 59
	c = c + s + "var person = {firstName:\"John\",lastName:\"Doe\",age:50,eye:\"blue\"};";
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
	c = c + s + "<button onclick='getElementById(\"demo\").innerHTML=Date()'>\nThe time is?\n</button>";
	k = k + s + "HTML Events. An HTML event can be something the browser does, or something a user does. Here are some examples of HTML events. An HTML web page has finished loading. An HTML input field was changed. An HTML button was clicked";
	// N 71
	c = c + s + "var txt = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";\nvar sln = txt.length;";
	k = k + s + "JavaScript. String Length. The length of a string is found in the built in property length";
	// N 72
	c = c + s + "var x = 'It\\'s alright';\nvar y = \"We are the so-called \\\"Vikings\\\" from the north.\";";
	k = k + s + "Special Characters. Because strings must be written within quotes, JavaScript will understand this string. Use the \ escape character.";
	// N 73
	c = c + s + "document.getElementById(\"demo\").innerHTML = \"Hello \\\
Dolly!\";";
	k = k + s + "Breaking Long Code Lines. For best readability, programmers often like to avoid code lines longer than 80 characters. You can also break up a code line within a text string with a single backslash.";
	// N 74
	c = c + s + "var x = \"John\";\nvar y = new String(\"John\");\n// type of x will return String\n// type of y will return Object";
	k = k + s + "Strings Can be Objects. Normally, JavaScript strings are primitive values, created from literals: var firstName = \"John\". But strings can also be defined as objects with the keyword new: var firstName = new String(\"John\")";
	// N 75
	c = c + s + "var x = \"John\";\nvar y = new String(\"John\");\n// (x == y) is true because x and y have equal values";
	k = k + s + "Strings Can be Objects. When using the == equality operator, equal strings looks equal";
	// N 76
	c = c + s + "var x = \"John\";\nvar y = new String(\"John\");\n// (x === y) is false because x and y have different types";
	k = k + s + "Strings Can be Objects. When using the === equality operator, equal strings are not equal";
	// N 77
	c = c + s + "var str = \"Please locate where 'locate' occurs!\";\nvar pos = str.indexOf(\"locate\");";
	k = k + s + "Finding a String in a String. The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string";
	// N 78
	c = c + s + "var str = \"Please locate where 'locate' occurs!\";\nvar pos = str.lastIndexOf(\"locate\");";
	k = k + s + "Finding a String in a String. The lastIndexOf() method returns the index of the last occurrence of a specified text in a string";
	// N 79
	c = c + s + "var str = \"Please locate where 'locate' occurs!\";var pos = str.search(\"locate\");";
	k = k + s + "Searching for a String in a String. The search() method searches a string for a specified value and returns the position of the match";
	// N 80
	c = c + s + "var str = \"Apple, Banana, Kiwi\";var res = str.slice(7,13);";
	k = k + s + "The slice() Method. slice() extracts a part of a string and returns the extracted part in a new string. The method takes 2 parameters: the starting index (position), and the ending index (position).";
	// N 81
	c = c + s + "var str = \"Apple, Banana, Kiwi\";\nvar res = str.slice(-12,-6);";
	k = k + s + "The slice() Method. If a parameter is negative, the position is counted from the end of the string. This example slices out a portion of a string from position -12 to position -6";
	// N 82
	c = c + s + "var res = str.slice(7);";
	k = k + s + "The slice() Method. If you omit the second parameter, the method will slice out the rest of the string:";
	// N 83
	c = c + s + "var res = str.slice(-12);";
	k = k + s + "The slice() Method. or, counting from the end";
	// N 84
	c = c + s + "var str = \"Apple, Banana, Kiwi\";\nvar res = str.substring(7,13);";
	k = k + s + "The substring() Method. substring() is similar to slice(). The difference is that substring() cannot accept negative indexes.";
	// N 85
	c = c + s + "var str = \"Apple, Banana, Kiwi\";\nvar res = str.substr(7,6);";
	k = k + s + "The substr() Method. substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.";
	// N 86
	c = c + s + "str = \"Please visit Microsoft!\";\nvar n = str.replace(\"Microsoft\",\"W3Schools\");";
	k = k + s + "Replacing String Content. The replace() method replaces a specified value with another value in a string";
	// N 87
	c = c + s + "var text1 = \"Hello World!\";//String\nvar text2 = text1.toUpperCase();//text2 is text1 converted to upper";
	k = k + s + "Converting to Upper and Lower Case. A string is converted to upper case with toUpperCase()";
	// N 88
	c = c + s + "var text1 = \"Hello World!\";//String\nvar text2 = text1.toLowerCase();//text2 is text1 converted to lower";
	k = k + s + "Converting to Upper and Lower Case. A string is converted to lower case with toLowerCase()";
	// N 89
	c = c + s + "var text1 = \"Hello\";\nvar text2 = \"World\";\ntext3 = text1.concat(\" \",text2);";
	k = k + s + "The concat() Method. concat() joins two or more strings";
	// N 90
	c = c + s + "var text = \"Hello\" + \" \" + \"World!\";\nvar text = \"Hello\".concat(\" \",\"World!\");";
	k = k + s + "The concat() Method. The concat() method can be used instead of the plus operator. These two lines do the same";
	// N 91
	c = c + s + "var str = \"HELLO WORLD\";\nstr.charAt(0);// returns H";
	k = k + s + "The charAt() Method. The charAt() method returns the character at a specified index (position) in a string";
	// N 92
	c = c + s + "var str = \"HELLO WORLD\";\nstr.charCodeAt(0);// returns 72";
	k = k + s + "The charCodeAt() Method. The charCodeAt() method returns the unicode of the character at a specified index in a string";
	// N 93
	c = c + s + "var str = \"HELLO WORLD\";\nstr[0];// returns H";
	k = k + s + "Accessing a String as an Array is Unsafe. You might have seen code like this, accessing a string as an array";
	// N 94
	c = c + s + "var txt = \"a,b,c,d,e\";// String\ntxt.split(\",\");// Split on commas\ntxt.split(\" \");// Split on spaces\ntxt.split(\"|\");// Split on pipe";
	k = k + s + "Converting a String to an Array. A string can be converted to an array with the split() method";
	// N 95
	c = c + s + "var txt = \"Hello\";// String\ntxt.split(\"\");// Split in characters";
	k = k + s + "Converting a String to an Array. A string can be converted to an array with the split() method. If the separator is omitted, the returned array will contain the whole string in index [0].";
	// N 96
	c = c + s + "var x = 34.00;// A number with decimals\nvar y = 34;// A number without decimals";
	k = k + s + "JavaScript Numbers. JavaScript numbers can be written with, or without decimals";
	// N 97
	c = c + s + "var x = 999999999999999;// x will be 999999999999999\nvar y = 9999999999999999;// y will be 10000000000000000";
	k = k + s + "Precision. Integers (numbers without a period or exponent notation) are considered accurate up to 15 digits.";
	// N 98
	c = c + s + "var x = 0.2 + 0.1;// x will be 0.30000000000000004";
	k = k + s + "Precision. Integers (numbers without a period or exponent notation) are considered accurate up to 15 digits. The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate";
	// N 99
	c = c + s + "var x = (0.2 * 10 + 0.1 * 10) / 10;// x will be 0.3";
	k = k + s + "Precision. Integers (numbers without a period or exponent notation) are considered accurate up to 15 digits. To solve the problem above, it helps to multiply and divide";
	// N 100
	c = c + s + "var x = 0xFF;// x will be 255";
	k = k + s + "Hexadecimal. JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.";
	// N 101
	c = c + s + "var myNumber = 128;\nmyNumber.toString(16);// returns 80\nmyNumber.toString(8);// returns 200\nmyNumber.toString(2);// returns 10000000";
	k = k + s + "Hexadecimal. JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x. By default, Javascript displays numbers as base 10 decimals. But you can use the toString() method to output numbers as base 16 (hex), base 8 (octal), or base 2 (binary).";
	// N 102
	c = c + s + "var myNumber = 2;\nwhile (myNumber != Infinity) { // Execute until Infinity\n\tmyNumber = myNumber * myNumber;\n}";
	k = k + s + "Infinity. Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.";
	// N 103
	c = c + s + "var x =  2 / 0;// x will be Infinity\nvar y = -2 / 0;// y will be -Infinity";
	k = k + s + "Infinity. Division by 0 (zero) also generates Infinity.";
	// N 104
	c = c + s + "typeof Infinity;// returns \"number\"";
	k = k + s + "Infinity is a number: typeOf Infinity returns number.";
	// N 105
	c = c + s + "var x = 100 / \"Apple\";// x will be NaN (Not a Number)";
	k = k + s + "NaN - Not a Number. NaN is a JavaScript reserved word indicating that a value is not a number. Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):";
	// N 106
	c = c + s + "var x = 100 / \"10\";// x will be 10";
	k = k + s + "NaN - Not a Number. However, if the string contains a numeric value , the result will be a number:";
	// N 107
	c = c + s + "var x = 100 / \"Apple\";\nisNaN(x);// returns true because x is Not a Number";
	k = k + s + "NaN - Not a Number. You can use the global JavaScript function isNaN() to find out if a value is a number.";
	// N 108
	c = c + s + "var x = NaN;\nvar y = 5;\nvar z = x + y;// z will be NaN";
	k = k + s + "Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN.";
	// N 109
	c = c + s + "typeof NaN;// returns \"number\"";
	k = k + s + "NaN is a number: typeOf NaN returns number.";
	// N 110
	c = c + s + "var x = 123;\nvar y = new Number(123);\ntypeof x;// returns number\ntypeof y; // returns object";
	k = k + s + "Numbers Can be Objects. Normally JavaScript numbers are primitive values created from literals: var x = 123. But numbers can also be defined as objects with the keyword new: var y = new Number(123)";
	// N 111
	c = c + s + "var x = 123;\nvar y = new Number(123);\n//(x === y)\nis false because x is a number and y is an object";
	k = k + s + "Numbers Can be Objects. Don't create Number objects. They slow down execution speed, and produce nasty side effects";
	// N 112
	c = c + s + "var x = 123;\nx.toString();// returns 123 from variable x\n(123).toString();// returns 123 from literal 123\n(100 + 23).toString();//returns 123 from expression 100 + 23";
	k = k + s + "The toString() Method. toString() returns a number as a string. All number methods can be used on any type of numbers (literals, variables, or expressions):";
	// N 113
	c = c + s + "var x = 9.656;\nx.toExponential(2);// returns 9.66e+0\nx.toExponential(4);// returns 9.6560e+0\nx.toExponential(6);// returns 9.656000e+0";
	k = k + s + "The toExponential() Method. toExponential() returns a string, with a number rounded and written using exponential notation. A parameter defines the number of character behind the decimal point:";
	// N 114
	c = c + s + "var x = 9.656;\nx.toFixed(0);// returns 10\nx.toFixed(2);// returns 9.66\nx.toFixed(4);// returns 9.6560\nx.toFixed(6);// returns 9.656000";
	k = k + s + "The toFixed() Method. toFixed() returns a string, with the number written with a specified number of decimals";
	// N 115
	c = c + s + "var x = 9.656;\nx.toPrecision();// returns 9.656\nx.toPrecision(2);// returns 9.7\nx.toPrecision(4);// returns 9.656\nx.toPrecision(6);// returns 9.65600";
	k = k + s + "The toPrecision() Method. toPrecision() returns a string, with a number written with a specified length";
	// N 116
	c = c + s + "x = true;\nNumber(x);// returns 1\nx = false;\nNumber(x);// returns 0\n\nx = new Date();\nNumber(x);// returns 1404568027739\nx = \"10\"\nNumber(x);// returns 10\nx = \"10 20\"\nNumber(x);// returns NaN";
	k = k + s + "The Number() Method. Number(), can be used to convert JavaScript variables to numbers:";
	// N 117
	c = c + s + "parseInt(\"10\");// returns 10\nparseInt(\"10.33\");// returns 10\nparseInt(\"10 20 30\");// returns 10\nparseInt(\"10 years\");// returns 10\nparseInt(\"years 10\");// returns NaN";
	k = k + s + "The parseInt() Method. parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:";
	// N 118
	c = c + s + "var x = 123;\nx.valueOf();// returns 123 from variable x\n(123).valueOf();// returns 123 from literal 123\n(100 + 23).valueOf();// returns 123 from expression 100 + 23";
	k = k + s + "The valueOf() Method. valueOf() returns a number as a number. In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object). The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.";
	// N 119
	c = c + s + "Math.random();// returns a random number";
	k = k + s + "The Math Object. The Math object allows you to perform mathematical tasks. The Math object includes several mathematical methods.";
	// N 120
	c = c + s + "Math.min(0, 150, 30, 20, -8);// returns -8";
	k = k + s + "Math.min() and Math.max(). Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments";
	// N 120
	c = c + s + "Math.max(0, 150, 30, 20, -8);// returns 150";
	k = k + s + "Math.min() and Math.max(). Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments";
	// N 121
	c = c + s + "Math.random();// returns a random number";
	k = k + s + "Math.random(). Math.random() returns a random number between 0 and 1";
	// N 122
	c = c + s + "Math.round(4.7);// returns 5\nMath.round(4.4);// returns 4";
	k = k + s + "Math.round(). Math.round() rounds a number to the nearest integer:";
	// N 123
	c = c + s + "Math.ceil(4.4);// returns 5";
	k = k + s + "Math.ceil(). Math.ceil() rounds a number up to the nearest integer";
	// N 124
	c = c + s + "Math.floor(4.7);// returns 4";
	k = k + s + "Math.floor(). Math.floor() rounds a number down to the nearest integer";
	// N 125
	c = c + s + "Math.floor(Math.random() * 11);//returns a random number between 0 and 10";
	k = k + s + "Math.floor() and Math.random() can be used together to return a random number between 0 and 10";
	// N 126
	c = c + s + "Math.E;// returns Euler's number\nMath.PI // returns PI\nMath.SQRT2 // returns the square root of 2\nMath.SQRT1_2 // returns the square root of 1/2\nMath.LN2 // returns the natural logarithm of 2\nMath.LN10 // returns the natural logarithm of 10\nMath.LOG2E // returns base 2 logarithm of E\nMath.LOG10E // returns base 10 logarithm of E";
	k = k + s + "Math Constants. JavaScript provides 8 mathematical constants that can be accessed with the Math object";
	// N 127
	c = c + s + "<p id=\"demo\"></p>\n\n<script>\ndocument.getElementById(\"demo\").innerHTML = Date();\n</script>";
	k = k + s + "JavaScript Dates. The Date object lets you work with dates (years, months, days, minutes, seconds, milliseconds). Displaying Dates.We use a script to display dates inside a <p> element with id=\"demo\"";
	// N 128
	c = c + s + "new Date()\nnew Date(milliseconds)\nnew Date(dateString)\nnew Date(year, month, day, hours, minutes, seconds, milliseconds)";
	k = k + s + "Creating Date Objects. The Date object lets us work with dates. A date consists of a year, a month, a day, a minute, a second, and a millisecond. Date objects are created with the new Date() constructor.";
	// N 129
	c = c + s + "<script>\nvar d = new Date();\ndocument.getElementById(\"demo\").innerHTML = d;\n</script>";
	k = k + s + "Creating Date Objects. The Date object lets us work with dates. Using new Date(), creates a new date object with the current date and time";
	// N 130
	c = c + s + "<script>\nvar d = new Date(\"October 13, 2014 11:13:00\");\ndocument.getElementById(\"demo\").innerHTML = d;\n</script>";
	k = k + s + "Creating Date Objects. Using new Date(date string), creates a new date object from the specified date and time";
	// N 125
	c = c + s + "<script>\nvar d = new Date(86400000);\ndocument.getElementById(\"demo\").innerHTML = d;\n</script>";
	k = k + s + "Creating Date Objects. Using new Date(number), creates a new date object as zero time plus the number. Zero time is 01 January 1970 00:00:00 UTC. The number is specified in milliseconds";
	// N 126
	c = c + s + "<script>\nvar d = new Date(99,5,24,11,33,30,0);\ndocument.getElementById(\"demo\").innerHTML = d;\n</script>";
	k = k + s + "Creating Date Objects. Using new Date(7 numbers), creates a new date object with the specified date and time. The 7 numbers specify the year, month, day, hour, minute, second, and millisecond, in that order";
	// N 127
	c = c + s + "<script>\nvar d = new Date(99,5,24);\ndocument.getElementById(\"demo\").innerHTML = d;\n</script>";
	k = k + s + "Creating Date Objects. Variants of the example let us omit any of the last 4 parameters";
	// N 128
	c = c + s + "<p id=\"demo\"></p>\n\n<script>\nd = new Date();\ndocument.getElementById(\"demo\").innerHTML = d.toString();\n</script>";
	k = k + s + "Creating Date Objects. Displaying Dates. When you display a date object in HTML, it is automatically converted to a string, with the toString() method.";
	// N 129
	c = c + s + "<script>\nvar d = new Date();\ndocument.getElementById(\"demo\").innerHTML = d.toUTCString();\n</script>";
	k = k + s + "Creating Date Objects. The toUTCString() method converts a date to a UTC string (a date display standard).";
	// N 130
	c = c + s + "<script>\nvar d = new Date();\ndocument.getElementById(\"demo\").innerHTML = d.toDateString();\n</script>";
	k = k + s + "Creating Date Objects. The toDateString() method converts a date to a more readable format";
	// N 131
	c = c + s + "<script>\nvar d = new Date();\ndocument.getElementById(\"demo\").innerHTML = d.getTime();\n</script>";
	k = k + s + "The getTime() Method. getTime() returns the the number of milliseconds since 01.01.1970";
	// N 132
	c = c + s + "<script>\nvar d = new Date();\ndocument.getElementById(\"demo\").innerHTML = d.getFullYear();\n</script>";
	k = k + s + "The getFullYear() Method. getFullYear() returns the year of a date as a four digit number";
	// N 133
	c = c + s + "<script>\nvar d = new Date();\ndocument.getElementById(\"demo\").innerHTML = d.getDay();\n</script>";
	k = k + s + "The getDay() Method. getDay() returns the weekday as a number (0-6)";
	// N 134
	c = c + s + "<script>\nvar d = new Date();\nvar days = [\"Sunday\",\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\"];\ndocument.getElementById(\"demo\").innerHTML = days[d.getDay()];\n</script>";
	k = k + s + "The getDay() Method. getDay() returns the weekday as a number (0-6). You can use an array of names, and getDay() to return the weekday as a name";
	// N 135
	c = c + s + "<script>\nvar d = new Date();\nd.setFullYear(2020, 0, 14);\ndocument.getElementById(\"demo\").innerHTML = d;\n</script>";
	k = k + s + "The setFullYear() Method. setFullYear() sets a date object to a specific date. In this example, to January 14, 2020";
	// N 136
	c = c + s + "<script>\nvar d = new Date();\nd.setDate(20);\ndocument.getElementById(\"demo\").innerHTML = d;\n</script>";
	k = k + s + "The setDate() Method. setDate() sets the day of the month (1-31)";
	// N 137
	c = c + s + "<script>\nvar d = new Date();\nd.setDate(d.getDate() + 50);\ndocument.getElementById(\"demo\").innerHTML = d;\n</script>";
	k = k + s + "The setDate() Method. setDate() sets the day of the month (1-31). The setDate() method can also be used to add days to a date";
	// N 138
	c = c + s + "<script>\nvar msec = Date.parse(\"March 21, 2012\");\ndocument.getElementById(\"demo\").innerHTML = msec;\n</script>";
	k = k + s + "Date Input - Parsing Dates. If you have an input value (or any string), you can use the Date.parse() method to convert it to milliseconds. Date.parse() returns the number of milliseconds between the date and January 1, 1970	";
	// N 139
	c = c + s + "var today, someday, text;\ntoday = new Date();\nsomeday = new Date();\nsomeday.setFullYear(2100, 0, 14);\n\nif (someday > today) {\n\ttext = \"Today is before January 14, 2100\";\n}\nelse {\n\ttext = \"Today is after January 14, 2100.\";\n}\ndocument.getElementById(\"demo\").innerHTML = text;";
	k = k + s + "Compare Dates. Dates can easily be compared. The example compares today's date with January 14, 2100:";
	// N 140
	c = c + s + "<p id=\"demo\"></p>\n<script>\nvar cars = [\"Saab\", \"Volvo\", \"BMW\"];\ndocument.getElementById(\"demo\").innerHTML = cars;\n</script>";
	k = k + s + "Displaying Arrays. Use a script to display arrays inside a <p> element with id=\"demo\"";
	// N 141
	c = c + s + "var cars = [\"Saab\", \"Volvo\", \"BMW\"];";
	k = k + s + "Create an array, and assign values to it";
	// N 142
	c = c + s + "var cars = [\n\t\"Saab\",\n\t\"Volvo\",\n\t\"BMW\"\n];";
	k = k + s + "Create an array. Spaces and line breaks are not important. A declaration can span multiple lines";
	// N 143
	c = c + s + "var car1 = \"Saab\";\nvar car2 = \"Volvo\";\nvar car3 = \"BMW\";";
	k = k + s + "What is an Array? An array is a special variable, which can hold more than one value at a time. If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:";
	// N 144
	c = c + s + "var Numbers = [\"number1\", \"number2\", \"number3\"];";
	k = k + s + "Creating an Array. Using an array literal is the easiest way to create a JavaScript Array.";
	// N 145
	c = c + s + "var cars = new Array(\"Saab\", \"Volvo\", \"BMW\");";
	k = k + s + "Using the JavaScript Keyword new. The following example also creates an Array, and assigns values to it:";
	// N 146
	c = c + s + "var name = cars[0];";
	k = k + s + "Access the Elements of an Array. You refer to an array element by referring to the index number. This statement access the value of the first element in myCars";
	// N 147
	c = c + s + "cars[0] = \"Opel\";";
	k = k + s + "Access the Elements of an Array. This statement modifies the first element in cars";
	// N 148
	c = c + s + "myArray[0] = Date.now;\nmyArray[1] = myFunction;\nmyArray[2] = myCars;";
	k = k + s + "You Can Have Different Objects in One Array. Arrays are special kinds of objects. Because of this, you can have variables of different types in the same Array. You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:";
	// N 149
	c = c + s + "var person = [\"John\", \"Doe\", 46];";
	k = k + s + "Arrays are Objects. Arrays are a special type of objects. The typeof operator in JavaScript returns \"object\" for arrays. Arrays use numbers to access its \"elements\". In this example, person[0] returns John";
	// N 150
	c = c + s + "var x = cars.length;\n// The length property returns the number of elements in cars\nvar y = cars.sort();\n// The sort() method sort cars in alphabetical order";
	k = k + s + "Array Properties and Methods. The real strength of JavaScript arrays are the built-in array properties and methods";
	// N 151
	c = c + s + "var fruits = [\"Banana\", \"Apple\", \"Mango\"];\nfruits.length;// the length of fruits is 4";
	k = k + s + "The length Property. The length property of an array returns the length of an array (the number of array elements).";
	// N 152
	c = c + s + "var fruits = [\"Orange\", \"Apple\", \"Mango\"];\nfruits[fruits.length] = \"Lemon\";\n// adds a new element (Lemon) to fruits";
	k = k + s + "Adding Array Elements. The easiest way to add a new element to an array is to use the length property:";
	// N 153
	c = c + s + "var fruits = [\"Banana\", \"Orange\", \"Apple\"];\nfruits[10] = \"Lemon\";\n// adds a new element (Lemon) to fruits";
	k = k + s + "Adding Array Elements. Adding elements with high indexes can create undefined \"holes\" in an array";
	// N 154
	c = c + s + "var index;\nvar fruits = [\"Banana\", \"Orange\", \"Apple\", \"Mango\"];\nfor (index = 0; index < fruits.length; index++) {\n\ttext += fruits[index];\n}";
	k = k + s + "Looping Array Elements. The best way to loop through an array is using a standard for loop";
	// N 155
	c = c + s + "var person = []\nperson[0] = \"John\";\nperson[1] = \"Doe\";\nperson[2] = 46;\nvar x = person.length; // person.length will return 3\nvar y = person[0]; // person[0] will return \"John\"";
	k = k + s + "Associative Arrays?. Many programming languages support arrays with named indexes. Arrays with named indexes are called associative arrays (or hashes). JavaScript does not support arrays with named indexes. In JavaScript, arrays use numbered indexes.";
	// N 156
	c = c + s + "var person = [];\nperson[\"firstName\"] = \"John\";\nperson[\"lastName\"] = \"Doe\";\nperson[\"age\"] = 46;\nvar x = person.length;// person.length will return 0\nvar y = person[0];// person[0] will return undefined";
	k = k + s + "Associative Arrays? If you use a named index, when accessing an array, JavaScript will redefine the array to a standard object, and all array methods and properties will produce undefined or incorrect results";
	// N 157
	c = c + s + "var points = new Array();// Bad\nvar points = [];// Good";
	k = k + s + "Avoid new Array(). There is no need to use the JavaScript's built-in array constructor new Array(). Use [] instead. These two different statements both create a new empty array named points";
	// N 158
	c = c + s + "var points = new Array(40, 100, 1, 5, 25, 10); // Bad\nvar points = [40, 100, 1, 5, 25, 10]; // Good";
	k = k + s + "Avoid new Array(). There is no need to use the JavaScript's built-in array constructor new Array().These two different statements both create a new array containing 6 numbers";
	// N 159
	c = c + s + "var points = new Array(40, 100);\n// Creates an array with two elements (40 and 100)";
	k = k + s + "Avoid new Array(). There is no need to use the JavaScript's built-in array constructor new Array(). The new keyword complicates your code and produces nasty side effects";
	// N 160
	c = c + s + "var points = new Array(40);\n// Creates an array with 40 undefined elements";
	k = k + s + "Avoid new Array(). There is no need to use the JavaScript's built-in array constructor new Array(). What if I remove one of the elements?";
	// N 161
	c = c + s + "var fruits = [\"Banana\", \"Orange\", \"Apple\", \"Mango\"];\ntypeof fruits;// typeof returns object";
	k = k + s + "How to Recognize an Array? A common question is: How do I know if a variable is an array? The problem is that the JavaScript operator typeof returns \"object\"";
	// N 162
	c = c + s + "function isArray(myArray) {\n\treturn myArray.constructor.toString().indexOf(\"Array\") > -1;\n}";
	k = k + s + "How to Recognize an Array? The typeof operator returns object because a JavaScript array is an object. To solve this problem you can create your own isArray() function. The function above always return true if the argument is an array. Or more precisely: it returns true if the object prototype of the argument is \"[object array]\"";
	// N 163
	c = c + s + "";
	k = k + s + "";
	// N 164
	c = c + s + "";
	k = k + s + "";
	// N 165
	c = c + s + "";
	k = k + s + "";
	// N 166
	c = c + s + "";
	k = k + s + "";
	// N 167
	c = c + s + "";
	k = k + s + "";
	// N 168
	c = c + s + "";
	k = k + s + "";
	// N 169
	c = c + s + "";
	k = k + s + "";
	// N 170
	c = c + s + "";
	k = k + s + "";
	
	
	
	//PRINT IN THE 
	$("#introWord").text(w);
	$("#lang").text(c);
	$("#know").text(k);
	$("#separator").text(s);
});
