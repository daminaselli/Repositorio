class User {
    constructor(nombre,pass){
        this.nombre = nombre;
        this.pass = pass
    }
}
class Producto{
    constructor(nombre, tamaño, precio, stock){
    this.nombre = nombre;
    this.tamaño = tamaño;
    this.precio = precio;
    this.stock = stock;

    }
}
const Damian = new User("damiannaselli","daminaselli")
let listaProdcutos;

if(localStorage.getItem ("lista") == null){
    listaProdcutos = []
} else {
    listaProdcutos = JSON.parse(localStorage.getItem ("lista"))
}


const listaProductos = []

const crearProducto = (nombre, tamaño, precio, stock) => {
    const producto = new Producto(nombre, tamaño, precio, stock)
    return producto

}


const confirmacionDeAcceso = () => {
    const nombre = prompt ("Ingresá tu nombre de usuario");
    const pass = prompt ("Ingresá tu contraseña")
    let bucle = true

    while(bucle){
        const nombre = prompt ("Ingresá tu nombre de usuario");
        const pass = prompt ("Ingresá tu contraseña")
    
        if(nombre === Damian.nombre && pass === Damian.pass){
            blucle = false
            
            let ciclo = true;
            while(ciclo){
                
                const nombre = prompt ("Ingrese nombre del producto")
                const tamaño = prompt ("Seleccione el tamaño")
                const precio = Number(prompt ("Ingrese precio del producto"))
                const stock = parseInt(prompt ("Ingrese la cantidad de productos"))

                listaProductos.push(crearProducto (nombre, tamaño, precio, stock))
                localStorage.setItem("lista", JSON.stringify(listaProductos))

                ciclo = confirm ("¿Desea agregar más productos?")


            }
           
            break;
        } else {
            alert("USUARIO INCORRECTO");
        }
    }
}

confirmacionDeAcceso()