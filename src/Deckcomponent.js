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
  const [isShuffling, setIsShuffling] = useState(false);

  // set states for  deckOfCardsId on mount
  useEffect( function getDeckWhenMounted(){
    async function getDeck(){
      const response = await axios.get(BASE_URL+"new/shuffle/?deck_count=1");
      setDeckOfCardsId(response.data.deck_id);
      setIsLoading(false);
    };
    getDeck();
  },[] );


  async function getCard(){
    const response = await axios.get(BASE_URL+deckOfCardsId+DRAW);
      setPlayedCards( playedCards => [...playedCards, response.data.cards[0]]);
  }

  // Draws a card from API and updates playedCards
  // useEffect( function drawCardOnClick(){
  //   async function getCard(){
  //     const response = await axios.get(BASE_URL+deckOfCardsId+DRAW);
  //       setPlayedCards( playedCards => [...playedCards, response.data.cards[0]]);
  //   }
  //   if(deckOfCardsId !==null)  getCard();
  // }, [isDrawing]);


  useEffect(function shuffleDeckAPI(){
    async function shuffle(){
      await axios.get(BASE_URL+deckOfCardsId+"/shuffle");
      setPlayedCards([]);
    }
    shuffle();
  }, [isShuffling])

  // function drawCard(){
  //   setIsDrawing((isDrawing) => !isDrawing);
  // }

  function shuffleDeck(){
    setIsShuffling((isShuffling) => !isShuffling);
  }
  // useEffect( function drawOnClick(){


  // })
  console.log(playedCards.length)
  if( isLoading) return <p>Shuffling......</p>

  return (
    <div>
      {playedCards.length<=51
        ?<button onClick={getCard}>Draw</button>
        :alert("Error: no cards remaining!")
      }
      <button onClick={shuffleDeck}>reset</button>
      <CardPile playedCards={playedCards}  />
    </div>
  )
}

export default DeckComponent;