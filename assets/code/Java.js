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
	c = c + s + "public class student{\nString name;\nint reg;\nString branch;\n\nvoid ca(){\n}\nvoid mte(){\n}\nvoid ete(){\n}\n}";
	k = k + s + "Classes in Java. A class is a blue print from which individual objects are created.";
	// N 3
	c = c + s + "public class collage{\n\tpublic collage(){}\n\tpublic collage(String name){\n\t\t// This constructor has one parameter, name.\n\t}\n}";
	k = k + s + "Constructors. When discussing about classes, one of the most important sub topic would be constructors. Every class has a constructor. If we do not explicitly write a constructor for a class the Java compiler builds a default constructor for that class.";
	// N 4
	c = c + s + "public class collage{\n\tpublic collage(String name){\n\t\t// This constructor has one parameter, name.\n\t\tSystem.out.println(\"Collage Name is :\" + name );\n\t}\n\tpublic static void main(String []args){\n\t\t// Following statement would create an object mycollage\n\t\tcollage mycollage = new collage( \"FAST\" );\n\t}\n}";
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
	c = c + s + "int decimal = 100;\n\tint octal = 0144;\n\tint hexa =  0x64;";
	k = k + s + "Prefix 0 is used to indicate octal and prefix 0x indicates hexadecimal when using these number systems for literals.";
	// N 9
	c = c + s + "\"Hello World\"\n\"two\nlines\"\n\"\"This is in quotes\"\"";
	k = k + s + "String and char types of literals can contain any Unicode characters.";
	// N 10
	c = c + s + "int a, b, c;// Declares three ints, a, b, and c.\nint a = 10, b = 10;// Example of initialization\nbyte B = 22;// initializes a byte type variable B.\ndouble pi = 3.14159;// declares and assigns a value of PI.\nchar a = 'a';// the char variable a iis initialized with value 'a'";
	k = k + s + "A variable provides us with named storage that our programs can manipulate. Each variable in Java has a specific type, which determines the size and layout of the variable's memory; the range of values that can be stored within that memory; and the set of operations that can be applied to the variable.";
	// N 11
	c = c + s + "public class Test{\n\tpublic void custAge(){\n\t\tint age = 0;\n\t\tage = age + 17;\n\t\tSystem.out.println(\"Customer age is : \" + age);\n\t}\n\tpublic static void main(String args[]){\n\t\tTest test = new Test();\n\t\ttest.custAge();\n\t}\n}";
	k = k + s + "Local variables are declared in methods, constructors, or blocks. Local variables are created when the method, constructor or block is entered and the variable will be destroyed once it exits the method, constructor or block.";
	// N 12
	c = c + s + "import java.io.*;\n\npublic class Employee{\n\t// salary  variable is a private static variable\n\tprivate static double salary;\n\n\t// DEPARTMENT is a constant\n\tpublic static final String DEPARTMENT = \"Development \";\n\t\tpublic static void main(String args[]){\n\t\t\tsalary = 1000;\n\t\t\tSystem.out.println(DEPARTMENT+\"average salary:\"+salary);\n\t}\n}";
	k = k + s + "Class/static variables. Class variables also known as static variables are declared with the static keyword in a class, but outside a method, constructor or a block. There would only be one copy of each class variable per class, regardless of how many objects are created from it. Static variables are rarely used other than being declared as constants. Constants are variables that are declared as public/private, final and static. Constant variables never change from their initial value.";
	// N 13
	c = c + s + "";
	k = k + s + "";
	// N 14
	c = c + s + "";
	k = k + s + "";
	// N 15
	c = c + s + "";
	k = k + s + "";
	
	
	
	
	//PRINT IN THE 
	$("#introWord").text(w);
	$("#lang").text(c);
	$("#know").text(k);
	$("#separator").text(s);
	$("#choiceLang").text("Java");
});
