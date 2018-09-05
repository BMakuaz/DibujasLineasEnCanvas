var textLineas = document.getElementById("nLineas");
var boton = document.getElementById("botoncito");
var btnLinpiar = document.getElementById("limpiecito");

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var xi,xf,yi,yf;


boton.addEventListener("click", dibujoClick);

function dibujarLinas(color,xinicial,yinicial,xfinal,yfinal){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujoClick(){
	var x = parseInt(textLineas.value);
	var espacio =  (ancho-1)/x; 
	for (l = 0; l < x; l++) {
		xi = 0;
		yi = espacio * l;
		xf = espacio * (l + 1);
		yf = 300;
		dibujarLinas("#FF00FF",xi,yi,xf,yf);
	}
	for (var l2 = 0; l2 < x; l2++) {
		xi = 300;
		yi = espacio * l2;
		xf = espacio * (l2+1);
		yf = 0;
		dibujarLinas("#FF00FF",xi,yi,xf,yf);
	}
	
}

