function bukvi()
	{
	txt=document.querySelector("textarea");	
	slovo=txt.value;
	for(i=0;i<slovo.length;i++)
		{
		el=document.createElement("div");
		el.innerHTML=slovo[i];
		document.body.append(el);
		}
	
	}
	window.onload=function() {
	console.log("ОКНО ЗАГРУЖЕНО!");
	
	}
		
	window.addEventListener("DOMContentLoaded", function() {
		console.log("ДОМ КОНТЕНТ ЛОАДЕД");
 	});
	
	console.log("ЗАГРУЗКА СКРИПТА");
	
	