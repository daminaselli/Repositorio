let listaObjetos;
if(localStorage.getItem("carrito") == null) {
    alert("Carrito Vacío")
}else {
    let listaObjetos = JSON.parse(localStorage.getItem("carrito"))
}

listaObjetos.forEach(element => {
    console.log(element.nombre + " " + element.precio);
});

const finalizarCompra =() =>{
    let monto = 0
    listaObjetos.forEach(e => {
        monto += e.precio
    })
    console.log("Felicitaciones! Tu compra fue aprobada");
    localStorage.removeItem("carrito")
}