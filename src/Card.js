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