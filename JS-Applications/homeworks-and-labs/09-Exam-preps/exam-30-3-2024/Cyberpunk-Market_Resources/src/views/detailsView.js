import { getPunkId, deletePunk } from "../data/events.js";
import { html, page, render } from '../lib.js';
import { getUserData } from "../util.js";

const detailsViewTemplate = (data, hasLoggedUser, isLoggedUserOwner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
    <div>
        <img id="details-img" src="${data.imageUrl}" alt="example1" />
        <p id="details-title">${data.item}</p>
    </div>
        <div id="info-wrapper">
            <div id="details-description">
                <p class="details-price">Price: €${data.price}</p>
                <p class="details-availability">${data.availability}</p>
                <p class="type">Type: ${data.type}</p>
                <p id="item-description">${data.description}</p>
            </div>
            <!--Edit and Delete are only for creator-->
            ${hasLoggedUser && isLoggedUserOwner ? html`
            <div id="action-buttons">
                <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
            </div>`: null}
        </div>
    </div>
</section>`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const event = await getPunkId(id);

    const user = getUserData();
    const hasLoggedUser = !!user;
    const isLoggedUserOwner = hasLoggedUser && user._id == event._ownerId;

    render(detailsViewTemplate(event, hasLoggedUser, isLoggedUserOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this listing?');

        if (choice) {
            await deletePunk(id);
            page.redirect('/catalog');
        }
    }
}