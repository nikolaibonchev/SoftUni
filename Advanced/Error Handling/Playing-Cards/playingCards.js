function playingCards(face, suit) {
    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };

    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'K', 'Q', 'J'];

    if (!faces.includes(face) || !suits.hasOwnProperty(suit)) {
        throw new Error("One of the parameters is not valid");
    }

    return face + suits[suit];
}

try {
    console.log(playingCards("1", "S"));
} catch (e) {
    console.error(e);
}