$(function(){
	//The separator in the ARRAY
	var s = ",";
	var code = "<title>This is a title</title>";
	var know = "A title in HTML";
	code = code + s + "<img /> <img /> <img />";
	know = know + s + "Print an Image in HTML";
	code = code + s + "<!DOCTYPE html>\n<html>\n\t<head>\n\t<meta charset=\"utf-8\" />\n\t<title>Title</title>\n</head>\n<body>\n\n</body>\n</html>";
	know = know + s + "Structuring basic html tag";
	code = code + s + "<p>Good morning! Welcome to my website.</p>";
	know = know + s + "A welcome paragraph";
	$("#lang").text(code);
	$("#know").text(know);
	$("#separator").text(s);
});
