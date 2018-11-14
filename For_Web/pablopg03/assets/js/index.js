var dot1 = document.getElementById('dot1');
var dot2 = document.getElementById('dot2');
var dot3 = document.getElementById('dot3');
var dot4 = document.getElementById('dot4');
var dot5 = document.getElementById('dot5');
setTimeout(function() {
	dot1.style.height = "15px";
	dot1.style.width = "15px";
},500);
setTimeout(function() {
	dot2.style.height = "20px";
	dot2.style.width = "20px";
},1000);
setTimeout(function() {
	dot3.style.height = "30px";
	dot3.style.width = "30px";
},1400);
setTimeout(function() {
	dot4.style.height = "35px";
	dot4.style.width = "35px";
},1800);
setTimeout(function() {
	dot5.style.height = "40px";
	dot5.style.width = "40px";
},2000);
setTimeout(function(){
	dot5.classList.remove('l5');
	dot1.classList.remove('l1');
	dot2.classList.remove('l2');
	dot3.classList.remove('l3');
	dot4.classList.remove('l4');

			dot1.style.position = "absolute";
	dot2.style.position = "absolute";
	dot3.style.position = "absolute";
	dot4.style.position = "absolute";
	dot5.style.position = "absolute";

},5500);
setTimeout(function(){
		dot1.style.top = "-60px";
	dot2.style.top = "-60px";
	dot3.style.top = "-60px";
	dot4.style.top = "-60px";
	dot5.style.top = "-60px";

},4998);
setTimeout(function(){

	dot1.style.top = "0px";
	dot1.style.left = "100px"
	dot2.style.top = "28px";
	dot2.style.left = "66px"
	dot3.style.top = "65px";
	dot3.style.left = "35px"
	dot4.style.top = "110px";
	dot4.style.left = "57px"
	dot5.style.top = "130px";
	dot5.style.left = "100px"
},6000);
setTimeout(function(){
	document.getElementById('text').innerHTML = "<b><color style='color:#c60909;'>JB<color></b>oss<sup>&copy;<sup>";
},10000);
	setTimeout(function(){
	document.getElementById('rh').style.display = "block";
},10000);