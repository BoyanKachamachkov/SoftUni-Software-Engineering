// Model works with data (abstarction) (model view controller)
const fs = require('fs/promises');

const fileName = './data/cats.json';

async function readData() {
    const json = await fs.readFile(fileName);
    const data = JSON.parse(json.toString());

    return data;
}

async function writeData(data) {
    await fs.writeFile(fileName, JSON.stringify(data), null, 2);
}

async function getCats() {
    const data = await readData();
    return data.cats;
}

async function getBreeds() {
    const data = await readData();
    return data.breeds;
}

async function addBreed(breed) {
    const data = await readData();
    data.breeds.push(breed);

    await writeData(data);
}

async function addCat(cat) {
    const data = await readData();
    data.cats.push(cat);

    await writeData(data);
}

module.exports = {
    getCats,
    getBreeds,
    addBreed,
    addCat
};