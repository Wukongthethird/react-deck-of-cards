import Card from './Card'
import { v4 as uuid } from "uuid";
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
        <ul style={{"listStyle": "none"}}>
          { playedCards.map( (card) =>(
            <Card card={card} key={uuid()} />
        ))}
        </ul>
    )
}

export default CardPile;