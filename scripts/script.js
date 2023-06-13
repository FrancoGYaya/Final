/* Esta funcion cambia la barra de navegacion por una barra de menu cuando la pantalla es muy chica*/
function borger()
{
    var borger = document.getElementById("Nav");
    if (borger.className === "Barra")
    {
        borger.className += " responsive";  /*Se le agregue una clase que la hace responsive*/
    }
    else
    {
        borger.className = "Barra"; /*Si no, es el estado normal*/
    }
}

function flymetothemoon() /*Esta funcion devuelve al inicio de la pagina*/
{
    window.scrollTo({top: 0, behavior: 'smooth'});
    document.getElementById("Gaspi").play();
}
