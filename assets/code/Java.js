$(function(){
	// Introduction word
	var w = "Memorize Java code now, your keyboard and coding fast!";
	//The separator in the ARRAY
	var s = "¢";
	// code in the ARRAY
	var c;
	// know not affecte in same ARRAY to code
	var k;
	// N 1
	c = c + s + "public class Hello\n{\n\tpublic static void main(String[] args)\n\t{\n\t\tSystem.out.println(\"Hello World\");\n\t}\n}";
	k = k + s + "Java Program Structure";
	// N 2
	c = c + s + "public class student{\n\tString name;\n\tint reg;\n\tString branch;\n\n\tvoid ca(){\n\t}\n\tvoid mte(){\n\t}\n\tvoid ete(){\n\t}\n}";
	k = k + s + "Classes in Java. A class is a blue print from which individual objects are created.";
	// N 3
	c = c + s + "public class collage{\n\tpublic collage(){}\n\tpublic collage(String name){\n\t\t// This constructor has one parameter, name.\n\t}\n}";
	k = k + s + "Constructors. When discussing about classes, one of the most important sub topic would be constructors. Every class has a constructor. If we do not explicitly write a constructor for a class the Java compiler builds a default constructor for that class.";
	// N 4
	c = c + s + "public class collage{\n\tpublic collage(String name){\n\t\t// This constructor has one parameter, name.\n\t\tSystem.out.println(\"Collage Name is :\" + name );\n\t}\n\tpublic static void main(String []args){\n\t\t// Following statement would create an object mycollage\n\t\tcollage mycollage = new collage(\"FAST\");\n\t}\n}";
	k = k + s + "Creating an Object. As mentioned previously, a class provides the blueprints for objects. So basically an object is created from a class. In Java, the new key word is used to create new objects.";
	// N 5
	c = c + s + "/* First create an object */\nObjectReference = new Constructor();\n\n/* Now call a variable as follows */\nObjectReference.variableName;\n\n/* Now you can call a class method as follows */\nObjectReference.MethodName();";
	k = k + s + "Accessing Instance Variables and Methods. Instance variables and methods are accessed via created objects. To access an instance variable the fully qualified path should be as follows:";
	// N 6
	c = c + s + "import java.io.*;";
	k = k + s + "Import statements. In Java if a fully qualified name, which includes the package and the class name, is given then the compiler can easily locate the source code or classes. Import statement is a way of giving the proper location for the compiler to find that particular class.";
	// N 7
	c = c + s + "byte a = 68;\n\tchar a = 'A'";
	k = k + s + "Java Literals: A literal is a source code representation of a fixed value. They are represented directly in the code without any computation.";
	// N 8
	c = c + s + "int decimal = 100;\n\tint octal = 0144;\n\tint hexa = 0x64;";
	k = k + s + "Prefix 0 is used to indicate octal and prefix 0x indicates hexadecimal when using these number systems for literals.";
	// N 9
	c = c + s + "int a, b, c;// Declares three ints, a, b, and c.\nint a = 10, b = 10;// Example of initialization\nbyte B = 22;// initializes a byte type variable B.\ndouble pi = 3.14159;// declares and assigns a value of PI.\nchar a = 'a';// the char variable a is initialized with value 'a'";
	k = k + s + "A variable provides us with named storage that our programs can manipulate. Each variable in Java has a specific type, which determines the size and layout of the variable's memory; the range of values that can be stored within that memory; and the set of operations that can be applied to the variable.";
	// N 10
	c = c + s + "public class Test{\n\tpublic void custAge(){\n\t\tint age = 0;\n\t\tage = age + 17;\n\t\tSystem.out.println(\"Customer age is : \" + age);\n\t}\n\tpublic static void main(String args[]){\n\t\tTest test = new Test();\n\t\ttest.custAge();\n\t}\n}";
	k = k + s + "Local variables are declared in methods, constructors, or blocks. Local variables are created when the method, constructor or block is entered and the variable will be destroyed once it exits the method, constructor or block.";
	// N 11
	c = c + s + "import java.io.*;\n\npublic class Employee{\n\t// salary variable is a private static variable\n\tprivate static double salary;\n\n\t// DEPARTMENT is a constant\n\tpublic static final String DEPARTMENT = \"Development\";\n\t\tpublic static void main(String args[]){\n\t\t\tsalary = 1000;\n\t\t\tSystem.out.println(DEPARTMENT+\" average salary:\"+salary);\n\t}\n}";
	k = k + s + "Class/static variables. Class variables also known as static variables are declared with the static keyword in a class, but outside a method, constructor or a block. There would only be one copy of each class variable per class, regardless of how many objects are created from it. Static variables are rarely used other than being declared as constants. Constants are variables that are declared as public/private, final and static. Constant variables never change from their initial value.";
	// N 12
	c = c + s + "public class Test{\n\tpublic static void main(String args[]){\n\t\tint a , b;\n\t\ta = 10;\n\t\tb = (a == 1) ? 20: 30;\n\t\tSystem.out.println(\"Value of b is : \" + b );\n\n\t\tb = (a == 10) ? 20: 30;\n\t\tSystem.out.println(\"Value of b is : \" + b );\n\t}\n}";
	k = k + s + "Conditional operator is also known as the ternary operator. This operator consists of three operands and is used to evaluate Boolean expressions. The goal of the operator is to decide which value should be assigned to the variable. The operator is written as:";
	// N 13
	c = c + s + "public class Test{\n\tpublic static void main(String args[]){\n\t\tString name = \"Sachin\";\n\n\t\t// following will return true since name is type of String\n\t\tboolean result = name instanceof String;\n\t\tSystem.out.println(result);\n\t}\n}";
	k = k + s + "Instance of Operator. This operator is used only for object reference variables. The operator checks whether the object is of a particular type(class type or interface type).";
	// N 14
	c = c + s + "public class Test {\n\tpublic static void main(String args[]){\n\t\tfor(int x = 10; x < 20; x = x+1){\n\t\t\tSystem.out.println(\"value of x : \" + x );\n\t\t}\n\t}\n}";
	k = k + s + "The for Loop. A for loop is a repetition control structure that allows you to efficiently write a loop that needs to execute a specific number of times.";
	// N 15
	c = c + s + "public class Test {\n\n\tpublic static void main(String args[]) {\n\t\tint x = 10;\n\n\t\twhile( x < 20 ) {\n\t\t\tSystem.out.println(\"value of x : \" + x );\n\t\tx++;\n\t\t}\n\t}\n}";
	k = k + s + "The while Loop. A while loop is a control structure that allows you to repeat a task a certain number of times.";
	// N 16
	c = c + s + "public class Test {\n\n\tpublic static void main(String args[]){\n\t\tint x = 10;\n\n\t\tdo{\n\t\t\tSystem.out.println(\"value of x : \" + x );\n\t\t\tx++;\n\t\t}while( x < 20 );\n\t}\n}";
	k = k + s + "The do...while Loop. A do...while loop is similar to a while loop, except that a do...while loop is guaranteed to execute at least one time.";
	// N 17
	c = c + s + "public class Test {\n\n\tpublic static void main(String args[]){\n\t\tint x = 10;\n\n\t\tif( x < 20 ){\n\t\t\tSystem.out.print(\"This is if statement\");\n\t\t}\n\t}\n}";
	k = k + s + "The if Statement. An if statement consists of a Boolean expression followed by one or more statements.";
	// N 18
	c = c + s + "public class Test {\n\n\tpublic static void main(String args[]){\n\t\tint x = 30;\n\t\tif( x < 20 ){\n\t\t\tSystem.out.print(\"This is if statement\");\n\t\t}else{\n\t\t\tSystem.out.print(\"This is else statement\");\n\t\t}\n\t}\n}";
	k = k + s + "The if...else Statement. An if statement can be followed by an optional else statement, which executes when the Boolean expression is false.";
	// N 19
	c = c + s + "public class Test {\n\tpublic static void main(String args[]){\n\t\tint x = 30;\n\t\tif( x == 10 ){\n\t\t\tSystem.out.print(\"Value of X is 10\");\n\t\t}\n\t\telse if( x == 30 ){\n\t\t\tSystem.out.print(\"Value of X is 30\");\n\t\t}\n\t\telse{\n\t\t\tSystem.out.print(\"This is else statement\");\n\t\t}\n\t}\n}";
	k = k + s + "The if...else if...else Statement. An if statement can be followed by an optional else if...else statement, which is very useful to test various conditions using single ";
	// N 20
	c = c + s + "public class Test {\n\n\tpublic static void main(String args[]){\n\t\tint x = 30;\n\t\tint y = 10;\n\t\tif( x == 30 ){\n\t\t\tif( y == 10 ){\n\t\t\t\tSystem.out.print(\"X = 30 and Y = 10\");\n\t\t\t}\n\t\t}\n\t}\n}";
	k = k + s + "Nested if...else Statement. It is always legal to nest if-else statements which means you can use one if or else if statement inside another if or else if statement.";
	// N 21
	c = c + s + "public class Test {\n\tpublic static void main(String args[]){\n\t\t//char grade = args[0].charAt(0);\n\t\tchar grade = 'A';\n\t\tswitch(grade){\n\t\t\tcase 'A' :\n\t\t\t\tSystem.out.println(\"Excellent!\");\n\t\t\t\tbreak;\n\t\t\tcase 'C' :\n\t\t\t\tSystem.out.println(\"Well done\");\n\t\t\t\tbreak;\n\t\tdefault :\n\t\t\t\tSystem.out.println(\"Invalid grade\");\n\t\t}\n\t\tSystem.out.println(\"Your grade is \" + grade);\n\t}\n}";
	k = k + s + "A switch statement allows a variable to be tested for equality against a list of values. Each value is called a case, and the variable being switched on is checked for each case.";
	// N 22
	c = c + s + "// Here following primitive char 'a'\n// is boxed into the Character object ch\nCharacter ch = 'a';\n// Here primitive 'x' is boxed for method test,\n// return is unboxed to char 'c'\nchar c = test('x');";
	k = k + s + "Normally, when we work with characters, we use primitive data types char. The Java compiler will also create a Character object for you under some circumstances. For example, if you pass a primitive char into a method that expects an object, the compiler automatically converts the char to a Character for you. This feature is called auto boxing or unboxing, if the conversion goes the other way.";
	// N 23
	c = c + s + "char = 'my char';";
	k = k + s + "Normally, when we work with characters, we use primitive data types char.";
	// N 24
	c = c + s + "String greeting = \"Hello world!\";";
	k = k + s + "Creating Strings. Whenever it encounters a string literal in your code, the compiler creates a String object with its value in this case, \"Hello world!\".";
	// N 25
	c = c + s + "public class strDemo{\n\n\tpublic static void main(String args[]){\n\t\tchar[] hello_array = {'h', 'e', 'l', 'l', 'o', '.'};\n\t\tString hello_string = new String(hello_array);\n\t\tSystem.out.println(hello_string);\n\t}\n}";
	k = k + s + "As with any other object, you can create String objects by using the new keyword and a constructor. The String class has eleven constructors that allow you to provide the initial value of the string using different sources, such as an array of characters.	";
	// N 26
	c = c + s + "public class StringDemo {\n\n\tpublic static void main(String args[]) {\n\t\tString palindrome = \"Welcome to Java Tutorial\";\n\t\tint len = palindrome.length();\n\t\tSystem.out.println\"String Length is : \" + len);\n\t}\n}";
	k = k + s + "String Length. Methods used to obtain information about an object are known as accessor methods. One accessor method that you can use with strings is the length() method, which returns the number of characters contained in the string object.";
	// N 27
	c = c + s + "char string1 = 'Hello';\nchar string2 = ' World!';\nstring1.concat(string2);";
	k = k + s + "Concatenating Strings. The String class includes a method for concatenating two strings";
	// N 28
	c = c + s + "\"My name is \".concat(\"Steve wozniak\");";
	k = k + s + "Concatenating Strings. The String class includes a method for concatenating two strings";
	// N 29
	c = c + s + "\"Hello\" + \" world\" + \"!\"";
	k = k + s + "Strings are more commonly concatenated with the + operator";
	// N 30
	c = c + s + "public class StringDemo {\n\n\tpublic static void main(String args[]) {\n\t\tString string1 = \"to Java \";\n\t\tSystem.out.println(\"Welcome\" + string1 + \"Tutorial\");\n\t}\n}";
	k = k + s + "Strings are more commonly concatenated with the + operator";
	// N 31
	c = c + s + "public class TestArray {\n\n\tpublic static void main(String[] args) {\n\t\tdouble[] myList = {1.9, 2.9, 3.4, 3.5};\n\n\t\t// Print all the array elements\n\t\tfor (int i = 0; i < myList.length; i++) {\n\t\t\tSystem.out.println(myList[i] + \" \");\n\t\t}\n\t}\n}";
	k = k + s + "Processing Arrays. When processing array elements, we often use either for loop or foreach loop because all of the elements in an array are of the same type and the size of the array is known.";
	// N 32
	c = c + s + "public class TestArray {\n\n\tpublic static void main(String[] args) {\n\t\tdouble[] myList = {1.9, 2.9, 3.4, 3.5};\n\n\t\t// Summing all elements\n\t\tdouble total = 0;\n\t\tfor (int i = 0; i < myList.length; i++) {\n\t\t\ttotal += myList[i];\n\t\t}\n\t\tSystem.out.println(\"Total is \" + total);\n\t}\n}";
	k = k + s + "Processing Arrays. When processing array elements, we often use either for loop or foreach loop because all of the elements in an array are of the same type and the size of the array is known.";
	// N 33
	c = c + s + "public class TestArray {\n\tpublic static void main(String[] args) {\n\t\tdouble[] myList = {1.9, 2.9, 3.4, 3.5};\n\n\t\t// Finding the largest element\n\t\tdouble max = myList[0];\n\t\tfor (int i = 1; i < myList.length; i++) {\n\t\t\tif (myList[i] > max) max = myList[i];\n\t\t}\n\t\t\tSystem.out.println(\"Max is \" + max);\n\t}\n}";
	k = k + s + "Processing Arrays. When processing array elements, we often use either for loop or foreach loop because all of the elements in an array are of the same type and the size of the array is known.";
	// N 34
	c = c + s + "public class TestArray {\n\tpublic static void main(String[] args) {\n\t\tdouble[] myList = {1.9, 2.9, 3.4, 3.5};\n\n\t\t// Print all the array elements\n\t\tfor (double element: myList) {\n\t\t\tSystem.out.println(element);\n\t\t}\n\t}\n}";
	k = k + s + "The foreach Loops. JDK 1.5 introduced a new for loop known as foreach loop or enhanced for loop, which enables you to traverse the complete array sequentially without using an index variable.";
	// N 35
	c = c + s + "public static void printArray(int[] array) {\n\tfor (int i = 0; i < array.length; i++) {\n\t\tSystem.out.print(array[i] + \" \");\n\t}\n}";
	k = k + s + "Passing Arrays to Methods. Just as you can pass primitive type values to methods, you can also pass arrays to methods. For example, the method displays the elements in an int array:";
	// N 36
	c = c + s + "public static int[] reverse(int[] list) {\n\tint[] result = new int[list.length];\n\n\tfor (int i = 0, j = result.length - 1; i < list.length; i++, j--)\n\t{\n\t\tresult[j] = list[i];\n\t}\n\treturn result;\n}";
	k = k + s + "Returning an Array from a Method. A method may also return an array. For example, the method shown returns an array that is the reversal of another array:";
	// N 37
	c = c + s + "class Parent{\n\tpublic void p1(){\n\t\tSystem.out.println(\"Parent method\");\n\t}\n}\npublic class Child extends Parent {\n\tpublic void c1(){\n\t\tSystem.out.println(\"Child method\");\n\t}\n\tpublic static void main(String[] args){\n\t\tChild cobj = new Child();\n\t\tcobj.c1(); //method of Child class\n\t\tcobj.p1(); //method of Parent class\n\t}\n}";
	k = k + s + "Inheritance is one of the key features of Object Oriented Programming. Inheritance provided mechanism that allowed a class to inherit property of another class. When a Class extends another class it inherits all non-private members including fields and methods.";
	// N 38
	c = c + s + "class Vehicle{\n\tString vehicleType;\n}\npublic class Car extends Vehicle {\n\tString modelType;\n\tpublic void showDetail(){\n\t\tvehicleType = \"Car\"; //accessing Vehicle class member\n\t\tmodelType = \"sports\";\n\t\tSystem.out.println(modelType+\" \"+vehicleType);\n\t}\n\tpublic static void main(String[] args){\n\t\tCar car =new Car();\n\t\tcar.showDetail();\n\t}\n}";
	k = k + s + "Inheritance is one of the key features of Object Oriented Programming. Inheritance provided mechanism that allowed a class to inherit property of another class. When a Class extends another class it inherits all non-private members including fields and methods";
	// N 39
	c = c + s + "class Parent{\n\tString name;\n}\npublic class Child extends Parent {\n\tString name;\n\tpublic void details(){\n\t\tsuper.name = \"Parent\"; //refers to parent class member\n\t\tname = \"Child\";\n\t\tSystem.out.println(super.name+\" and \"+name);\n\t}\n\tpublic static void main(String[] args){\n\t\tChild cobj = new Child();\n\t\tcobj.details();\n\t}\n}";
	k = k + s + "super keyword. In Java, super keyword is used to refer to immediate parent class of a class. In other words super keyword is used by a subclass whenever it need to refer to its immediate super class.";
	// N 40
	c = c + s + "interface emp\n{ \n\tint emp_id = 1212;\n\tvoid id_show();\n}";
	k = k + s + "Interface is a pure abstract class. They are syntactically similar to classes, but you cannot create instance of an Interface and their methods are declared without any body. Interface is used to achieve complete abstraction in Java. When you create an interface it defines what a class can do without saying anything about how the class will do it.";
	// N 41
	c = c + s + "";
	k = k + s + "";
	
	
	
	
	//PRINT IN THE 
	$("#introWord").text(w);
	$("#lang").text(c);
	$("#know").text(k);
	$("#separator").text(s);
	$("#choiceLang").text("Java");
});
