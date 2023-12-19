function solve(arr) {
    let n = Number(arr.shift());

    let pattern =
        /(?<name>[A-Z][a-z]{3,}\s{1}[A-Z][a-z]{3,})#+(?<position>[A-Za-z]+&*[A-Za-z]+&*[A-Za-z]+)\d{2}(?<company>[A-Za-z]+\s{1})(?<type>JSC|Ltd\.)/;

    for (let i = 0; i < n; i++) {
        let match = arr[i].match(pattern);

        if (match != null) {
            let { name, position, company, type } = match.groups;

            if (position.includes('&')) {
                position = position.split('&').join(' ');
            }
            console.log(`${name} is ${position} at ${company}${type}`);
        }
    }
}
solve([
    '4',
    'Tanya Petrova##Dental&Assistants25Health Ltd.',
    'Kalina Mihova#Occupational&Therapy&Aides00Health Ltd.',
    'George Fill####Orderlies99Health JSC',
    'Lily petrova#Speech&Pathology&Assistants60Health Ltd.',
]);
