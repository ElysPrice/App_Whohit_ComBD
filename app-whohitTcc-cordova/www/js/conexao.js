var db = null;
function abrirBanco(){
		db =  window . sqlitePlugin . openDatabase ({
		    nome :  ' dbWhohit.db ' ,
		    location :  ' default ' ,
	  	});
	
}