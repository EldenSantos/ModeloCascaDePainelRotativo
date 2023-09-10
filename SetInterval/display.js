$(document).ready(function(){
	setInterval(function(){
		if($("#div1").is(":visible")){
			$("#div1").hide();
			$("#div2").show();
			$("#div3").hide();
			return;
		} 
		if($("#div2").is(":visible")){
			$("#div2").hide();
			$("#div1").hide();
			$("#div3").show();
			return;
		}
		else{ 
		 $("#div3").hide();
		 $("#div2").hide();
         $("#div1").show();	
		 
		}
	}, 2000);
	
});
