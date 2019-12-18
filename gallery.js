window.addEventListener("DOMContentLoaded", getData);

function getData() {
	fetch("http://popispop.net/anniiss_wordpress/wp-json/wp/v2/pictures?_embed")
		.then(res => res.json())
		.then(handleData);

}

function handleData(myData) {
	//1.loop
	myData.forEach(showPost);
}

function showPost(post) {
	console.table(post);

	const imgPath = post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;

	//2. Clone a template
	const template = document.querySelector(".myTemplate").content;
	const postCopy = template.cloneNode(true);
	postCopy.querySelector(".released").textContent = post.released;
		postCopy.querySelector(".description").textContent = post.description;

	const img = postCopy.querySelector("img");
	img.setAttribute("src", imgPath);

	img.setAttribute("alt", "image of the book");
	document.querySelector(".posts").appendChild(postCopy);
}
