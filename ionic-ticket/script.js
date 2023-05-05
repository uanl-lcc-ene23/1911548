let articulo = document.getElementById("articulo");
let precio = document.getElementById("precio");
let listaArticulos = document.getElementById("listaArticulos");
let totalMSG = document.getElementById("total"); // Mensaje en pantalla
let total = 0;

function agregarAticket() {
	//se obtienen los valores de los campos de texto

	let articuloTexto = articulo.value;
	let precioTexto = precio.value;

	console.log(articuloTexto);
	console.log(precioTexto);

	let elementoLista = document.createElement("li");
	elementoLista.innerHTML = "-" + articuloTexto + " $" + precioTexto;

	listaArticulos.appendChild(elementoLista);

	// Limpiar valores de los articulos de texto
	articulo.value = "";
	precio.value = "";

	// Calcula el total
	total = total + parseFloat(precioTexto);
	console.log(total);

	totalMSG.innerHTML = 'Total: $' + total;
	presentarAlerta();
}

async function presentarAlerta() {
	const alert = document.createElement('ion-alert');
	alert.subHeader = 'El artículo se agrego exitosamente.';
	alert.message = '¡Gracias!';
	alert.buttons = ['Cerrar'];
	document.body.appendChild(alert);
	await alert.present();
}