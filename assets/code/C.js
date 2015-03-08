$(function(){
	// Introduction word
	var w = "Memorize C language code and your keyboard.Now coding fast!";
	//The separator in the ARRAY
	var s = "¢";
	// code in the ARRAY
	var c;
	// know not affecte in same ARRAY to code
	var k;
	// N 1
	c = c + s + "printf(\"format string\",argument_list);";
	k = k + s + "printf() function. The printf() function is used for output. It prints the given statement to the console.";
	// N 2
	c = c + s + "scanf(\"format string\",argument_list);";
	k = k + s + "scanf() function. The scanf() function is used for input. It reads the input data from the console.";
	// N 3
	c = c + s + "#include <stdio.h>\n#include <conio.h>\nvoid main(){\nint num;\nclrscr();\n\nprintf(\"enter a num:\");\nscanf(\"%d\",&num);\n\nprintf(\"cube of num is:%d \",num*num*num);\n\ngetch();\n}";
	k = k + s + "The scanf(\"%d\",&number) statement reads integer number from the console and stores the given value in number variable. The printf(\"cube of number is:%d \",number*number*number) statement prints the cube of number on the console.";
	// N 4
	c = c + s + "#include <stdio.h>\n#include <conio.h>\nvoid main(){\nint x = 0,y = 0,result = 0;\nclrscr();\n\nprintf(\"enter first number:\");\nscanf(\"%d\",&x);\nprintf(\"enter second number:\");\nscanf(\"%d\",&y);\n\nresult=x+y;\nprintf(\"sum of 2 numbers:%d \",result);\n\ngetch();\n}";
	k = k + s + "Program to print sum of 2 numbers in C language";
	// N 5
	c = c + s + "#include< stdio.h>\n#include< conio.h>\nint main()\n{\n\tprintf(\"Hello,World\");\n\tgetch();\n\treturn 0;\n}";
	k = k + s + "1-The first line of the program #include <stdio.h> is a preprocessor command, which tells a C compiler to include stdio.h file before going to actual compilation. 2-The next line int main() is the main function where program execution begins. 3-The next line /*...*/ will be ignored by the compiler and it has been put to add additional comments in the program. So such lines are called comments in the program. 4-The next line printf(...) is another function available in C which causes the message \"Hello, World!\" to be displayed on the screen. 5-The next line return 0; terminates main()function and returns the value 0.";
	// N 6
	c = c + s + "int fee;";
	k = k + s + "Here, int is a keyword that indicates, 'fee' is of type integer.";
	// N 7
	c = c + s + "auto int var1;";
	k = k + s + "auto Keyword, auto is used to define a variable of storage class automatic. For example:";
	// N 8
	c = c + s + "for (i = 1;i < = 10; ++i) {\n\tif (i == 3)\n\tcontinue;\n\tif (i == 7)\n\tbreak;\n\tprintf(\"%d \",i);\n}";
	k = k + s + "break and continue Keyword. The break statement is used to jump out of the innermost enclosing loop (while, do, for or switch statements) explicitly and pass control to next statement immediately following the loop. In other hand, continue statement is used to skip certain statements inside the loop.";
	// N 9
	c = c + s + "switch(option){\n\tcase '1':\n\t//some statements to execute when 1\n\tbreak;\n\tcase '5':\n\t//some statements to execute when 5\n\tbreak;\n\tdefault:\n\t//some statements to execute when default;\n}";
	k = k + s + "switch, case and default Keyword. The switch statement tests the value of a expression and test with the different \"case\" values. We can use \"default\" value, if it doesn't matches any of \"case\" values.";
	// N 10
	c = c + s + "char variable0;";
	k = k + s + "char. The char keyword is used for indicating the variable is of the type character. Here, variable0 is a variable of type character";
	// N 11
	c = c + s + "const int a = 5;";
	k = k + s + "const Keyword. const makes the value of a pointer or a variable unmodifiable. In this example, a is the constant and its value is 5. This value cannot be changed in program.";
	// N 12
	c = c + s + "i = 2;\nwhile (i < 10) {\n\tprint(\"%d \",i)\n\ti++;\n}";
	k = k + s + "do and while Keyword. while and do are used for looping in C.";
	// N 13
	c = c + s + "int i;\ndo {\n\tprint(\"%d \",i);\n\ti++;\n}\nwhile (i<10)";
	k = k + s + "If programmer finds easy to write statements to be executed before writing test condition, do...while loop is used.";
	// N 14
	c = c + s + "float variable1;\ndouble variable2;";
	k = k + s + "double and float Keyword. double and float are used for indicating floating type variables. Keywords float and double represents single precision and double precision floating point data respectively.";
	// N 15
	c = c + s + "if (i==1)\nprintf(\"i is 1.\")\nelse\nprintf(\"i is not 1.\")";
	k = k + s + "if and else Keyword. if and else are used in decision making in C.";
	// N 16
	c = c + s + "#include <stdio.h>\nextern i=5;\nvoid print1(){\n\tprintf (\"%d \",i);\n}\nint main() {\n\tprintf(\"%d \",i);\n}\nreturn 0;\n}";
	k = k + s + "extern Keyword. Keyword extern is used for indicating the variable is external and is declared outside every function and can be accessed by any function.";
	// N 17
	c = c + s + "for (i=0;i<9;++i){\n\tprintf(\"%d \",i);\n}";
	k = k + s + "for Keyword. Keyword for is used for looping in C.";
	// N 18
	c = c + s + "for(i=1;i<5;++i){\n\tif (i==10)\n\t\tgoto error;\n\t}\nprintf(\"i is not 10\");\nerror:\n\tprintf(\"Error, count can't be 10\");";
	k = k + s + "goto Keyword. Keyword goto is used for unconditional jump to a labeled statement inside that function.";
	// N 19
	c = c + s + "int var0;";
	k = k + s + "int Keyword. int is used for indicating the variable is of type integer";
	// N 20
	c = c + s + "short int var1;\nlong int var2;\nsigned int var3;\nunsigned int var4;";
	k = k + s + "short, long, signed and unsigned Keyword. short, long, signed and unsigned are type modifiers that alters the meaning of base data type to yield new type.";
	// N 21
	c = c + s + "int func(){\n\tint b=5;\n\treturn b;\n}";
	k = k + s + "return. Keyword return terminates the execution of current function and returns the value to the calling function.";
	// N 22
	c = c + s + "#include <stdio.h>\nint main(){\n\tprintf(\"%u bytes.\",sizeof(char));\n}";
	k = k + s + "sizeof Keyword. sizeof is used to find the number of bytes of an object.";
	// N 23
	c = c + s + "register int var1;";
	k = k + s + "register Keyword. Variable of storage class register are much faster than normal variables.";
	// N 24
	c = c + s + "static int var;";
	k = k + s + "static Keyword. static is used for indicating the variable is of storage class static. The value of the static variables persists until the end of the program. Here, var is a variable of storage class static.";
	// N 25
	c = c + s + "struct student{\n\tchar name[80];\n\tfloat marks;\n\tint age;\n}s1,s2;";
	k = k + s + "struct Keyword. struct is used in creating a structure which provide means to group different types of variable under one name for easier handling.";
	// N 26
	c = c + s + "typedef int part;\npart acer,hp;";
	k = k + s + "Keyword typedef is used to explicitly associate a type with an identifier. Here, the use of typedef is to create a type part and this part type is used in declaring variables acer and hp.";
	// N 27
	c = c + s + "union student {\n\tchar name[80];\n\tfloat marks;\n\tint age;\n}";
	k = k + s + "union Keyword. Union is used in creating a union which provide means to group different types of variable under one name for easier handling.";
	// N 28
	c = c + s + "void no_return(int a){\n\t.....\n}";
	k = k + s + "void Keyword. void is used to indicate that a function takes no arguments or returns no value.";
	// N 29
	c = c + s + "printf(\"Hello, World!\");";
	k = k + s + "Tokens in C. A C program consists of various tokens and a token is either a keyword, an identifier, a constant, a string literal, or a symbol.";
	// N 30
	c = c + s + "printf(\"Hello, World! \n\");\nreturn 0;";
	k = k + s + "Semicolons. In C program, the semicolon is a statement terminator. That is, each individual statement must be ended with a semicolon. It indicates the end of one logical entity.";
	// N 31
	c = c + s + "//This is a comment Single line Comment\n/*This is a long\nand valid comment*/";
	k = k + s + "Comments are simple text in your C program that increases readability of programs. Compiler ignore anything written as comment in your program.";
	// N 32
	c = c + s + "#include <stdio.h>\n#include <limits.h>\n\nint main()\n{\n\tprintf(\"Storage size for int : %d \n\", sizeof(int));\n\treturn 0;\n}";
	k = k + s + "Integer type. Integers are used to store whole numbers.";
	// N 33
	c = c + s + "#include <stdio.h>\n#include <float.h>\n\nint main()\n{\n\tprintf(\"Storage size for float : %d \n\", sizeof(float));\n\tprintf(\"Minimum float positive value: %E\n\", FLT_MIN );\n\tprintf(\"Maximum float positive value: %E\n\", FLT_MAX );\n\tprintf(\"Precision value: %d\n\", FLT_DIG );\nreturn 0;\n}";
	k = k + s + "Floating type. Floating types are used to store real numbers.";
	// N 34
	c = c + s + "int a;\nfloat b;\nchar c;";
	k = k + s + "A variable is a name of memory location. It is used to store data. Its value can be changed and it can be reused many times. It is a way to represent memory location through symbol so that it can be easily identified.";
	// N 35
	c = c + s + "void function1(){\n\tint x = 10;//local variable\n}";
	k = k + s + "Local Variable. A variable that is declared inside the function or block is called local variable.";
	// N 36
	c = c + s + "int value= 2 0;//global variable\nvoid function1(){\n\tint x=10;//local variable\n	}";
	k = k + s + "Global Variable. A variable that is declared outside the function or block is called global variable. Any function can change the value of the global variable. It is available to all the functions.";
	// N 37
	c = c + s + "void function1(){\n\tint x = 10;//local variable\n\tstatic int y = 10;//static variable\n\tx = x + 1;\n\ty = y + 1;\n\tprintf(\"%d,%d\",x,y);\n}";
	k = k + s + "Static Variable. A variable that is declared with static keyword is called static variable.";
	// N 38
	c = c + s + "void main(){\n\tint x = 10;//local variable (also automatic)\n\tauto int y = 20;//automatic variable\n}";
	k = k + s + "Automatic Variable. All variables in C that is declared inside the block, are automatic variables by default. By we can explicitly declare automatic variable using auto keyword.";
	// N 39
	c = c + s + "extern int x = 10;//external variable (also global) in file.h\n#include \"myfile.h\"\n#include <stdio.h>\nvoid printValue(){\n\tprintf(\"Global variable: %d\", global_variable);\n}";
	k = k + s + "External Variable. We can share a variable in multiple C source files by using external variable. To declare a external variable, you need to use extern keyword myfile.h";
	// N 40
	c = c + s + "Decimal constants: 0, -9, 22\nOctal constants: 021, 077, 033\nHexadecimal constants: 0x7f, 0x2a, 0x521";
	k = k + s + "Integer constants are the numeric constants(constant associated with number) without any fractional part or exponential part. There are three types of integer constants in C language: decimal constant(base 10), octal constant(base 8) and hexadecimal constant(base 16) .";
	// N 41
	c = c + s + "enum color {yellow, green, black, white};";
	k = k + s + "Enumeration constants. Keyword enum is used to declare enumeration types.";
	// N 42
	c = c + s + "void main()\n{\n\tint detail;\n\tor\n\tauto int detail; //Both are same\n}";
	k = k + s + "Automatic variables. A variable declared inside a function without any storage class specification, is by default an automatic variable. They are created when a function is called and are destroyed automatically when the function exits. Automatic variables can also be called local variables because they are local to a function. By default they are assigned garbage value by the compiler.";
	// N 43
	c = c + s + "int number;\nvoid main()\n{\n\tnumber = 10;\n}\nfun1()\n{\n\tnumber = 20;\n}\nfun2()\n{\n\tnumber = 30;\n}";
	k = k + s + "External or Global variable. A variable that is declared outside any function is a Global variable. Global variables remain available throughout the entire program. One important thing to remember about global variable is that their values can be changed by any function in the program.";
	// N 44
	c = c + s + "main()\n{\n\ta=10; //Error, cannot find variable a\n\tprintf(\"%d\",a);\n}";
	k = k + s + "extern keyword. The extern storage class is used to give a reference of a global variable that is visible to ALL the program files. When you use 'extern', the variable cannot be initialized as all it does is point the variable name at a storage location.";
	// N 45
	c = c + s + "main()\n{\n\textern int x;//Tells compiler that it is defined somewhere else\n\tx = 10;\n\tprintf(\"%d\",x);\n}\nint x; //Global variable x";
	k = k + s + "extern keyword. The extern storage class is used to give a reference of a global variable that is visible to ALL the program files. When you use 'extern', the variable cannot be initialized as all it does is point the variable name at a storage location.";
	// N 46
	c = c + s + "#include <stdio.h>\nvoid test(); //Function declaration\n\nvoid main()\n{\n\ttest();\n}\nvoid test()\n{\n\tstatic int a = 0; //Static variable\n\ta = a + 1;\n\tprintf(\"%d\\t\",a);\n}";
	k = k + s + "A static variable tells the compiler to persist the variable until the end of program. Instead of creating and destroying a variable every time when it comes into and goes out of scope, static is initialized only once and remains into existence till the end of program. A static variable can either be internal or external depending upon the place of declaraction.";
	// N 47
	c = c + s + "register int number;";
	k = k + s + "Register variable inform the compiler to store the variable in register instead of memory. Register variable has faster access than normal variable. Frequently used variables are kept in register. Only few variables can be placed inside register.";
	// N 48
	c = c + s + "";
	k = k + s + "";
	// N 49
	c = c + s + "";
	k = k + s + "";
	// N 50
	c = c + s + "";
	k = k + s + "";
	
	
	
	
	//PRINT IN THE 
	$("#introWord").text(w);
	$("#lang").text(c);
	$("#know").text(k);
	$("#separator").text(s);
	$("#choiceLang").text("C language");
});
