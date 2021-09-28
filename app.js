const preloader = document.querySelector('.preloader');
// setTimeout(function(){ 
// 	preloader.classList.add("hide-preloader")
// }, 600);
window.addEventListener('load', function(e) {
	preloader.classList.add("hide-preloader")
});
const btn = document.querySelector("#main-btn");
const video = document.querySelector('video');
btn.addEventListener('click', function() {
	if(!btn.classList.contains("slide")){
		video.pause();
		btn.classList.toggle("slide");
	}
	else{
		video.play();
		btn.classList.toggle("slide");
	}
});
