/* Закрашивание */
let finish = 0;
let start = -198;
let speed = 0.6;

let period = setInterval(function() {
	maskRect.setAttribute('x', start)
	  start = start + speed; 
	  if(start > finish) {
		clearInterval(period);
	  }
}, 10);

/* Отслеживание загрузки */
window.onload = function() {
	setTimeout(function() {
		document.getElementById("preloader_load").style.display = "none";
	}, 3380);
};
