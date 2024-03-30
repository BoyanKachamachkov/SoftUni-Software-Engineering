import { render, html } from "../lib.js";



const homeViewTemplate = () => html`
<section id="hero">
    <img src="./images/home.png" alt="home" />
    <p>We know who you are, we will contact you</p>
</section>`;

export function showHome(ctx) {
    render(homeViewTemplate());
}