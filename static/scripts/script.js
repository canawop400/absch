

function index() {
	console.log("index");
}


function procedures() {
	console.log("procedures");
}


function news() {
	// Executes when /noticias/ is loaded

	// Add colors to the images
	const colors = ["#8AFF80", "#FFCA80", "#FF80BF", "#9580FF", "#FF9580", "#FFFF80"];
	const images = [...document.getElementsByClassName("new-image")];

	images.forEach((image) => {
		image.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
	});

	// Add functionality to the delete new button

}


function createNews() {
	const sendButton = document.getElementById("send-button");

	sendButton.addEventListener("click", (event) => {
		let title = document.getElementById("new-title").value;
		let content = document.getElementById("new-content").value;

		const xhttp = new XMLHttpRequest();

		xhttp.onload = function () {

			// Idea: Mostrar una notificacion como un pop-pup desde el lateral derecho diciendo que se creo la noticia
			// Desabilitar el boton de enviar noticia hasta que se muestra la notificacion para evitar subirla 2 veces
			// Debe ser claro que el boton no puede pulsarse otra vez mientras se espera por la respuesta del servidor

			if (this.status == 200) {
				console.log("Noticia creada");
			} else {
				console.log(this.responseText);
			}
		}

		xhttp.open("POST", "/api/news/");
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send("title=" + title + "&content=" + content);
	});

}



(() => {
	// Main function

	switch (window.location.pathname) {
		case "/":
			index();
			break;
		
		case "/tramites/":
			procedures();
			break;

		case "/noticias/":
			news()
			break;

		case "/noticias/crear/":
			createNews();
			break;

	}

})();