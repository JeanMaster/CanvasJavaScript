function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}


var d = document.getElementById('dibujito');
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0
var yi, xf;
var colorcito = "#afa"

do
{
  yi = 10 * l;
  xf = 10 * (l+1);
  dibujarlinea(colorcito, 300, yi, xf,0);
l++
l++
}
while (l < 30)

dibujarlinea(colorcito, 1,1,1,300);
dibujarlinea(colorcito, 1,299,299,299);

while(l < lineas)
{
  yi = espacio * l;
  xf = espacio * (l+1);
  dibujarlinea(colorcito, 0, yi, xf,300);
  l++;
}

for(l= 0; l < lineas; l++)
{
  yi = espacio * l;
  xf = espacio * (l+1);
  dibujarlinea(colorcito, 0, yi, xf,300);
}


dibujarlinea(colorcito, 1,1,1,300);
dibujarlinea(colorcito, 1,299,299,299);
