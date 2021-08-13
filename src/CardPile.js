import Card from './Card'

/*
Card Pile component, has a property of list of played cards,
each card is an object

props:
played cards [{
      "code": "7S",
      "image": "https://deckofcardsapi.com/static/img/7S.png",
      "images": {
        "svg": "https://deckofcardsapi.com/static/img/7S.svg",
        "png": "https://deckofcardsapi.com/static/img/7S.png"
      },
      "value": "7",
      "suit": "SPADES"
    }, ...]

DeckComponent -> _CardPile_ ->[card, card, ...]
*/ 
function CardPile({playedCards}){

    return (
        <ul style={{"list-style": "none"}}>
            <Card card={{
                "code": "7S",
                "image": "https://deckofcardsapi.com/static/img/7S.png",
                "images": {
                    "svg": "https://deckofcardsapi.com/static/img/7S.svg",
                    "png": "https://deckofcardsapi.com/static/img/7S.png"
                },
                "value": "7",
                "suit": "SPADES"
                }}/>
        </ul>
    )
}

export default CardPile;