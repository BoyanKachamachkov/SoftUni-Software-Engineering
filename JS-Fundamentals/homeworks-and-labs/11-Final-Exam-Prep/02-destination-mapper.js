function destMapper(str) {
    let regex = /[=\/][A-Z][A-Za-z]{2,}[=\/]/gm;
    let points = 0;
    let destinations = [];

    let foundDestinations = str.match(regex);

    if (foundDestinations) {
        foundDestinations.forEach((element, index) => {
            if (element[0] === element[element.length - 1]) {
                // remove invalid elements, for example if = in Hawai is equal at the same in the end = again, only then give it
                element = element.substring(1, element.length - 1);
                destinations.push(element);
                points += element.length;
            }
        });
    }

    console.log(`Destinations: ${destinations.join(', ')} `);
    console.log(`Travel Points: ${points} `);
}
destMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
destMapper('ThisIs some InvalidInput');
