bienvenida()
login()
menu()
insistir()

function bienvenida(){
    alert("Bienvenido a mi aplicación web")
    alert("Somos la ONG INVESTIGA UTP")
    alert("Le invitamos a comprar nuestras merch par asi ayudarnos")
}


function login(){
    let usuario = prompt("Ingrese su usuario")
    let contrasena = prompt("Ingrese su contrasena")
    
    let usuariobd = "michael"
    let contrasenabd = "michael123"
    
    while(usuariobd != usuario || contrasenabd != contrasena){
    alert("Vuelva a intentarlo")
    usuario = prompt("Ingrese su usuario") 
    contrasena = prompt("Ingrese su contrasena")
    }
}

function menu(){
    let producto
    let total

        producto = prompt("Nuestros productos son:\n1. Polos \n2. Gorras \n3. Tazas \n 4. Cuadernos")
        if(producto<0 || producto>4){
            alert("Producto incorrecto")
        }else if(producto == 1){
            total = agregarCarrito(50)
        }else if(producto == 2){
            total = agregarCarrito(30)        
        }else if(producto == 3){
            total = agregarCarrito(20)        
        }else if(producto == 4){
            total = agregarCarrito(10)        
        }
   
    alert("Su compra fue exitosa y es de: S/." + total)
}

function agregarCarrito(precio){
    let cantidad = Number(prompt("Ingrese la cantidad"))
    let total = precio*cantidad
    return total
}
function insistirUnaVez(){
    let decision
    decision= Number(prompt("Desea realizar otra compra? \nSi(1) \nNo(2)"))
    if(decision==1){
        menu()
    }else if(decision==2){
        alert("Muchas gracias por comprar")
    }
}


