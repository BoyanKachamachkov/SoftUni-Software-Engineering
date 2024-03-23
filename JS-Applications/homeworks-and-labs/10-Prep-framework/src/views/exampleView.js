import { html, render } from '../lib.js';

const exampleTemplate = () => html`
<section>
    <p>Sample contqweewent</p>
</section>`;

export function showExample(ctx) {
    render(exampleTemplate());
}