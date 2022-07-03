let marcaAuto = document.querySelector("#autoSelection")    
let operacion = document.querySelector("#operacionSelection")    
let formulario = document.querySelector("#formulario")
let btnSubmit = document.querySelector("#submit")
let mensaje = document.querySelector("#mensaje")
let ultimasBusquedas = document.querySelector("#ultimasBusquedas")
let verMas = document.querySelector("#verMas")
                    
                    
                    
                  

btnSubmit.addEventListener("click", (e)=> {
    e.preventDefault()
    if (infoAutos.find( p => p.marca.toLocaleLowerCase() === marcaAuto.value.toLocaleLowerCase()) && operacion.value.toLocaleLowerCase() == "seguro"){
        let resultado = infoAutos.find( p => p.marca.toLocaleLowerCase() === marcaAuto.value.toLocaleLowerCase())
        let seguro = parseInt(resultado.precio - (resultado.año * 3))
        Swal.fire({
         title: resultado.marca +" "+ resultado.modelo,
         text: "El seguro sale $" + seguro + " por mes.",
         icon: 'success',
         color:"#100423",
         iconColor:"#32424",
         confirmButtonColor: "#fa0050",
         confirmButtonText: 'Aceptar',
         background:"#fff"
          })

    //  alert ("El seguro del " + resultado.marca +" "+ resultado.modelo + " sale $" + seguro + " por mes.")
        //mensaje.innerHTML = `<h2>El seguro del ${resultado.marca} ${resultado.modelo} sale $${seguro} por mes.</h2> `
        //guardaBusqueda()
        guardaBusquedaJSON()
     } else if
        (infoAutos.find( p => p.marca.toLocaleLowerCase() === marcaAuto.value.toLocaleLowerCase()) && operacion.value.toLocaleLowerCase() == "precio final"){
        let resultado = infoAutos.find( p => p.marca.toLocaleLowerCase() === marcaAuto.value.toLocaleLowerCase())
        let precioFinal = parseInt(resultado.precio * resultado.iva)

        Swal.fire({
          title: resultado.marca +" "+ resultado.modelo,
          text: "El precio final es de $" + precioFinal + " (IVA incluido)",
          icon: 'success',
          color:"#100423",
          iconColor:"#32424",
          confirmButtonColor: "#fa0050",
          confirmButtonText: 'Aceptar',
          background:"#fff"
           })

        //mensaje.innerHTML = `<h2>El precio final del ${resultado.marca} ${resultado.modelo} es de $${precioFinal} (IVA incluido).</h2> `  
        //guardaBusqueda()
        guardaBusquedaJSON()
       // alert ("El precio final del " + resultado.marca +" "+ resultado.modelo + " es de $" + precioFinal + " (IVA incluido)")
        } 
        else if
        ( marcaAuto.value.toLocaleLowerCase() === "" || operacion.value.toLocaleLowerCase() == ""){
       // alert ("⚠️ Recuerda completar todos los campos")
       mensaje.innerHTML = "<h2>⚠️ Recuerda completar todos los campos</h2>"
        } 
        else {
           mensajeFinal()
                }
})


verMas.addEventListener("click", ()=> {
      mostrarUltimaBusquedaJSON()      
})


function mensajeFinal(){
  mensaje.innerHTML = "<h2>Sorry, no tenemos ese auto 😔</h2>"
}


