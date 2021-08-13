/* Displays cards

props:
  card {
      "code": "7S",
      "image": "https://deckofcardsapi.com/static/img/7S.png",
      "images": {
        "svg": "https://deckofcardsapi.com/static/img/7S.svg",
        "png": "https://deckofcardsapi.com/static/img/7S.png"
      },
      "value": "7",
      "suit": "SPADES"
    }
  CardPile -> Card ({card})
*/ 

function Card({card}){
    return (
    <li>
        <img 
            src={card.image}
            alt={`${card.value} of ${card.suit}`}
        />
    </li>
    )
}

export default Card;