function editElement(ref, match, replacement) {
    let pattern = new RegExp(match, 'g'); //save all matches with G flag to this var
	const text = ref.textContent; //connect with the ref text
	const result = text.replace(pattern, replacement); //replace all pattern matches
	ref.textContent = result; //establish the new ref value
}
