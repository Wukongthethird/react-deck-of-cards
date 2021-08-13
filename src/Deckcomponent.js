import { useEffect, useState } from "react";
import axios from "axios";
import CardPile from './CardPile';
// for shuffling a deck
const BASE_URL = `http://deckofcardsapi.com/api/deck/`;
//Draw a card
let DRAW = `/draw/`;

/** 
 * state deckOfCardsId, isDrawing, isLoading, playedCards
 * 
 * DeckComponent -> CardPile -> Card
*/
function DeckComponent(){

  const [deckOfCardsId, setDeckOfCardsId ] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [playedCards, setPlayedCards] = useState([]);

  // set states for  deckOfCardsId on mount
  useEffect( function getDeckWhenMounted(){
    async function getDeck(){
      const response = await axios.get(BASE_URL+"new/shuffle/?deck_count=1");
      setDeckOfCardsId(response.data.deck_id);
      setIsLoading(false);
    };
    getDeck();
  },[] );


  // Draws a card from API and updates playedCards
  useEffect( function drawCardOnClick(){
    async function getCard(){
      const response = await axios.get(BASE_URL+deckOfCardsId+DRAW);
        setPlayedCards( playedCards => 
          [...playedCards, response.data.cards[0]]);
    if(deckOfCardsId !==null)  getCard();
  }, [isDrawing]);


  function drawCard(){
    setIsDrawing((isDrawing) => !isDrawing);
  }

  // useEffect( function drawOnClick(){


  // })
  if( isLoading) return <p>Shuffling......</p>

  return (
    <div>
      {playedCards.length<=51
        ?<button onClick={drawCard}>Draw</button>
        :alert("Error: no cards remaining!")
      }
      <CardPile playedCards={playedCards}  />
    </div>
  )
}

export default DeckComponent;