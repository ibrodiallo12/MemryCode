$(function(){
	//INTRODUCTION WORD
	var w = "Memorize keyboard and css propriety and make a page beautiful!";
	//The separator in the ARRAY
	var s = "¢";
	// code in the ARRAY
	var c;
	// know not affecte in same ARRAY to code
	var k;
	
	// N 1	
	c = "p {\n\tcolor: red;\n\ttext-align: center;\n}";
	k = "CSS Example. In the example all <p> elements will be center-aligned, with a red text color";
	// N 2
	c = c + s + "p {\n\tcolor: red;\n\t/* This is a single-line comment */\n\ttext-align: center;\n}";
	k = k + s + "CSS Comments. Comments are used to explain your code, and may help you when you edit the source code at a later date. Comments are ignored by browsers.";
	// N 3
	c = c + s + "#para1 {\n\ttext-align: center;\n\tcolor: red;\n}";
	k = k + s + "The id Selector. The id selector uses the id attribute of an HTML element to select a specific element. An id should be unique within a page, so the id selector is used if you want to select a single, unique element. To select an element with a specific id, write a hash character, followed by the id of the element.";
	// N 4
	c = c + s + ".center {\n\ttext-align: center;\n\tcolor: red;\n}";
	k = k + s + "The class Selector. The class selector selects elements with a specific class attribute. To select elements with a specific class, write a period character, followed by the name of the class. In the example. all HTML elements with class=\"center\" will be center-aligned";
	// N 5
	c = c + s + "<head>\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">\n</head>";
	k = k + s + "External Style Sheet. An external style sheet is ideal when the style is applied to many pages. With an external style sheet, you can change the look of an entire Web site by changing just one file. Each page must include a link to the style sheet with the <link> tag. The <link> tag goes inside the head section";
	// N 6
	c = c + s + "body {\n\tbackground-color: lightblue;\n}\nh1 {\n\tcolor: navy;\n\tmargin-left: 20px;\n}";
	k = k + s + "External Style Sheet. An external style sheet can be written in any text editor. The file should not contain any html tags. The style sheet file must be saved with a .css extension. An example of a style sheet file called \"myStyle.css\", is shown below:";
	// N 7
	c = c + s + "<head>\n<style>\nbody {\n\tbackground-color: linen;\n}\nh1 {\n\tcolor: maroon;\n}\n</style>\n</head>";
	k = k + s + "Internal Style Sheet. An internal style sheet should be used when a single document has a unique style. You define internal styles in the head section of an HTML page, inside the <style> tag, like this:";
	// N 8
	c = c + s + "<h1 style=\"color:blue; margin-left:30px;\">This is a heading.</h1>";
	k = k + s + "Inline Styles. An inline style loses many of the advantages of a style sheet (by mixing content with presentation). Use this method sparingly! To use inline styles, add the style attribute to the relevant tag. The style attribute can contain any CSS property. The example shows how to change the color and the left margin of a h1 element:";
	// N 9
	c = c + s + "h1 {\n\tcolor: navy;\n\tmargin-left: 20px;\n}\n/* then */\nh1 {\n\tcolor: orange;\n}";
	k = k + s + "Multiple Style Sheets. If some properties have been set for the same selector in different style sheets, the values will be inherited from the more specific style sheet. For example, assume that an external style sheet has the following properties for the <h1> element";
	// N 10
	c = c + s + "body {\n\tbackground-color: #b0c4de;\n}";
	k = k + s + "Background Color. The background-color property specifies the background color of an element.The background color of a page is set like this example";
	// N 11
	c = c + s + "body {\n\tbackground-image: url(\"paper.gif\");\n}";
	k = k + s + "Background Image. The background-image property specifies an image to use as the background of an element. By default, the image is repeated so it covers the entire element. The background image for a page can be set like this example";
	// N 12
	c = c + s + "body {\n\tbackground-image: url(\"gradient_bg.png\");\n}";
	k = k + s + "Background Image - Repeat Horizontally or Vertically. By default, the background-image property repeats an image both horizontally and vertically. Some images should be repeated only horizontally or vertically, or they will look strange, like this example";
	// N 13
	c = c + s + "body {\n\tbackground-image: url(\"gradient_bg.png\");\n\tbackground-repeat: repeat-x;\n}";
	k = k + s + "Background Image - Repeat Horizontally or Vertically.If the image is repeated only horizontally (repeat-x), the background will look better";
	// N 14
	c = c + s + "body {\n\tbackground-image: url(\"img_tree.png\");\n\tbackground-repeat: no-repeat;\n}";
	k = k + s + "Background Image - Set position and no-repeat. Showing the image only once is specified by the background-repeat property";
	// N 15
	c = c + s + "body {\n\tbackground: #ffffff url(\"img_tree.png\") no-repeat right top;\n}";
	k = k + s + "Background - Shorthand property. To shorten the code, it is also possible to specify all the properties in one single property. This is called a shorthand property.";
	// N 16
	c = c + s + "h1 {\n\ttext-align: center;\n}";
	k = k + s + "Text Alignment. The text-align property is used to set the horizontal alignment of a text. Text can be centered, or aligned to the left or right, or justified.";
	// N 17
	c = c + s + "p.date {\n\ttext-align: right;\n}";
	k = k + s + "Text Alignment. The text-align property is used to set the horizontal alignment of a text. Text can be centered, or aligned to the left or right, or justified.";
	// N 18
	c = c + s + "p.main {\n\ttext-align: justify;\n}";
	k = k + s + "Text Alignment. The text-align property is used to set the horizontal alignment of a text. Text can be centered, or aligned to the left or right, or justified.";
	// N 19
	c = c + s + "p.main {\n\ttext-align: left;\n}";
	k = k + s + "Text Alignment. The text-align property is used to set the horizontal alignment of a text. Text can be centered, or aligned to the left or right, or justified.";
	// N 20
	c = c + s + "a {\n\ttext-decoration: none;\n} ";
	k = k + s + "Text Decoration. The text-decoration property is used to set or remove decorations from text. The text-decoration property is mostly used to remove underlines from links for design purposes";
	// N 21
	c = c + s + "h1 {\n\ttext-decoration: overline;\n}";
	k = k + s + "Text Decoration. The text-decoration property is used to set or remove decorations from text. It can also be used to decorate text.";
	// N 22
	c = c + s + "h2 {\n\ttext-decoration: line-through;\n}";
	k = k + s + "Text Decoration. The text-decoration property is used to set or remove decorations from text. It can also be used to decorate text.";
	// N 23
	c = c + s + "h3 {\n\ttext-decoration: underline;\n}";
	k = k + s + "Text Decoration. The text-decoration property is used to set or remove decorations from text. It can also be used to decorate text.";
	// N 24
	c = c + s + "p.uppercase {\n\ttext-transform: uppercase;\n}";
	k = k + s + "Text Transformation. The text-transform property is used to specify uppercase and lowercase letters in a text. It can be used to turn everything into uppercase or lowercase letters, or capitalize the first letter of each word.";
	// N 25
	c = c + s + "p.lowercase {\n\ttext-transform: lowercase;\n}";
	k = k + s + "Text Transformation. The text-transform property is used to specify uppercase and lowercase letters in a text. It can be used to turn everything into uppercase or lowercase letters, or capitalize the first letter of each word.";
	// N 26
	c = c + s + "p.capitalize {\n\ttext-transform: capitalize;\n}";
	k = k + s + "Text Transformation. The text-transform property is used to specify uppercase and lowercase letters in a text. It can be used to turn everything into uppercase or lowercase letters, or capitalize the first letter of each word.";
	// N 27
	c = c + s + "p {\n\ttext-indent: 50px;\n}";
	k = k + s + "Text Indentation. The text-indent property is used to specify the indentation of the first line of a text.";
	// N 28
	c = c + s + "p {\n\tfont-family: \"Times New Roman\", Times, serif;\n}";
	k = k + s + "Font Family. The font family of a text is set with the font-family property. The font-family property should hold several font names as a \"fallback\" system. If the browser does not support the first font, it tries the next font.";
	// N 29
	c = c + s + "p.normal {\n\tfont-style: normal;\n}";
	k = k + s + "Font Style. The font-style property is mostly used to specify italic text. This property has three values: normal - The text is shown normally. italic - The text is shown in italics. oblique - The text is \"leaning\" (oblique is very similar to italic, but less supported)";
	// N 30
	c = c + s + "p.oblique {\n\tfont-style: oblique;\n}";
	k = k + s + "Font Style. The font-style property is mostly used to specify italic text. This property has three values: normal - The text is shown normally. italic - The text is shown in italics. oblique - The text is \"leaning\" (oblique is very similar to italic, but less supported)";
	// N 31
	c = c + s + "p.italic {\n\tfont-style: italic;\n}";
	k = k + s + "Font Style. The font-style property is mostly used to specify italic text. This property has three values: normal - The text is shown normally. italic - The text is shown in italics. oblique - The text is \"leaning\" (oblique is very similar to italic, but less supported)";
	// N 32
	c = c + s + "p {\n\tfont-size: 14px;\n}";
	k = k + s + "Font Size. The font-size property sets the size of the text. Being able to manage the text size is important in web design. Set Font Size With Pixels;"
	// N 33
	c = c + s + "h1 {\n\tfont-size: 2.5em; /* 40px/16=2.5em */\n}";
	k = k + s + "Font Size. The font-size property sets the size of the text. Being able to manage the text size is important in web design. Set Font Size With Em.";
	// N 34
	c = c + s + "body {\n\tfont-size: 100%;\n}\nh1 {\n\tfont-size: 2.5em;\n}";
	k = k + s + "Font Size. Use a Combination of Percent and Em. The solution that works in all browsers, is to set a default font-size in percent for the <body> element:";
	// N 35
	c = c + s + "/* unvisited link */\na:link {\n\tcolor: #FF0000;\n}";
	k = k + s + "Styling Links. Links can be styled with any CSS property (e.g. color, font-family, background, etc.). In addition, links can be styled differently depending on what state they are in.";
	// N 36
	c = c + s + "/* visited link */\na:visited {\n\tcolor: #00FF00;\n}";
	k = k + s + "Styling Links. Links can be styled with any CSS property (e.g. color, font-family, background, etc.). In addition, links can be styled differently depending on what state they are in.";
	// N 37
	c = c + s + "/* mouse over link */\na:hover {\n\tcolor: #FF00FF;\n}";
	k = k + s + "Styling Links. Links can be styled with any CSS property (e.g. color, font-family, background, etc.). In addition, links can be styled differently depending on what state they are in.";
	// N 38
	c = c + s + "/* selected link */\na:active {\n\tcolor: #0000FF;\n}";
	k = k + s + "Styling Links. Links can be styled with any CSS property (e.g. color, font-family, background, etc.). In addition, links can be styled differently depending on what state they are in.";
	// N 39
	c = c + s + "ul.a {\n\tlist-style-type: circle;\n}";
	k = k + s + "Different List Item Markers. The type of list item marker is specified with the list-style-type property";
	// N 40
	c = c + s + "ul.b {\n\tlist-style-type: square;\n}";
	k = k + s + "Different List Item Markers. The type of list item marker is specified with the list-style-type property";
	// N 41
	c = c + s + "ol.c {\n\tlist-style-type: upper-roman;\n}";
	k = k + s + "Different List Item Markers. The type of list item marker is specified with the list-style-type property";
	// N 42
	c = c + s + "ol.d {\n\tlist-style-type: lower-alpha;\n}";
	k = k + s + "Different List Item Markers. The type of list item marker is specified with the list-style-type property";
	// N 43
	c = c + s + "ul {\n\tlist-style-image: url(\'sqpurple.gif\');\n}";
	k = k + s + "An Image as The List Item Marker. To specify an image as the list item marker, use the list-style-image property";
	// N 44
	c = c + s + "ul {\n\tlist-style-type: none;\n\tpadding: 0px;\n\tmargin: 0px;\n}";
	k = k + s + "Crossbrowser Solution. The example displays the image-marker equally in all browsers";
	// N 45
	c = c + s + "ul li {\n\tbackground-image: url(sqpurple.gif);\n\tbackground-repeat: no-repeat;\n\tbackground-position: 0px center;\n\tpadding-left: 15px;\n}";
	k = k + s + "Crossbrowser Solution. The example displays the image-marker equally in all browsers";
	// N 46
	c = c + s + "ul {\n\tlist-style: square inside url(\"sqpurple.gif\");\n}";
	k = k + s + "List - Shorthand property. The list-style property is a shorthand property. It is used to set all the list properties in one declaration";
	// N 47
	c = c + s + "table, th, td {\n\tborder: 1px solid black;\n}";
	k = k + s + "Table Borders. To specify table borders in CSS, use the border property. The example specifies a black border for <table>, <th>, and <td> elements";
	// N 48
	c = c + s + "table {\n\tborder-collapse: collapse;\n}";
	k = k + s + "Collapse Borders. The border-collapse property sets whether the table borders are collapsed into a single border or separated";
	// N 49
	c = c + s + "table, th, td {\n\tborder: 1px solid black;\n}";
	k = k + s + "Collapse Borders. The border-collapse property sets whether the table borders are collapsed into a single border or separated";
	// N 50
	c = c + s + "table {\n\twidth: 100%;\n}\nth {\n\theight: 50px;\n}";
	k = k + s + "Table Width and Height. Width and height of a table is defined by the width and height properties.The example sets the width of the table to 100%, and the height of the <th> elements to 50px";
	// N 51
	c = c + s + "th {\n\ttext-align: left;\n}";
	k = k + s + "Horizontal Text Alignment. The text-align property sets the horizontal alignment, like left, right, or center.";
	// N 52
	c = c + s + "td {\n\theight: 50px;\n\tvertical-align: bottom;\n}";
	k = k + s + "Vertical Text Alignment. The vertical-align property sets the vertical alignment, like top, bottom, or middle.";
	// N 53
	c = c + s + "td {\n\tpadding: 15px;\n}";
	k = k + s + "Table Padding. To control the space between the border and content in a table, use the padding property on <td> and <th> elements:";
	// N 54
	c = c + s + "table, td, th {\n\tborder: 1px solid green;\n}\nth {\n\tbackground-color: green;\n\tcolor: white;\n}";
	k = k + s + "Table Color. The example below specifies the color of the borders, and the text and background color of <th> elements:";
	// N 55
	c = c + s + "div {\n\twidth: 320px;\n\tpadding: 10px;\n\tborder: 5px solid gray;\n\tmargin: 0;\n}";
	k = k + s + "Width and Height of an Element. In order to set the width and height of an element correctly in all browsers, you need to know how the box model works.";
	// N 56
	c = c + s + "p.one {\n\tborder-style: solid;\n\tborder-width: 5px;\n}";
	k = k + s + "border-style values and Border Width. The border-width property is used to set the width of the border.";
	// N 57
	c = c + s + "p.two {\n\tborder-style: solid;\n\tborder-width: medium;\n}";
	k = k + s + "border-style values and Border Width. The border-width property is used to set the width of the border";
	// N 58
	c = c + s + "p.one {\n\tborder-style: solid;\n\tborder-color: red;\n}";
	k = k + s + "Border Color. The border-color property is used to set the color of the border.";
	// N 59
	c = c + s + "p.two {\n\tborder-style: solid;\n\border-color: #98bf21;\n}";
	k = k + s + "Border Color. The border-color property is used to set the color of the border.";
	// N 60
	c = c + s + "p {\n\tborder-top-style: dotted;\n\tborder-right-style: solid;\n\tborder-bottom-style: dotted;\n\tborder-left-style: solid;\n}";
	k = k + s + "Border - Individual sides. In CSS it is possible to specify different borders for different sides:";
	// N 61
	c = c + s + "p {\n\tborder: 5px solid red;\n}";
	k = k + s + "Border - Shorthand property. As you can see from the examples above, there are many properties to consider when dealing with borders.";
	
	
	//PRINT IN THE 
	$("#introWord").text(w);
	$("#lang").text(c);
	$("#know").text(k);
	$("#separator").text(s);
});
