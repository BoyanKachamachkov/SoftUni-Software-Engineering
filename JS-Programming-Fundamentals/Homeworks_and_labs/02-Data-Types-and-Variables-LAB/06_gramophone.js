function gramophone(band, album, song) {
  let songDurationSeconds = (album.length * band.length * song.length) / 2;
  let rotation = 2.5;

  let howManyTimes = Math.ceil(songDurationSeconds / rotation);
  console.log(`The plate was rotated ${howManyTimes} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');
