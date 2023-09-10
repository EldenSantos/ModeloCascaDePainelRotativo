$(document).ready(function(){
	//Verifica se o carousel esta visivel e esconde ele
	 verificacao();

	
});



function ScrollDiv(){

   if(document.getElementById('table').scrollTop<(document.getElementById('table').scrollHeight-document.getElementById('table').offsetHeight)){-1
        document.getElementById('table').scrollTop=document.getElementById('table').scrollTop+1
    }
   else {
	 
	   //demora um tempo para voltar ao topo
	setTimeout(function(){
		document.getElementById('table').scrollTop=0;
		StopsetInterval(scrollauto);
		console.log("Topo");
		$("#table").hide();
		$("#div1").show();
		setTimeout(function(){verificacao(), 10});
	}, 5000);
	   
	}
}

 function StopsetInterval(scrollauto) {
		  clearInterval(scrollauto);
}

	 function verificacao() { setTimeout(function(){
							if($("#div1").is(":visible")){
								console.log("carousel");
								$("#table").hide();
								$("#div1").hide();
								$("#div2").show();
								//mostra a tabela e executa o rolamento da tabela
							setTimeout(function(){
								$("#div2").hide();
								$("#table").show();
			
							var scrollauto =	setInterval(window.ScrollDiv, 120);
							}, 6000);
			
			return;
		} 
}, 5000)
};