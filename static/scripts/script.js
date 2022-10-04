
const colors = ["#8AFF80", "#FFCA80", "#FF80BF", "#9580FF", "#FF9580", "#FFFF80"];
const newsWrapper = document.getElementById("news-wrapper");


// TODO: Mejorar este codigo

function generateNews() {
	// Generate dummy news

	for (i = 0; i < 9; i++){
		let newDiv = document.createElement("div");
		newDiv.classList.add("new");

		let newImage = document.createElement("div");
		newImage.classList.add("new-image");

		newImage.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

		let newTextContainer = document.createElement("div");
		newTextContainer.classList.add("new-text-container");

		let newTitle = document.createElement("div");
		newTitle.classList.add("new-title");

		let newH3 = document.createElement("h3");
		newH3.innerHTML = "Noticia";

		let newDate = document.createElement("span");
		newDate.classList.add("new-date")
		newDate.innerHTML = "10/12/2022";

		let newText = document.createElement("p");
		newText.classList.add("new-text");
		newText.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eius iure vitae facilis dolor repudiandae sit ipsam rerum blanditiis est, suscipit ratione omnis, placeat voluptates maxime quae temporibus accusantium non.";


		newTitle.appendChild(newH3);
		newTitle.appendChild(newDate);

		newTextContainer.appendChild(newTitle);
		newTextContainer.appendChild(newText);

		newDiv.appendChild(newImage);
		newDiv.appendChild(newTextContainer);

		newsWrapper.appendChild(newDiv);
	}
}



generateNews();