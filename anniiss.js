window.addEventListener("DOMContentLoaded", getMerch);
//alert("hello");


function getMerch() {
	fetch("http://popispop.net/anniiss_wordpress/wp-json/wp/v2/merchandise?_embed")
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

	//3. Using textContent & innerHTML for text and src for img

	postCopy.querySelector(".item").innerHTML = post.item
	postCopy.querySelector(".price").innerHTML = post.price
	postCopy.querySelector(".color").innerHTML = post.size

	postCopy.querySelector(".size").innerHTML = post.color

	//postCopy.querySelector(".publisher").innerHTML = post.director;

	//postCopy.querySelector(".body-copy").innerHTML = post.content.rendered;

	//postCopy.querySelector(".released").textContent = post.released;

	//postCopy.querySelector(".price").textContent = post.price;

	//postCopy.querySelector(".starring").textContent = post.starring;

	const img = postCopy.querySelector("img");
	img.setAttribute("src", imgPath);

	img.setAttribute("alt", "image of the book");

	//const a = postCopy.querySelector("a");
	//a.href = "subpage.html?id=" + post.id





	//4- append
	document.querySelector(".posts").appendChild(postCopy);
}
