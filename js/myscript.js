
const ventasForm = document.getElementById("ventasForm");
ventasForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente


    // Obtener los valores de los campos
    const enero = parseFloat(document.getElementById("enero").value);
    const febrero = parseFloat(document.getElementById("febrero").value);
    const marzo = parseFloat(document.getElementById("marzo").value);
    const abril = parseFloat(document.getElementById("abril").value);
    const mayo = parseFloat(document.getElementById("mayo").value);
    const junio = parseFloat(document.getElementById("junio").value);


    // Calcula el total de ventas por mes
    const totalVentas = enero + febrero + marzo + abril + mayo + junio;


    // Muestra el resultado
    alert(`Total de ventas del año: $${totalVentas}`);
});