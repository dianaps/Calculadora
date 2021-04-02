
function raizc() {
    x=Math.sqrt(x) //resolver raíz cuadrada.
    pantalla.innerHTML=x; //mostrar en pantalla resultado
    op="no"; //quitar operaciones pendientes.
    xi=1; //se puede reiniciar la pantalla 
}

function porcent() { 
    x=x/100 //dividir por 100 el número
    pantalla.innerHTML=x; //mostrar en pantalla
    igualar() //resolver y mostrar operaciones pendientes
    xi=1 //reiniciar la pantalla
}

function opuest() { 
    nx=Number(x); //convertir en número
    nx=-nx; //cambiar de signo
    x=String(nx); //volver a convertir a cadena
    pantalla.innerHTML=x; //mostrar en pantalla.
}

function inve() {
    nx=Number(x);
    nx=(1/nx);
    x=String(nx);		 
    pantalla.innerHTML=x;
    xi=1; //reiniciar pantalla al pulsar otro número.
}
///////////////////////////////////////////////////////////
window.onload= function(){ 
    pantalla=document.getElementById("textoPantalla");
}

//x="0"; //número en pantalla
//xi=1; //hay numeros en la pantalla 1=si; 0=no;
coma=0; //si ya se insertó punto decimal 0=no, 1=si;
//ni=0; //número oculto o en espera.
//op="no"; //operación en curso; "no" =  sin operación.

function retro(){
    var cifras = pantalla.textContent;
    if(cifras!=""){
        pantalla.textContent = cifras.substring(0,cifras.length-1) //quitar el ultimo caracter
        
    }
    
}

function borradoParcial() {
    pantalla.textContent="";
    coma=0;				
}

function borradoTotal() {
    pantalla.textContent="";
    coma=0;  
}

//mostrar número en pantalla según se va escribiendo:
function numero(xx) { 
    switch(xx){
        case '.':   if(coma==0){
                        pantalla.textContent+=xx;
                        coma=1                
                    }
                    break;
        default:    pantalla.textContent+=xx;
                    break;
    }
    switch(pantalla.textContent){
        case ".":   pantalla.textContent="0.";
                    coma=1;
                    break;
        case "00":  pantalla.textContent="0";
                    break;
        case "0"+xx:pantalla.textContent=xx;
                    break;
    }
}

function operar(s) {
    var ultimo=pantalla.textContent.charAt(pantalla.textContent.length-1);
    if (!isNaN(ultimo)){
        pantalla.textContent+=s;
        coma=0;
    }
    
}	

function igualar() {
    var ultimo=pantalla.textContent.charAt(pantalla.textContent.length-1);
    if (!isNaN(ultimo)){
        pantalla.textContent=eval(pantalla.textContent.toString());
        coma=0;
    }
}