import { del, get, post, put } from "./request.js";

const endpoints = {
    allItems: '/data/cyberpunk?sortBy=_createdOn%20desc',
    createCyberpunk: '/data/cyberpunk',
    getCyberpunkId: '/data/cyberpunk/'
};

export async function getAllPunks() {
    return get(endpoints.allItems);
}

export async function getPunkId(id) {
    return get(endpoints.getCyberpunkId + id);
}

export async function createPunk({ item, imageUrl, price, availability, type, description }) {
    return post(endpoints.createCyberpunk, {
        item,
        imageUrl,
        price,
        availability,
        type,
        description
    });
}


export async function updatePunk(id, data) {
    return put(endpoints.getCyberpunkId + id, data);
}

export async function deletePunk(id) {
    return del(endpoints.getCyberpunkId + id);
}