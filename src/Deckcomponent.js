import { useEffect, useState } from "react";
import axios from "axios";
import CardPile from './CardPile';
// for shuffling a deck
const BASE_URL = `http://deckofcardsapi.com/api/deck`;
//Draw a card
let DRAW = `/draw/`;

function DeckComponent(){
  const [deckOfCardsId, setDeckOfCardsId ] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [playedCards, setPlayedCards] = useState([]);

  useEffect( function getDeckWhenMounted(){
    async function getDeck(){
      const response = await axios.get(BASE_URL+"/new/shuffle/?deck_count=1");
      setDeckOfCardsId(response.data.deck_id);
      setIsLoading(false);
    };
    getDeck();
  },[] );

  useEffect( function drawCardOnClick(){
    async function getCard(){
      const response = await axios.get(BASE_URL+deckOfCardsId+DRAW);
      setPlayedCards( playedCards => [...playedCards, response.data.cards[0]]);
    }
    getCard();
  }, [isDrawing]);

  function drawCard(){
    setIsDrawing((isDrawing) => !isDrawing);
  }



  if( isLoading) return <p>Shuffling......</p>

  return (
    <div>
      <button onClick={drawCard}>test</button>
      <CardPile/>
    </div>
  )
}

export default DeckComponent;