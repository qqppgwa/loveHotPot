






function showLarge(e){
	var large=document.getElementById("large");
	var aa=e.target;
	large.src=aa.src;
  
}

function init(){
	var imgs = document.querySelectorAll(".smallPic img");
	for(var i= 0; i<imgs.length;i++){
		imgs[i].onclick=showLarge;
	}
}

window.onload = init;