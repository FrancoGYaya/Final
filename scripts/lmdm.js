let oscuro = true;                      /*Variable de control*/

function cambiar()      /*Esta funcion es mia, la hice yo y estoy orgulloso*/
{                       /*No es la mejor ni la mas eficiente. Pero es mia*/
    var element = document.body;        /*Toma el documento como variable*/
    var t = document.getElementById("TRABAJO");     /*Una variable para controlar una parte de la pagina*/
    if (oscuro)     
    {   
        document.getElementById('AudioOscuro').play()        /*Reproduce el sonido del Capitan Price*/
        oscuro = false;
        setTimeout(function()   
        {
            element.classList.add("DM");            /*Se activa el modo oscuro de la clase DM luego de 3 segundos*/
            element.classList.toggle("DM #TRABAJO") /*Asi coordina con el audio*/
        }, (3 * 1000));                             /*La parte del Toggle es para un bloque en especifico*/
    }
    else                /*AudioClaro es el sonido de la FB, AudioOscuro es el sonido del Capitan Price*/
    {                   /*DM es el estilo oscuro dentro del CSS*/
        oscuro = true;
        document.getElementById('AudioClaro').play()        /*Lo mismo de arriba pero con la FB, pero a 2.5 segundos*/
        setTimeout(function()
        {
            element.classList.remove("DM");
            element.classList.toggle("DM #TRABAJO")
        }, (2.5 * 1000));
    }
}