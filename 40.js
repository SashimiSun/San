	let prnt = document.querySelector(".invisbl");
	let prnt1 = document.querySelector(".visbl");
	
	function clk (){
		
		if(prnt.className=="visbl"){
			prnt.className="invisbl"
		}else {prnt.className="visbl"}
		
		if(prnt.style.borderRadius=="0px"){
			prnt.style.borderRadius="50%"
		}else{prnt.style.borderRadius="0px"}
	}
	prnt.onclick=clk;
	
	function clk2 (){
		if(prnt1.className=="invisbl"){
			prnt1.className="visbl"
		}else {prnt1.className="invisbl"}
		
		if(prnt1.style.borderRadius=="0px"){
			prnt1.style.borderRadius="50%"
		}else{prnt1.style.borderRadius="0px"}
	}
	prnt1.onclick=clk2;