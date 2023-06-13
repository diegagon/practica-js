const form = document.querySelector("form");
const tickets = document.getElementById("cantidadTickets");
const categoria = document.getElementById("categoriaSelect");
const total = document.getElementById("totalPago");

function totalp()   {
    const cantidadTickets = parseInt(tickets.value);
    const categoriaSelect = parseInt(categoria.value);
    var descuento = 0;
    
    
switch (categoriaSelect) { //habia pensado usar la condicion if else, pero me parecio mas simple switch

    case 1:
        descuento = 0.8;
        break;
    
    case 2:
        descuento = 0.5;
        break;
        
    case 3:
        descuento = 0.15;
        break;
    
   default:
        descuento = 0;
        break;
}
const totalPago= cantidadTickets * 200 * (1- descuento);
total.textContent = totalPago.toFixed(2);

}

form.addEventListener("change", totalp);

const borrar = document.getElementById("btnBorrar");
borrar.addEventListener("click", function (event) {
    event.preventDefault();
    form.reset();
    total.textContent= "";
});


const resumen = document.getElementById("btnResumen");
resumen.addEventListener("click", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const mail = document.getElementById("mail").value;
    const totalp = total.textContent;
  


    const doc = jspdf();

    doc.setFontSize(25);
    doc.text("Has realizado la operacion", 10, 10);
 
    doc.setFontSize(20);
    doc.text( "Nombre: " + nombre, 10, 20);
    doc.text("Apellido: " + apellido, 10, 30);
    doc.text("e-mail: " + mail, 10, 40);
    doc.text("Saldo total pagado: " + totalp, 10, 50 );

    doc.save("comprobante.pdf");









    
})






