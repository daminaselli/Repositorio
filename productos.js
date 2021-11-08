let listaObjetos;
if(localStorage.getItem("lista") == null){
    alert("No tenes productos")
}else {
    let listaObjetos = JSON.parse(localStorage.getItem("lista"))
}

listaObjetos.forEach(element => {
    console.log(element.nombre + " " + element.tamaño);
});