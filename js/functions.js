/**"nombre",mail,naci,etc es un id que esta dentro de la class=iconos-datos en index.html 
 * name,correo,fecha,etc estan dentro de ls class=informacion
 SE INTENTO DE DOS FORMAS ANIMAR, ESTA MISMA SINTAXIS EN PAGINAS AUXILIARES E INDEPENDIENTE 
 FUNCIONO PERFECTO, EN ESTA NO*/

document.getElementById("nombre").onmouseenter = function () {
  document.getElementById("name").innerHTML="Hi, My name is Brett Co";  
  document.getElementById("name").style.display = "inline-flex";
    }
  /**document.getElementById("nombre").onmouseleave = function () {
     /** document.getElementById("demo").innerHTML=""  */ 
     /**  document.getElementById("name").style.display = "none"; }**/

/**document.addEventListener.onmouseover, function () {
  document.setAttribute('display',inline-flex )
}**/
/**document.getElementById("nombre").onmouseover = function () {
    document.getElementById("demo").innerHTML = "Hi, My name is Brett Cox"
}
document.getElementById("nombre").onmouseleave = function () {
    document.getElementById("demo").innerHTML = ""
}


document.getElementById("mail").addEventListener('onmouseover', function() {
  document.getElementById('correo').style.display='inline-flex';
} )
document.getElementById("mail").addEventListener('onmouseleave', function() {
  document.getElementById('correo').style.display='none';
} )


document.getElementById("naci").addEventListener('onmouseover', function() {
  document.getElementById('fecha').style.display='inline-flex';
} )
document.getElementById("naci").addEventListener('onmouseleave', function() {
  document.getElementById('fecha').style.display='none';
} )

document.getElementById("direccion").addEventListener('onmouseover', function() {
  document.getElementById('vivo').style.display='inline-flex';
} )
document.getElementById("direccion").addEventListener('onmouseleave', function() {
  document.getElementById('vivo').style.display='none';
} )

document.getElementById("celu").addEventListener('onmouseover', function() {
  document.getElementById('tele').style.display='inline-flex';
} )
document.getElementById("celu").addEventListener('onmouseleave', function() {
  document.getElementById('tele').style.display='none';
} )**/
