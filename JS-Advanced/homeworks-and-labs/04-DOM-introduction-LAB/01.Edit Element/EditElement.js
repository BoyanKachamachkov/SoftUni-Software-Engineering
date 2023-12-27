function editElement(ref, match, replacement) {
	// SOL 1
	// const text = ref.textContent;
	// console.log(text);
    // const pattern = new RegExp(match, 'g')
    // const result = text.replace(pattern, replacement)
    // ref.textContent = result;

    // SOL 2
    const text = ref.textContent;
    const result = text.split(match).join(replacement);
    ref.textContent = result;
    
}
