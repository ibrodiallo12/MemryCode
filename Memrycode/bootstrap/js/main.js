$(function(){
	var Codingcode = '<strong>\n\tun gras word\n</strong>\n<strong>\n\tun gras word\n</strong>';
	
	$("#code").text(Codingcode);
	
	$("#language").click(function(){
		var valOptionLanguage = $("#language").val();
		alert(valOptionLanguage);
	});
	$("#repeat").click(function(){
		var valOptionRepeat = $("#repeat").val();
		alert(valOptionRepeat);
	});
	
	$('#codingTextarea').keypress(function(event){
		var keyEnter = (event.keyCode ? event.keyCode : event.which);
		if(keyEnter == '13'){
			var alrdynbLine = $("#nbLine").text();
			var nbLine = parseInt(alrdynbLine) + 1;
			$("#nbLine").text(nbLine);	
		} 
		//second per line of code
			var alrdyTsecLine = $("#TsecLine").text();
			var alrdyTsecLine = parseInt(alrdyTsecLine) + 1;
		setTimeout(function(){
			$("#TsecLine").text(alrdyTsecLine);
		}, 2200);
	
	});
	
	
	//The function for the tabulation
		(function($) {
			$.fn.xbsAreaTab= function(){
				return this.each(function() {
					$(this).on('keydown', function(e) {
						if(e.keyCode === 9) { 
							var start = this.selectionStart;
							var end = this.selectionEnd;
							var $this = $(this);
							var value = $this.val();

							$this.val(value.substring(0, start)
										+ "\t"
										+ value.substring(end));

							this.selectionStart = this.selectionEnd = start + 1;

							e.preventDefault();
						}
					});
				});
			}
		})(jQuery);
		$('#codingTextarea').xbsAreaTab();
		//End of function for tabulation
		
		
	$("#codingTextarea").keyup(function(){

		var tap = $("#codingTextarea").val();
		var T = tap.length;
		indexTap = T - 1;
		ValTap = tap.charAt(indexTap);
		
		var code = $("#code").text();
		var codeTap = code.charAt(indexTap);
		
		if(codeTap == ValTap)
		{
			
		}
		else
		{
			var alrdyError = $("#error").text();
			var error = parseInt(alrdyError) + 1;
			$("#error").text(error);
			
			var errr = true;
		}
		// border red to textarea
		if(errr == true)
		{
			$("#codingTextarea").css("border","1px solid red");
		}
		else
		{//normal style for textarea
			$("#codingTextarea").css("border","1px solid white");
		}
	});
	
});
