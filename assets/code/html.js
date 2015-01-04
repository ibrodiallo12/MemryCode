$(function(){
	//The separator in the ARRAY
	var s = ",";
	// code in the ARRAY
	var c = "";
	// know not affecte in same ARRAY to code
	var k = "";
	
	// N 1	
	c = "<title>This is a title</title>";
	k = "Title of the page in HTML";
	// N 2
	c = c + s + "<img src=\"image.jpg\" />";
	k = k + s + "Print an Image .jpg in a page";
	// N 3
	c = c + s + "<!DOCTYPE html>\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>Title</title>\n\t</head>\n\t<body>\n\t</body>\n</html>";
	k = k + s + "Structuring basic html tag";
	// N 4
	c = c + s + "<p>Hello!<br />Welcome to my website.</p>";
	k = k + s + "Paragraph with a Line Break";
	// N 5
	c = c + s + "<meta charset=\"utf-8\" />";
	k = k + s + "Specify the character encoding for the HTML document";
	// N 6
	c = c + s + "<h1>This is heading 1</h1>\n<h2>This is heading 2</h2>\n<h3>This is heading 3</h3>\n<h4>This is heading 4</h4>\n<h5>This is heading 5</h5>\n<h6>This is heading 6</h6>";
	k = k + s + "The six different HTML headings";
	// N 7
	c = c + s + "<em>Emphazing text</em>";
	k = k + s + "Format text with a em tag in HTML";
	// N 8
	c = c + s + "<p>This is my first test.<br /> So please <em>make allowances</em></p>";
	k = k + s + "Paragraph with emphazing and Line Brand";
	// N 9
	c = c + s + "<p>This is my first test so please <strong>make allowances</strong></p>";
	k = k + s + "Pharagraph with a strongly emphazing";
	// N 10
	c = c + s + "<strong>Strongly emphazing</strong>";
	k = k + s + "Strongly emphazing in HTML";
	// N 11
	c = c + s + "<body>\n\t<h1>Very important title</h1>\n\t<h2>Important title</h2>\n\t<h3>Somewhat less important title (sub-title)</h3>\n\t<h4>Not very important title</h4>\n\t<h5>Not important title</h5>\n\t<h6>Title that is really not important at all</h6>\n</body>";
	k = k + s + "The six different HTML headings in body";
	// N 12
	c = c + s + "<h1>Very important title</h1>";
	k = k + s + "Heading 1 (Very important title) in HTML";
	// N 13
	c = c + s + "<h2>Important title</h2>";
	k = k + s + "Heading 2 in HTML (Important title)";
	// N 14
	c = c + s + "<h3>Somewhat less important title</h3>";
	k = k + s + "Heading 3 (Somewhat less important title a sub-title)";
	// N 15
	c = c + s + "<h4>Not very important title</h4>";
	k = k + s + "Heading 4 (Not very important title in HTML)";
	// N 16
	c = c + s + "<h5>Not important title</h5>";
	k = k + s + "Heading 5 (Not important title in HTML)";
	// N 17
	c = c + s + "<h6>Title that is really not important at all</h6>";
	k = k + s + "Heading 6 (Title that is really not important at all)";
	// N 18
	c = c + s + "<body>Content of my page</body>";
	k = k + s + "A body tag in HTML";
	// N 19
	c = c + s + "<!-- A comment -->";
	k = k + s + "A simple comment in HTML";
	// N 20
	c = c + s + "<img src=\"image.png\" />";
	k = k + s + "Print an Image .png in a page";
	// N 21
	c = c + s + "<img src=\"image.gif\" />";
	k = k + s + "Print an Image .gif in a page";
	// N 22
	c = c + s + "<link rel=\"stylesheet\" href=\"style.css\" />";
	k = k + s + "Call a stylesheet in HTML";
	// N 23
	c = c + s + "<p>This is my first test so please <mark>make allowances</mark></p>";
	k = k + s + "Marking text with mark tag in HTML";
	// N 24
	c = c + s + "<ul>\n\t<li>Coffee</li>\n\t<li>Tea</li>\n\t<li>Milk</li>\n</ul>";
	k = k + s + "An unordered HTML list";
	// N 25
	c = c + s + "<ol>\n\t<li>Coffee</li>\n\t<li>Tea</li>\n\t<li>Milk</li>\n</ol>";
	k = k + s + "An ordered HTML lists";
	// N 26
	c = c + s + "<ol start=\"50\">\n\t<li>Coffee</li>\n\t<li>Tea</li>\n\t<li>Milk</li>\n</ol>";
	k = k + s + "An ordered HTML lists start at number 50";
	// N 27
	c = c + s + "<a href=\"url\">link text</a>";
	k = k + s + "A hyperlink is an element a text or an image that you can click on and jump to another document.";
	// N 28
	c = c + s + "<a href=\"http://www.w3schools.com/html/\">Visit our HTML tutorial</a>";
	k = k + s + "The link text is the visible part (Visit the W3schools HTML tutorial).";
	// N 29
	c = c + s + "<a href=\"text.html\">My test page</a>";
	k = k + s + "A local link (link to the same web site) is specified with a relative URL (without http://www....).";
	// N 30
	c = c + s + "<a href=\"http://www.openclassrooms.com/\" target=\"_blank\">OC</a>";
	k = k + s + "The target attribute specifies where to open the linked document.";
	// N 31
	c = c + s + "<a href=\"test.html\">\n\t<img src=\"smiley.gif\" alt=\"Go now!\">\n</a>";
	k = k + s + "It is common to use images as links";
	// N 32
	c = c + s + "<a id=\"tips\">Useful Tips Section</a>";
	k = k + s + "Add an id attribute to a <a> element";
	// N 33
	c = c + s + "<p><b>This text is bold</b>.</p>";
	k = k + s + "The HTML <b> element defines bold text, without any extra importance.";
	// N 34
	c = c + s + "<p><i>This text is italic</i>.</p>";
	k = k + s + "The HTML <i> element defines italic text, without any extra importance.";
	// N 35
	c = c + s + "<h2>HTML <small>Small</small> Formatting</h2>";
	k = k + s + "The HTML <small> element defines small text";
	// N 36
	c = c + s + "<p>My favorite color is <del>blue</del> red.</p>";
	k = k + s + "The HTML <del> element defines deleted (removed) of text.";
	// N 37
	c = c + s + "<p>My favorite <ins>color</ins> is red.</p>";
	k = k + s + "The HTML <ins> element defines inserted (added) text.";
	// N 38
	c = c + s + "<p>This is <sub>subscripted</sub> text.</p>";
	k = k + s + "The HTML <sub> element defines subscripted text.";
	// N 39
	c = c + s + "<p>This is <sup>superscripted</sup> text.</p>";
	k = k + s + "The HTML <sup> element defines superscripted text.";
	// N 40
	c = c + s + "<p>WWF's goal is to:\n<q>Build a future where people live in harmony</q></p>";
	k = k + s + "The HTML <q> element defines a short quotation.";
	// N 41
	c = c + s + "<p>Here is a quote from WWF's website:</p>\n<blockquote cite=\"http://www.worldwildlife.org/who/index.html\">\nFor 50 years WWF has been protecting the future of nature.\nThe world's leading conservation organization\nWWF works in 100 countries and is supported by\n1.2 million members in the United States and\nclose to 5 million globally.\n</blockquote>";
	k = k + s + "The HTML <blockquote> element defines a quoted section.";
	// N 42
	c = c + s + "<p>The <abbr title=\"World Health Organization\">WHO</abbr>\nWas founded in 1948.</p>";
	k = k + s + "The HTML <abbr> element defines an abbreviation or an acronym.";
	// N 43
	c = c + s + "<p>The <dfn title=\"World Health Organization\">WHO</dfn>\nWas founded in 1948.</p";
	k = k + s + "The HTML <dfn> element defines the definition of a term or an abbreviation.";
	// N 44
	c = c + s + "<address>Written by Jon Doe.<br>\nVisit us at:<br>\nExample.com<br>\nBox 564 Disneyland<br>\nUSA\n</address>";
	k = k + s + "The HTML <address> element defines contact information (author/owner) of a document or article.";
	// N 45
	c = c + s + "<p><cite>The Scream</cite> by Edward Munch. Painted in 1893.</p>";
	k = k + s + "The HTML <cite> element defines the title of a work.";
	// N 46
	c = c + s + "<bdo dir=\"rtl\">This text will be written from right to left</bdo>";
	k = k + s + "The HTML <bdo> element defines bi-directional override.";
	// N 47
	c = c + s + "<code>\n\talert(\"Hello world\");\n</code>";
	k = k + s + "The HTML <code> element defines programming code sample:";
	// N 48
	c = c + s + "<!--[if IE 8]>\n\t.... some HTML here ....\n<![endif]-->";
	k = k + s + "You might stumble upon conditional comments in HTML";
	// N 49
	c = c + s + "<style>\n\tbody {background-color:lightgray}\n\th1{color:blue}\n\tp{color:green}\n</style>";
	k = k + s + "Internal - using a <style> element in the HTML <head> section";
	// N 50
	c = c + s + "<h1 style=\"color:blue\">This is a Blue Heading</h1>";
	k = k + s + "Inline styling is useful for applying a unique style to a single HTML element";
	
	//PRINT IN THE 
	$("#lang").text(c);
	$("#know").text(k);
	$("#separator").text(s);
});
