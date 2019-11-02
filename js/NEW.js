function showLarge(e){
	var large=document.getElementById("large");
	var aa=e.target;
	large.src=aa.src;
  
}

var slides=document.querySelectorAll('#slides .slide');
var slidesM=document.querySelectorAll("#slides-mobile .slideM")
		var currentSlide =0;
		var i=0;
		function nextSlide(){
			// if (document.querySelectorAll(".sec2 .largePic")[0].style.display="block") {
			slides[currentSlide].className="slide";
			currentSlide = (currentSlide+1)%slides.length;
			slides[currentSlide].className = "slide showing";
			slideInterval = setTimeout(nextSlide,3500);
		
		
		}
		var currentSlideM =0;

		function nextSlideM(){
			// if(document.querySelectorAll(".about-txt-mobile")[0].style.display=="block")
			 
			slidesM[currentSlideM].className="slideM";
			currentSlideM = (currentSlideM+1)%slidesM.length;
			slidesM[currentSlideM].className = "slideM showingM";
			slideMInterval = setTimeout(nextSlideM,3500);

		
		}

			

function init(){
	var imgs = document.querySelectorAll(".smallPic img");
	for(var i= 0; i<imgs.length;i++){
		imgs[i].onclick=showLarge;
	}
	// var ham = document.getElementById("ham");
	// ham.onclick=shape;slideInterval = setTimeout(nextSlide,1000);
	slideInterval = setTimeout(nextSlide,3500);
	slideMInterval = setTimeout(nextSlideM,3500);
}

window.onload = init;