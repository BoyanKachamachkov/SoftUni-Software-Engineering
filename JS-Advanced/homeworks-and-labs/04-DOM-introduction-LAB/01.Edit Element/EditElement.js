function editElement(ref, string, replacer) {
	let titleText = ref.textContent;
	console.log(titleText); //ret. the title text

	let newText = titleText.split(string).join(replacer);
	console.log(newText); //ret. edited title text
	ref.textContent = newText;
}
