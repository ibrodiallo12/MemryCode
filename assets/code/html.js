$(function(){
	//The separator in the ARRAY
	var s = ",";
	var code = "<strong>\n\tun gras word\n</strong>";
	var know = "un simple strong";
	code = code + s + "<?php echo \"Hello word\"; ?>";
	know = know + s + "Affiche un Hello world en php";
	code = code + s + "<head>\n\t<title>Hello world!</title></head>";
	know = know + s + "Une balise head et title en html";
	code = code + s + "<h1>Welcome</h1>";
	know = know + s + "un gros title de niveau 1 en html";
	code = code + s + "<script> alert(\"Hello!\"); </script>";
	know = know + s + "un script JavaScript pour afficher une alert Hello";
	$("#lang").text(code);
	$("#know").text(know);
	$("#separator").text(s);
});
