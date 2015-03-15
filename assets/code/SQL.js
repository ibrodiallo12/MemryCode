$(function(){
	// Introduction word
	var w = "Memorize SQL statement now, your keyboard and coding fast!";
	//The separator in the ARRAY
	var s = "¢";
	// code in the ARRAY
	var c;
	// know not affecte in same ARRAY to code
	var k;
	// N 1
	c = c + s + "SELECT CustomerName,City FROM Customers;";
	k = k + s + "SELECT Column. The SQL statement selects the \"CustomerName\" and \"City\" columns from the \"Customers\" table";
	// N 2
	c = c + s + "SELECT * FROM Customers;";
	k = k + s + "SELECT *. The SQL statement selects all the columns from the \"Customers\" table";
	// N 3
	c = c + s + "SELECT DISTINCT City FROM Customers;";
	k = k + s + "SELECT DISTINCT. The SQL statement selects only the distinct values from the \"City\" columns from the \"Customers\" table";
	// N 4
	c = c + s + "SELECT DISTINCT column_name,column_name\nFROM table_name;";
	k = k + s + "The SQL SELECT DISTINCT Statement. In a table, a column may contain many duplicate values; and sometimes you only want to list the different (distinct) values.";
	// N 5
	c = c + s + "SELECT column_name,column_name\nFROM table_name\nWHERE column_name operator value";
	k = k + s + "The SQL WHERE Clause. The WHERE clause is used to extract only those records that fulfill a specified criterion.";
	// N 6
	c = c + s + "SELECT * FROM Customers\nWHERE Country='Mexico';";
	k = k + s + "WHERE Clause. The SQL statement selects all the customers from the country \"Mexico\", in the \"Customers\" table";
	// N 7
	c = c + s + "SELECT * FROM Customers\nWHERE CustomerID=1;";
	k = k + s + "Text Fields vs. Numeric Fields. SQL requires single quotes around text values (most database systems will also allow double quotes). However, numeric fields should not be enclosed in quotes";
	// N 8
	c = c + s + "SELECT * FROM Customers\nWHERE Country='Germany'\nAND City='Berlin';";
	k = k + s + "AND Operator. The SQL statement selects all customers from the country \"Germany\" AND the city \"Berlin\", in the \"Customers\" table:";
	// N 9
	c = c + s + "SELECT * FROM Customers\nWHERE City='Berlin'\nOR City='Paris';";
	k = k + s + "OR Operator. The SQL statement selects all customers from the city \"Berlin\" OR \"Paris\", in the \"Customers\" table";
	// N 10
	c = c + s + "SELECT * FROM Customers\nWHERE Country='Germany'\nAND (City='Berlin' OR City='Paris');";
	k = k + s + "Combining AND & OR. You can also combine AND and OR (use parenthesis to form complex expressions). The SQL statement selects all customers from the country \"Germany\" AND the city must be equal to \"Berlin\" OR \"Paris\", in the \"Customers\" table";
	// N 11
	c = c + s + "SELECT column_name,column_name\nFROM table_name\nORDER BY column_name,column_name ASC|DESC;";
	k = k + s + "The SQL ORDER BY Keyword. The ORDER BY keyword is used to sort the result-set by one or more columns. The ORDER BY keyword sorts the records in ascending order by default. To sort the records in a descending order, you can use the DESC keyword.";
	// N 12
	c = c + s + "SELECT * FROM Customers\nORDER BY Country;";
	k = k + s + "ORDER BY. The SQL statement selects all customers from the \"Customers\" table, sorted by the \"Country\" column";
	// N 13
	c = c + s + "SELECT * FROM Customers\nORDER BY Country DESC;";
	k = k + s + "ORDER BY DESC. The SQL statement selects all customers from the \"Customers\" table, sorted DESCENDING by the \"Country\" column";
	// N 14
	c = c + s + "SELECT * FROM Customers\nORDER BY Country,CustomerName;";
	k = k + s + "ORDER BY Several Columns. The SQL statement selects all customers from the \"Customers\" table, sorted by the \"Country\" and the \"CustomerName\" column";
	// N 15
	c = c + s + "";
	k = k + s + "";
	
	
	//PRINT IN THE 
	$("#introWord").text(w);
	$("#lang").text(c);
	$("#know").text(k);
	$("#separator").text(s);
	$("#choiceLang").text("SQL");
});
