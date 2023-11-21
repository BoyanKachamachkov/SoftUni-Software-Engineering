function songs(input) {
    class Song {
        constructor(type, name, time) {
            (this.type = type), (this.name = name), (this.time = time);
        }
    }

    let count = input.shift();
    let typeList = input.pop();
    let songsContainer = [];

    for (let line of input) {
        let [type, name, time] = line.split('_');

        let song = new Song(type, name, time);
        songsContainer.push(song);
    }

    if (typeList === 'all') {
        songsContainer.forEach((i) => console.log(i.name));
    } else {
        let filtered = songsContainer.filter((i) => i.type === typeList);
        filtered.forEach((i) => console.log(i.name));
    }
}
// songs([
//     3,
//     'favourite_DownTown_3:14',
//     'favourite_Kiss_4:16',
//     'favourite_Smooth Criminal_4:01',
//     'favourite',
// ]);

songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);
