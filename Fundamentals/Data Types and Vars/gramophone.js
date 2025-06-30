function gramophone(bandName, albumName, song){
    let sondDuration = (albumName.length * bandName.length) * song.length / 2;
    let rotations = sondDuration / 2.5;

    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
}

gramophone('Black Sabbath', 'Paranoid',

'War Pigs')