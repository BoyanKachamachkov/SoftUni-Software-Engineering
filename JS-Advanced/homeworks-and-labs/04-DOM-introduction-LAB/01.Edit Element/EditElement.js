function editElement(ref, string, replacer) {

	let e1Text = ref.textContent;
	e1Text = e1Text.split(string).join(replacer)
	ref.textContent = e1Text;
}
