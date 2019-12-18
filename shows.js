const modal = document.querySelector(".modal_background");
modal.addEventListener("click", () => {
	modal.classList.add("hide");
})

const btn = document.querySelector(".ticket");
btn.addEventListener("click", () => {
	console.log("button clicked")

})



window.addEventListener("DOMContentLoaded", getData);

function getData() {
	fetch("http://popispop.net/anniiss_wordpress/wp-json/wp/v2/shows?_embed")
		.then(res => res.json())
		.then(handleData);

}

function handleData(myData) {
	//1.loop
	myData.forEach(getShow);
}

function getShow(event) {
	console.log(event);

	const imgPath = event._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;

	//2. Clone a template
	const template = document.querySelector(".myTemplate").content;
	const postCopy = template.cloneNode(true);
	//postCopy.querySelector(".artist_name").textContent = event.slug;
	postCopy.querySelector(".venue_name").textContent = event.venue;
	postCopy.querySelector(".eventDate").textContent = event.event_date;
	postCopy.querySelector(".eventDescription").textContent = event.description;
	postCopy.querySelector(".eventAddress").textContent = event.address;

	let link = event.link;
	let anchorTag = postCopy.querySelector(".link");
	anchorTag.setAttribute('href', link);


	//	postCopy.querySelector(".description").textContent = event.description;
	//
	const img = postCopy.querySelector("img");
	img.setAttribute("src", imgPath);
//		img.setAttribute("height", "324.66px");
	img.setAttribute("height", "25%");

	img.setAttribute("alt", "image of the book");

	//	postCopy.querySelector("button").addEventListener("click", () => {
	//		//showMore();
	//		alert("thank you for choosing us");
	//
	//	});

	document.querySelector(".posts").appendChild(postCopy);

	//	function showMore(data) {
	//		console.log(data);
	//
	//		modal.querySelector("h1").innerHTML = data.title.rendered
	//		modal.querySelector(".body-copy").innerHTML = data.content.rendered;
	//
	//		modal.querySelector(".publisher").textContent = data.director;
	//
	//		modal.querySelector(".pic").src = data._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
	//
	//		modal.querySelector(".starring").innerHTML = data.starring;
	//
	//		modal.querySelector(".price").textContent = data.price;
	//
	//		modal.querySelector(".released").textContent = data.released;
	//
	//
	//		modal.classList.remove("hide");
	//	}


}
