function sooyoungHover(){
	document.getElementById("sooyoung").addEventListener("mouseover", function() {
    	document.getElementById("bg").style.backgroundImage = "url(img/sooyoung.jpg)";
	});
	document.getElementById("sooyoung").addEventListener("mouseout", function() {
    	document.getElementById("bg").style.backgroundImage = "";
	});
}
function jessicaHover(){
	document.getElementById("jessica").addEventListener("mouseover", function() {
    	document.getElementById("bg").style.backgroundImage = "url(img/jessica.jpg)";
	});
	document.getElementById("jessica").addEventListener("mouseout", function() {
    	document.getElementById("bg").style.backgroundImage = "";
	});
}
function yuriHover(){
	document.getElementById("yuri").addEventListener("mouseover", function() {
    	document.getElementById("bg").style.backgroundImage = "url(img/yuri.jpg)";
	});
	document.getElementById("yuri").addEventListener("mouseout", function() {
    	document.getElementById("bg").style.backgroundImage = "";
	});
}
function tiffanyHover(){
	document.getElementById("tiffany").addEventListener("mouseover", function() {
    	document.getElementById("bg").style.backgroundImage = "url(img/tiffany.jpg)";
	});
	document.getElementById("tiffany").addEventListener("mouseout", function() {
    	document.getElementById("bg").style.backgroundImage = "";
	});
}
function seohyunHover(){
	document.getElementById("seohyun").addEventListener("mouseover", function() {
    	document.getElementById("bg").style.backgroundImage = "url(img/seohyun.jpg)";
	});
	document.getElementById("seohyun").addEventListener("mouseout", function() {
    	document.getElementById("bg").style.backgroundImage = "";
	});
}
function taeyeonHover(){
	document.getElementById("taeyeon").addEventListener("mouseover", function() {
    	document.getElementById("bg").style.backgroundImage = "url(img/taeyeon.jpg)";
	});
	document.getElementById("taeyeon").addEventListener("mouseout", function() {
    	document.getElementById("bg").style.backgroundImage = "";
	});
}
function yoonaHover(){
	document.getElementById("yoona").addEventListener("mouseover", function() {
    	document.getElementById("bg").style.backgroundImage = "url(img/yoona.jpg)";
	});
	document.getElementById("yoona").addEventListener("mouseout", function() {
    	document.getElementById("bg").style.backgroundImage = "";
	});
}
function sunnyHover(){
	document.getElementById("sunny").addEventListener("mouseover", function() {
    	document.getElementById("bg").style.backgroundImage = "url(img/sunny.jpg)";
	});
	document.getElementById("sunny").addEventListener("mouseout", function() {
    	document.getElementById("bg").style.backgroundImage = "";
	});
}
function hyoyeonHover(){
	document.getElementById("hyoyeon").addEventListener("mouseover", function() {
    	document.getElementById("bg").style.backgroundImage = "url(img/hyoyeon.jpg)";
	});
	document.getElementById("hyoyeon").addEventListener("mouseout", function() {
    	document.getElementById("bg").style.backgroundImage = "";
	});
}
$(document).ready(
	function() {
		sooyoungHover();
		jessicaHover();
		yuriHover();
		tiffanyHover();
		seohyunHover();
		taeyeonHover();
		yoonaHover();
		sunnyHover();
		hyoyeonHover();
	}
);
