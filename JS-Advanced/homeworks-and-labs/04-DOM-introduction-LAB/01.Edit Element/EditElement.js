function editElement(ref, match, replacement) {
	// doing again
	const text = ref.textContent;
	console.log(text);
    const pattern = new RegExp(match, 'g')
    const result = text.replace(pattern, replacement)
    ref.textContent = result;
}
