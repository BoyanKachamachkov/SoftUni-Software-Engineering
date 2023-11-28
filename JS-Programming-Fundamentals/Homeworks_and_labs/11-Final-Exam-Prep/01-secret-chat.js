function secretChat(arr) {

    let msg = arr.shift()
    let command = arr.shift()

    while(command != 'Reveal'){

        let tokens = command.split(':|:')
        let action = tokens[0]

        console.log(action, tokens);
         command=arr.shift()

    }
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal',
]);
