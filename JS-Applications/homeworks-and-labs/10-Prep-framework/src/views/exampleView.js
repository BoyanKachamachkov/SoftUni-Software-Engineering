import { html, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const exampleTemplate = (onSubmit) => html`
<section>
    <p>Sample contqweewent</p>
    <form @submit=${onSubmit}>
        <h2>Sample form</h2>
        <label>
            Data 1
            <input type="text" name="data1">
        </label>
        <label>
            Data 2
            <input type="text" name="data2">
        </label>
        <button>Submit form</button>
    </form> 
</section>`;

export function showExample(ctx) {
    render(exampleTemplate(createSubmitHandler()));
}

function onSubmit(data, form) {
    console.log(data);
    form.reset();
}