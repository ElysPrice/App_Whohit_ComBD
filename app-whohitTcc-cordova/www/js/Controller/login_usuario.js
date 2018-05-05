 $(document).ready(function () {
 $("#entrar").click(function(){

	            	var l = $("login").val();
	            	var s = $("#senha").val();

	            	if (l == "whohit" && s == "12345"){
	            		console.log('OK');
	            		$(document).ready(function(){
	            			url = "#page6";
	            			$(location).attr("href", url);
	            		})
	            	}
	            	else {
	            		return false;
	            	}
	            });
});