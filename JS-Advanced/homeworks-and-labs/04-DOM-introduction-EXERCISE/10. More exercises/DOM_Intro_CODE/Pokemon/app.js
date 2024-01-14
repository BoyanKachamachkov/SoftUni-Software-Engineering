// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
/* 
	-select container
	-create baseURL link
	-loop over all the pokomens

	for each pokemon
		-create div element
		-create img element
		-create span element

		-assign src to img with logic
		-assign text to span with logic
		-assign class to both
		-append both img and span to the new div

		-finally append div to the container!
*/

const container = document.querySelector('#container');
const baseURL =
	'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 151; i++) {
	const pokemonDiv = document.createElement('div');
	const pokemonImg = document.createElement('img');
	const pokemonSpan = document.createElement('span');

	pokemonImg.src = `${baseURL}${i}.png`;
	pokemonSpan.innerText = `#${i}`;

	pokemonDiv.appendChild(pokemonImg);
	pokemonDiv.appendChild(pokemonSpan);
	pokemonDiv.classList.add('pokemon');

	container.appendChild(pokemonDiv);
}
