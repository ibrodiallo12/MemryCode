$(function(){
////{//////////////////////////////////////////////////////////////////////////////////////////////////////////////////}////
///{/////////////////////////////////....................NOW LET'S BEGING............................/////////////////}///
//{//////////////////////////////////////////////////////////////////////////////////////////////////////////////////}//
		var myArray = [
			'<strong>\n\tun gras word\n</strong>',
			'<?php echo \"Hello word\"; ?>',
			'head>\n\t<title>Hello world!</title>',
			'<h1>Welcome</h1>',
			'<script> alert(Hello!); </script>'
		];
		var maxNumber = myArray.length;
		
		// FUNCTION RANDOM
		function rand(maxNumber, min){
				return Math.floor(Math.random() * (maxNumber - min + 1) + min);
		}
		randNumber = rand(maxNumber, 0);
		alert(myArray[randNumber]);
		alert(rand(maxNumber, 0));
		
		// CODE IN #CODE PRINTER
		var Codingcode = myArray[randNumber];
		// TEXT IN #CODE PRINTER
		$("#code").text(Codingcode);
		
		// CHANGE LANGUAGE
		$("#language").click(function(){
			var valOptionLanguage = $("#language").val();
			alert(valOptionLanguage);
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
					}, 2000);
				}
			}
			else{
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
				}
				else{
					$("#TsecLine").text(alrdyTsecLine);
				}
			}, 2200);
		}));
////{//////////////////////////////////////////////////////////////////////////////////////////////////////////////////}////
///{/////////////////////////////////.................IT IS DONE.. THANK...............................///////////////}///
//{//////////////////////////////////////////////////////////////////////////////////////////////////////////////////}//
});
