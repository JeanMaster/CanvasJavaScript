function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 1;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarestrella(color, xinicial, yinicial,xfinal, yfinal)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicial,yinicial);
lienzo.lineTo(xfinal,yfinal);
lienzo.stroke();
lienzo.closePath();
}


var colorz = document.getElementById("text_color");
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);


var d = document.getElementById('dibujito');
var ancho = d.width;
var lienzo = d.getContext("2d");




function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var exf,eyf;
  var colorcito = text_color.value
  var espacio = ancho / lineas;

  while(l < lineas)
  {
    yi = espacio * l;
    xf = espacio * (l+1);
    exf= espacio * l;
    eyf= espacio *(l+1);
    dibujarlinea(colorcito, 0, yi, xf,300);
    dibujarlinea(colorcito, 300, yi, xf,0);
    dibujarestrella("#add8e6", 300 ,0, exf,eyf);
    dibujarestrella("#add8e6", 0 ,300, exf,eyf);
      l++;
  }

}
