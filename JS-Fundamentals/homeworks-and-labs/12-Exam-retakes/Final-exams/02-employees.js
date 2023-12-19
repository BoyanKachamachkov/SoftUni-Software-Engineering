function solve(input) {
    let n = Number(input.shift());

    let pattern =
        /(?<name>[A-Z][a-z]{3,}\s{1}[A-Z][a-z]{3,})#+(?<position>[A-Za-z]+&*[A-Za-z]+&*[A-Za-z]+)\d{2}(?<company>[A-Za-z]+\s{1})(?<type>JSC|Ltd\.)/;

    for (let line of input) {
        let match = line.match(pattern);

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

solve([
    '2',
    'Mariya Ivanova#Photographer&&Machine25PhotoStudio12 Ltd.',
    'Monica Hristova####Nuclear&Engineer99Station JSC',
]);

solve([
    '4',
    'Peter PetrovPsychology&Teachers25School Ltd.',
    'Kalin kalinov#Special Education Teachers00 School Ltd.',
    'Lilyana Kuncheva#### Tutor999School JSC',
    'Kliment Genchev#Teacher&Assistants20School Ltd.',
]);
