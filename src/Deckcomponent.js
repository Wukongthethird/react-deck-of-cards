import { useEffect, useState } from "react"
import axios from "axios"
// for shuffling a deck
const SHUFFLE_BASE_URL = `http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
//Draw a card
let DRAW = `http://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2`

function Deckcomponent(){
  const [deckOfCardsId, setDeckOfCardsId ] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [playedCards, setPlayedCards] = useState([]);

  useEffect( function getDeckWhenMounted(){
    async function getDeck(){
      const response = await axios.get(SHUFFLE_BASE_URL)
      setDeckOfCardsId(response.data.deck_id)
      setIsLoading(false)
    }
    getDeck();
  },[] )

  useEffect(  )

  if( isLoading) return <p>Shuffling......</p>

  return 
}

