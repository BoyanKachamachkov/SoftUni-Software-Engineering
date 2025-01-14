import { getPunkId, updatePunk } from "../data/events.js";
import { html, page, render } from '../lib.js';
import { notify } from "../notify.js";
import { createSubmitHandler } from "../util.js";

const editViewTemplate = (event, onEdit) => html`
<section id="edit">
    <div class="form form-item">
    <h2>Edit Your Item</h2>
    <form class="edit-form" @submit=${onEdit}>
        <input 
            type="text"
            name="item"
            id="item"
            placeholder="Item"
            .value=${event.item}
        />
        <input
            type="text"
            name="imageUrl"
            id="item-image"
            placeholder="Your item Image URL"
            .value=${event.imageUrl}
        />
        <input
            type="text"
            name="price"
            id="price"
            placeholder="Price in Euro"
            .value=${event.price}
        />
        <input
            type="text"
            name="availability"
            id="availability"
            placeholder="Availability Information"
            .value=${event.availability}
        />
        <input
            type="text"
            name="type"
            id="type"
            placeholder="Item Type"
            .value=${event.type}
        />
        <textarea
            id="description"
            name="description"
            placeholder="More About The Item"
            rows="10"
            cols="50"
            .value=${event.description}
        ></textarea>
        <button type="submit">Edit</button>
    </form>
    </div>
</section>`;

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const event = await getPunkId(id);

    render(editViewTemplate(event, createSubmitHandler(onEdit)));

        async function onEdit({ item, imageUrl, price, availability, type, description }, form) {
        if (!item || !imageUrl || !price || !availability || !type || !description) {
            return notify('All fields are required!');
        }

        await updatePunk(id, { item, imageUrl, price, availability, type, description });
        page.redirect('/catalog/' + id);
    }
}