$(function(){
	// Introduction word
	var w = "Memorize C++ code now, your keyboard and coding fast!";
	//The separator in the ARRAY
	var s = "¢";
	// code in the ARRAY
	var c;
	// know not affecte in same ARRAY to code
	var k;
	// N 1
	c = c + s + "#include <iostream>\nusing namespace std;\nint main()\n{\n\tcout << \"Hello this is C++\";\n}";
	k = k + s + "Header files are included at the beginning just like in C program. Here iostream is a header file which provides us with input & output streams. Header files contained predeclared function libraries, which can be used by users for their ease.";
	// N 2
	c = c + s + "std::cout << \"A\";";
	k = k + s + "Using namespace std, tells the compiler to use standard namespace. Namespace collects identifiers used for class, object and variables. NameSpace can be used by two ways in a program, either by the use of using statement at the beginning, like we did in above mentioned program or by using name of namespace as prefix before the identifier with scope resolution (::) operator.";
	// N 3
	c = c + s + "cout<<\"single line\"; // This is single line comment";
	k = k + s + "Comments. For single line comments, use // before mentioning comment, like";
	// N 4
	c = c + s + "/*this is \na multiple line \ncomment */";
	k = k + s + "Comments. For multiple line comment, enclose the comment between /* and */";
	// N 5
	c = c + s + "class jk201\n{\n\tint i; //data variable\n\tvoid display() //Member Function\n\t{\n\t\tcout<<\"Inside Member Function\";\n\t}\n}; // Class ends here\n\nint main()\n{\n\tjk201 obj; // Creatig jk201 class's object\n\tobj.display(); //Calling member function using class object\n}";
	k = k + s + "Using Classes. Classes name must start with capital letter, and they contain data variables and member functions. This is a mere introduction to classes. This is how class is defined, its object is created and the member functions are used. Variables can be declared anywhere in the entire program, but must be declared, before they are used. Hence, we don't need to declare variable at the start of the program.";
	// N 6
	c = c + s + "void counter()\n{\n\tstatic int count=0;\n\tcout << count++;\n}\n\nint main(0)\n{\n\tfor(int i=0;i<5;i++)\n\t{\n\t\tcounter();\n\t}\n}";
	k = k + s + "Static variables inside Functions. Static variables when used inside function are initialized only once, and then they hold there value even through function calls. These static variables are stored on static storage area , not in stack.";
	// N 7
	c = c + s + "class X\n{\n\tstatic int i;\n\tpublic:\n\tX (){};\n};\n\nint X::i=1;\n\nint main()\n{\n\tX obj;\n\tcout << obj.i; // prints value of i\n}";
	k = k + s + "Static data member in class. Static data members of class are those members which are shared by all the objects. Static data member has a single piece of storage, and is not available as separate copy with each object, like other non-static data members.";
	// N 8
	c = c + s + "class X\n{\n\tpublic:\n\tstatic void fl(){};\n};\n\nint main()\n{\n\tX::f(); // calling member function directly with class name\n}";
	k = k + s + "Static Member Functions. These functions work for the class as whole rather than for a particular object of a class. It can be called using an object and the direct member access . operator. But, its more typical to call a static member function by itself, using class name and scope resolution :: operator.";
	// N 9
	c = c + s + "#include <iostream>\nusing namespace std;\nint main()\n{\n\tchar str[] = \"C++ tutorial\";\n\tcout << \"Value of str is : \" << str << endl;\n}";
	k = k + s + "The standard output stream (cout). The predefined object cout is an instance of iostream class. The cout object is said to be \"connected to\" the standard output device, which usually is the display screen. The cout is used in conjunction with the stream insertion operator, which is written as << which are two less than signs.";
	// N 10
	c = c + s + "#include <iostream>\nusing namespace std;\nint main ()\n{\n\tchar name[100];\n\tcout << \"Please enter your name:\";\n\tcin >> name;\n\tcout, << \"Your name is:\" << name << endl;\n}";
	k = k + s + "The standard input stream (cin). The predefined object cin is an instance of iostream class. The cin object is said to be attached to the standard input device, which usually is the keyboard. The cin is used in conjunction with the stream extraction operator, which is written as >> which are two greater than signs";
	
	
	
	
	//PRINT IN THE 
	$("#introWord").text(w);
	$("#lang").text(c);
	$("#know").text(k);
	$("#separator").text(s);
	$("#choiceLang").text("C++ language");
});
