// given fifeld size| size 3 -> [-, -, -]
// no ladybudy -> | Ladybug -> 1
// given initial ladybugs indexes
// commands -> {start index} {direction} {fly length}
// if ladybug lands on another -> continues in same direction with same length
// if out of fields -> it's gone
// if no ladybug on given index => nothign happens

function ladybugs(arr) {
    let fieldSize = arr[0];
    let ladybugIdxs = arr[1].split(' ').map(Number);
    let field = [];

    // set initial field
    for (let i = 0; i < fieldSize; i++) {
        if (ladybugIdxs.includes(i)) {
            field[i] = 1;
        } else {
            field[i] = 0;
        }
    }

    // work with commands
    for (let j = 2; j < arr.length; j++) {
        let command = arr[j];
        let tokens = command.split(' ');

        let ladybugIdx = Number(tokens[0]);
        let direction = tokens[1];
        let flyLength = Number(tokens[2]);

        if (!field[ladybugIdx]) {
            continue;
        }
        field[ladybugIdx] = 0; //reset index as it will fly

        if (direction == 'left') {
            let newIdx = ladybugIdx - flyLength;

            if (newIdx >= 0) {
                while (field[newIdx] == 1) {
                    newIdx -= flyLength;
                }

                if (newIdx >= 0) {
                    field[newIdx] = 1; //it lands
                }
            }
        } else {
            // right direction
            let newIdx = ladybugIdx + flyLength;

            if (newIdx < field.length) {
                while (field[newIdx] == 1) {
                    newIdx += flyLength;
                }

                if (newIdx < field.length) {
                    field[newIdx] = 1; //it lands
                }
            }
        }
    }

    console.log(field.join(' '));
}

ladybugs([3, '0 1', '0 right 1', '2 right 1']);
