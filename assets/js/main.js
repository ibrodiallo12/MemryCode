$(function(){
////{//////////////////////////////////////////////////////////////////////////////////////////////////////////////////}////
///{/////////////////////////////////....................NOW LET'S BEGING............................/////////////////}///
//{//////////////////////////////////////////////////////////////////////////////////////////////////////////////////}//
		// the separator for the array with function split
		var separator = $("#separator").text();
		var lang = $("#lang").text();
		var splitingLang = lang.split(separator);	
		var myArray = splitingLang;
		
		var know = $("#know").text();
		var splitingKnow = know.split(separator);
		var myArrayKnow = splitingKnow;
		
		var maxNumber = myArray.length;
		// FUNCTION RANDOM
		function rand(maxNumber, min){
				return Math.floor(Math.random() * (maxNumber - min + 1) + min);
		}
		// FUNCTION if BROWSER HAVE AN ERROR
		function browserError(c){
			// if the browser have an error 
			if(!Codingcode){
				// FUNCTION RANDOM
				randNumber = rand(maxNumber, 0);
				// CODE IN #CODE PRINTER
				Codingcode = myArray[randNumber];
				// TEXT IN #CODE PRINTER
				$("#code").text(Codingcode);

				// CODE IN #KNOW PRINTER
				textKnow = myArrayKnow[randNumber];
				// TEXT IN #KNOW PRINTER
				$("#knowPrinter").text(textKnow);
				// SIGN LINK HREF #DETAILS
				$('#details').attr('href',"http://www.google.com/?q=" + textKnow);
				if(!Codingcode){
					// FUNCTION RANDOM
					randNumber = rand(maxNumber, 0);
					// CODE IN #CODE PRINTER
					Codingcode = myArray[randNumber];
					// TEXT IN #CODE PRINTER
					$("#code").text(Codingcode);

					// CODE IN #KNOW PRINTER
					textKnow = myArrayKnow[randNumber];
					// TEXT IN #KNOW PRINTER
					$("#knowPrinter").text(textKnow);
					// SIGN LINK HREF #DETAILS
					$('#details').attr('href',"http://www.google.com/?q=" + textKnow);
					if(!Codingcode){
						// FUNCTION RANDOM
						randNumber = rand(maxNumber, 0);
						// CODE IN #CODE PRINTER
						Codingcode = myArray[randNumber];
						// TEXT IN #CODE PRINTER
						$("#code").text(Codingcode);

						// CODE IN #KNOW PRINTER
						textKnow = myArrayKnow[randNumber];
						// TEXT IN #KNOW PRINTER
						$("#knowPrinter").text(textKnow);
						// SIGN LINK HREF #DETAILS
						$('#details').attr('href',"http://www.google.com/?q=" + textKnow);
					}
				}
			}
		}
		// END FUNCTION if BROWSER HAVE AN ERROR
		
		
		randNumber = rand(maxNumber, 0);
		//alert(myArray[randNumber]);
		//alert(rand(maxNumber, 0));
		
		// CODE IN #CODE PRINTER
		var Codingcode = myArray[randNumber];
		//call the function browserError
		browserError(Codingcode);
		// TEXT IN #CODE PRINTER
		$("#code").text(Codingcode);
		
		// CODE IN #KNOW PRINTER
		var textKnow = myArrayKnow[randNumber];
		// TEXT IN #KNOW PRINTER
		$("#knowPrinter").text(textKnow);
		
		// SIGN LINK HREF #DETAILS
		$('#details').attr('href',"http://www.google.com/?q=" + textKnow);
		
		// CHANGE LANGUAGE
		$("#language").click(function(){
			var valOptionLanguage = $("#language").val();
		 	$(location).attr('href', 'memrycode.php?lang=' + valOptionLanguage);
		});

	
		// ON CHANGE EDITOR GET INPUT AND CHECK
		editor.on('change', function(){
			tap = editor.getValue();
			//alert(tap);
			var T = tap.length;
			indexTap = T - 1;
			ValTap = tap.charAt(indexTap);
			indexCode = T - 1;
			var codeTap = Codingcode.charAt(indexCode);
			//alert(ValTap);
			if(codeTap == ValTap)
			{
				// IF USER DO IT!!
				if(Codingcode == tap){
					setTimeout(function(){
						editor.setValue("");
						$("#error").text("0");
						$("#TsecLine").text("R");
						$("#nbLine").text("0");
						$("#code").text("");
						//BEGING THE REPEAT
						// FUNCTION RANDOM
						randNumber = rand(maxNumber, 0);
						// CODE IN #CODE PRINTER
						Codingcode = myArray[randNumber];
						//call the function browserError
						browserError(Codingcode);
						// TEXT IN #CODE PRINTER
						$("#code").text(Codingcode);
	
						// CODE IN #KNOW PRINTER
						textKnow = myArrayKnow[randNumber];
						// TEXT IN #KNOW PRINTER
						$("#knowPrinter").text(textKnow);
						// SIGN LINK HREF #DETAILS
						$('#details').attr('href',"http://www.google.com/?q=" + textKnow);
						// BEGIN WITHOUT red border
						$(".navbar").css("border","2px solid white");
						// END OF THE REPEAT
					}, 2100);
				}
			}
		});
		
		// if AN ERROR
		editor.on('keypress',(function(){
			tap = editor.getValue();
			//alert(tap);
			var T = tap.length;
			indexTap = T - 1;
			ValTap = tap.charAt(indexTap);
			indexCode = T - 1;
			var codeTap = Codingcode.charAt(indexCode);
			
			if(ValTap != codeTap){
				var alrdyError = $("#error").text();
				var error = parseInt(alrdyError) + 1;
				$("#error").text(error);
			
				// IF an error var errr to true
				var errr = true;
			}
			// border red to textarea
			if(errr == true){
				$(".navbar").css("border","2px solid red");
			}
			else{//normal style for textarea
				$(".navbar").css("border","2px solid white");
			}
		}));
		
		// USER WANT THE NEXT CODE
		$("#next").click(function(){
			setTimeout(function(){
				editor.setValue("");
				$("#error").text("0");
				$("#TsecLine").text("0");
				$("#nbLine").text("0");
				$("#code").text("");
				//BEGING THE REPEAT
				// FUNCTION RANDOM
				randNumber = rand(maxNumber, 0);
				// CODE IN #CODE PRINTER
				Codingcode = myArray[randNumber];
				//call the function browserError
				browserError(Codingcode);
				// TEXT IN #CODE PRINTER
				$("#code").text(Codingcode);

				// CODE IN #KNOW PRINTER
				textKnow = myArrayKnow[randNumber];
				// TEXT IN #KNOW PRINTER
				$("#knowPrinter").text(textKnow);
				// SIGN LINK HREF #DETAILS
				$('#details').attr('href',"http://www.google.com/?q=" + textKnow);
				// BEGIN WITHOUT red border
				$(".navbar").css("border","2px solid white");
				// END OF THE REPEAT
			}, 2300);
			// SOLVE PROBLEM WITH setTimeout on reset for second per line code
			setTimeout(function(){
				$("#TsecLine").text("-1");
			}, 2000);
		});
		
		
		// ON CHANGE EDITOR GET KEY-ENTER
		editor.on('change',(function(){
			if(ValTap == '\n'){
				var alrdynbLine = $("#nbLine").text();
				var nbLine = parseInt(alrdynbLine) + 1;
				$("#nbLine").text(nbLine);
			} 
			if(Codingcode == tap){
				var alrdynbLine = $("#nbLine").text();
				var nbLine = parseInt(alrdynbLine) + 1;
				$("#nbLine").text(nbLine);
			}	
			//second per line of code
			var alrdyTsecLine = $("#TsecLine").text();
			var alrdyTsecLine = parseInt(alrdyTsecLine) + 1;
			TimeTo = setTimeout(function(){
				if($("#TsecLine").text() == "R"){
					$("#TsecLine").text("0");
					clearTimeout(TimeTo);
				}else{
					$("#TsecLine").text(alrdyTsecLine);
				}
			}, 2200);
		}));
		
////{//////////////////////////////////////////////////////////////////////////////////////////////////////////////////}////
///{/////////////////////////////////.................IT IS DONE.. THANK...............................///////////////}///
//{//////////////////////////////////////////////////////////////////////////////////////////////////////////////////}//
});
