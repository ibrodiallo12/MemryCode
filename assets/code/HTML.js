$(function(){
	// Introduction word
	var w = "Easily and Quickly memorize HTML tag and your keyboard like a GEEK....";
	//The separator in the ARRAY
	var s = "¢";
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
	c = c + s + "<a href=\"http://www.w3schools.com/html/\">Visit a HTML tutorial</a>";
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
	k = k + s + "The HTML <b> element defines bold text without any extra importance.";
	// N 34
	c = c + s + "<p><i>This text is italic</i>.</p>";
	k = k + s + "The HTML <i> element defines italic text without any extra importance.";
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
	c = c + s + "<style>\n\tbody{background-color:lightgray}\n\th1{color:blue}\n\tp{color:green}\n</style>";
	k = k + s + "Internal - using a <style> element in the HTML <head> section";
	// N 50
	c = c + s + "<h1 style=\"color:blue\">This is a Blue Heading</h1>";
	k = k + s + "Inline styling is useful for applying a unique style to a single HTML element";
	// N 51
	c = c + s + "<table style=\"width:100%\">\n\t<tr>\n\t\t<td>Jill</td>\n\t\t<td>Smith</td>\n\t\t<td>50</td>\n\t</tr>\n\t<tr>\n\t\t<td>Eve</td>\n\t\t<td>Jackson</td>\n\t\t<td>94</td>\n\t</tr>\n</table>";
	k = k + s + "Defining HTML Tables";
	// N 52
	c = c + s + "<table border=\"1\" style=\"width:100%\">\n\t<tr>\n\t\t<td>Jill</td>\n\t\t<td>Smith</td>\n\t\t<td>50</td>\n\t</tr>\n\t<tr>\n\t\t<td>Eve</td>\n\t\t<td>Jackson</td>\n\t\t<td>94</td>\n\t</tr>\n</table>";
	k = k + s + "An HTML Table with a Border Attribute. If you do not specify a border for the table. The will be displayed without borders.";
	// N 53
	c = c + s + "<table style=\"width:100%\">\n\t<tr>\n\t\t<th>Name</th>\n\t\t<th colspan=\"2\">Telephone</th>\n\t</tr>\n\t<tr>\n\t\t<td>Bill Gates</td>\n\t\t<td>555 77 854</td>\n\t\t<td>555 77 855</td>\n\t</tr>\n</table>";
	k = k + s + "Table Cells that Span Many Columns. To make a cell span more than one column use the colspan attribute";
	// N 54
	c = c + s + "<table style=\"width:100%\">\n\t<tr>\n\t\t<th>Name:</th>\n\t\t<td>Bill Gates</td>\n\t</tr>\n\t<tr>\n\t\t<th rowspan=\"2\">Telephone:</th>\n\t\t<td>555 77 854</td>\n\t</tr>\n\t<tr>\n\t\t<td>555 77 855</td>\n\t</tr>\n</table>";
	k = k + s + "Table Cells that Span Many Rows. To make a cell span more than one row use the rowspan attribute";
	// N 55
	c = c + s + "<iframe src=\"URL\"></iframe>";
	k = k + s + "The syntax for adding an iframe";
	// N 56
	c = c + s + "<iframe src=\"demo_iframe.htm\" width=\"200\" height=\"200\"></iframe>";
	k = k + s + "Iframe - Set Height and Width. Use the height and width attributes to specify the size.";
	// N 57
	c = c + s + "<iframe src=\"demo_iframe.html\" frameborder=\"0\"></iframe>";
	k = k + s + "Iframe - Remove the Border. The frameborder attribute specifies whether or not to display a border around the iframe.";
	// N 58
	c = c + s + "<iframe src=\"demo_iframe.html\" name=\"iframe_a\"></iframe>\n<p><a href=\"http://www.w3schools.com\" target=\"iframe_a\">W3S.com</a></p>";
	k = k + s + "Use iframe as a Target for a Link. An iframe can be used as the target frame for a link.The target attribute of the link must refer to the name attribute of the iframe";
	// N 59
	c = c + s + "<script>\n\tdocument.getElementById(\"demo\").innerHTML = \"Hello JavaScript!\";\n</script>";
	k = k + s + "The HTML <script> Tag. The <script> tag is used to define a client-side script such as a JavaScript. The <script> element either contains scripting statements or it points to an external script file through the src attribute.";
	// N 60
	c = c + s + "<script>\n\tdocument.getElementById(\"demo\").innerHTML = \"Hello JavaScript!\";\n</script>\n<noscript>Sorry your browser does not support JavaScript!</noscript>";
	k = k + s + "The HTML <noscript> Tag. The <noscript> tag is used to provide an alternate content for users that have disabled scripts in their browser or have a browser that doesn't support client-side scripting.";
	// N 61
	c = c + s + "<!DOCTYPE html>\n\t<head>\n\t\t<link rel=\"stylesheet\" href=\"mystyle.css\">\n\t\t<title>Page Title</title>\n\t</head>";
	k = k + s + "The HTML <head> Element. The <head> element is a container for meta data (data about data).";
	// N 62
	c = c + s + "<meta name=\"keywords\" content=\"HTML CSS XML XHTML JavaScript\">";
	k = k + s + "The HTML <meta> Element. The <meta> element is used to specify page description keywords author and other metadata.";
	// N 63
	c = c + s + "<meta name=\"description\" content=\"Free Web tutorials on HTML and CSS\"/>";
	k = k + s + "Define a description of your web page";
	// N 64
	c = c + s + "<meta name=\"author\" content=\"Hege Refsnes\">";
	k = k + s + "Define the author of a page";
	// N 65
	c = c + s + "<base href=\"http://www.w3schools.com/images/\" target=\"_blank\">";
	k = k + s + "The HTML <base> Element. The <base> element specifies the base URL and base target for all relative URLs in a page";
	// N 66
	c = c + s + "< &lt; &#60;\n> &gt; &#62;\n& &amp; &#38;";
	k = k + s + "HTML Entities. Some characters are reserved in HTML. If you use the less than (<) or greater than (>) signs in your text. The browser might mix them with tags.";
	// N 67
	c = c + s + "<form>\n\t<!--form elements-->\n</form>";
	k = k + s + "The <form> Element HTML forms are used to collect user input. The <form> element defines an HTML form";
	// N 68
	c = c + s + "<form>\n\tFirst name:<br>\n\t<input type=\"text\" name=\"firstname\">\n<br>\n\tLast name:<br>\n\t<input type=\"text\" name=\"lastname\">\n</form>";
	k = k + s + "Text Input <input type=\"text\"> defines a one-line input field for text input";
	// N 69
	c = c + s + "<form>\n\t<input type=\"radio\" name=\"race\" value=\"human\" checked>Human\n<br>\n\t<input type=\"radio\" name=\"race\" value=\"animal\">Animal\n</form>";
	k = k + s + "<input type=\"radio\"> defines a radio button. Radio buttons let a user select ONE of a limited number of choices:";
	// N 70
	c = c + s + "<form action=\"action_page.php\">\n\tFirst name:<br>\n<input type=\"text\" name=\"firstname\" value=\"Mickey\">\n<br>\n\t<input type=\"submit\" value=\"Submit\">\n</form>";
	k = k + s + "The Submit Button <input type=\"submit\"> defines a button for submitting a form to a form-handler.The form-handler is typically a server page with a script for processing input data.";
	// N 71
	c = c + s + "<form action=\"action_page.php\" method=\"GET\">\n<!--OR-->\n<form action=\"action_page.php\" method=\"POST\">";
	k = k + s + "The Method Attribute. The method attribute specifies the HTTP method (GET or POST) to be used when submitting the forms.";
	// N 72
	c = c + s + "<form action=\"action_page.php\">\n\t<fieldset>\n\t\t<legend>Personal information:</legend>\n\t\tFirst name:<br>\n\t\t<input type=\"text\" name=\"firstname\" value=\"Mickey\">\n\t\t<br>\n\t\tLast name:<br>\n\t\t<input type=\"text\" name=\"lastname\" value=\"Mouse\">\n\t\t<br><br>\n\t\t<input type=\"submit\" value=\"Submit\">\n\t</fieldset>\n</form>";
	k = k + s + "Grouping Form Data with <fieldset>. The <fieldset> element groups related data in a form. The <legend> element defines a caption for the <fieldset> element.";
	// N 73
	c = c + s + "<form action=\"action_page.php\" method=\"GET\" target=\"_blank\" accept-charset=\"UTF-8\"\nenctype=\"application/x-www-form-urlencoded\" autocomplete=\"off\" novalidate>\n.\nform elements\n.\n</form>";
	k = k + s + "HTML Form Attributes. An HTML <form> element, with all possible attributes set, will look like this example";
	// N 74
	c = c + s + "<select name=\"cars\">\n\t<option value=\"volvo\">Volvo</option>\n\t<option value=\"saab\">Saab</option>\n\t<option value=\"fiat\">Fiat</option>\n\t<option value=\"audi\">Audi</option>\n</select>";
	k = k + s + "The <select> Element (Drop-Down List). The <select> element defines a drop-down list.";
	// N 75
	c = c + s + "<option value=\"fiat\" selected>Fiat</option>";
	k = k + s + "The <option> elements defines the options to select. The list will normally show the first item as selected.You can add a selected attribute to define a predefined option.";
	// N 76
	c = c + s + "<textarea name=\"message\" rows=\"10\" cols=\"30\">\n\tThe cat was playing in the garden.\n</textarea>";
	k = k + s + "The <textarea> Element. The <textarea> element defines a multi-line input field (a text area)";
	// N 77
	c = c + s + "<button type=\"button\" onclick=\"alert('Hello World!')\">Click Me!</button>";
	k = k + s + "The <button> Element. The <button> element defines a a clickable button";
	// N 78
	c = c + s + "<form action=\"action_page.php\">\n<input list=\"browsers\">\n<datalist id=\"browsers\">\n\t<option value=\"Internet Explorer\">\n\t<option value=\"Firefox\">\n\t<option value=\"Chrome\">\n\t<option value=\"Opera\">\n\t<option value=\"Safari\">\n</datalist>\n</form>";
	k = k + s + "HTML5 <datalist> Element. The <datalist> element specifies a list of pre-defined options for an <input> element. Users will see a drop-down list of pre-defined options as they input data. The list attribute of the <input> element, must refer to the id attribute of the <datalist> element.";
	// N 79
	c = c + s + "<form action=\"action_page.php\">\n\tUsername: <input type=\"text\" name=\"user\">\n\tEncryption: <keygen name=\"security\">\n\t<input type=\"submit\">\n</form>";
	k = k + s + "HTML5 <keygen> Element. The purpose of the <keygen> element is to provide a secure way to authenticate users. The <keygen> element specifies a key-pair generator field in a form. When the form is submitted, two keys are generated, one private and one public.";
	// N 80
	c = c + s + "<form action=\"action_page.php\"\noninput=\"x.value=parseInt(a.value)+parseInt(b.value)\">\n\t0\n\t<input type=\"range\"  id=\"a\" name=\"a\" value=\"50\">\n\t100 +\n\t<input type=\"number\" id=\"b\" name=\"b\" value=\"50\">\n\t=\n\t<output name=\"x\" for=\"a b\"></output>\n\t<br><br>\n\t<input type=\"submit\">\n</form>";
	k = k + s + "HTML5 <output> Element. The <output> element represents the result of a calculation (like one performed by a script).";
	// N 81
	c = c + s + "";
	k = k + s + "";
	// N 82
	c = c + s + "";
	k = k + s + "";
	// N 83
	c = c + s + "";
	k = k + s + "";
	// N 84
	c = c + s + "";
	k = k + s + "";
	// N 85
	c = c + s + "";
	k = k + s + "";
	// N 86
	c = c + s + "";
	k = k + s + "";
	// N 87
	c = c + s + "";
	k = k + s + "";
	// N 88
	c = c + s + "";
	k = k + s + "";
	// N 89
	c = c + s + "";
	k = k + s + "";
	// N 90
	c = c + s + "";
	k = k + s + "";
	// N 91
	c = c + s + "";
	k = k + s + "";
	// N 92
	c = c + s + "";
	k = k + s + "";
	// N 93
	c = c + s + "";
	k = k + s + "";
	// N 94
	c = c + s + "";
	k = k + s + "";
	// N 95
	c = c + s + "";
	k = k + s + "";
	// N 96
	c = c + s + "";
	k = k + s + "";
	// N 97
	c = c + s + "";
	k = k + s + "";
	// N 98
	c = c + s + "";
	k = k + s + "";
	// N 99
	c = c + s + "";
	k = k + s + "";
	// N 100
	c = c + s + "";
	k = k + s + "";
	
	
		
	//PRINT IN THE
	$("#introWord").text(w); 
	$("#lang").text(c);
	$("#know").text(k);
	$("#separator").text(s);
});
