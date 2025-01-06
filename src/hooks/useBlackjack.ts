import { useState, useEffect } from 'react';
import { Card, GameStatus } from '../types/blackjack';
import { createDeck, shuffleDeck, calculateScore } from '../utils/blackjack';

export function useBlackjack() {
  const [deck, setDeck] = useState<Card[]>([]);
  const [playerHand, setPlayerHand] = useState<Card[]>([]);
  const [dealerHand, setDealerHand] = useState<Card[]>([]);
  const [gameStatus, setGameStatus] = useState<GameStatus>('playing');
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);

  const dealInitialCards = () => {
    const newDeck = shuffleDeck(createDeck());
    const initialPlayerHand = [newDeck[0], newDeck[1]];
    const initialDealerHand = [newDeck[2], newDeck[3]];
    
    setDeck(newDeck.slice(4));
    setPlayerHand(initialPlayerHand);
    setDealerHand(initialDealerHand);
    setGameStatus('playing');
    setIsPlayerTurn(true);
  };

  useEffect(() => {
    dealInitialCards();
  }, []);

  const handleHit = () => {
    if (!isPlayerTurn || gameStatus !== 'playing') return;

    const newCard = deck[0];
    const newHand = [...playerHand, newCard];
    const newDeck = deck.slice(1);

    setPlayerHand(newHand);
    setDeck(newDeck);

    const score = calculateScore(newHand);
    if (score > 21) {
      setGameStatus('playerBust');
      setIsPlayerTurn(false);
    }
  };

  const handleStand = () => {
    setIsPlayerTurn(false);
    let currentDealerHand = [...dealerHand];
    let currentDeck = [...deck];

    while (calculateScore(currentDealerHand) < 17) {
      currentDealerHand.push(currentDeck[0]);
      currentDeck = currentDeck.slice(1);
    }

    setDealerHand(currentDealerHand);
    setDeck(currentDeck);

    const playerScore = calculateScore(playerHand);
    const dealerScore = calculateScore(currentDealerHand);

    if (dealerScore > 21) {
      setGameStatus('playerWin');
    } else if (dealerScore > playerScore) {
      setGameStatus('dealerWin');
    } else if (dealerScore < playerScore) {
      setGameStatus('playerWin');
    } else {
      setGameStatus('push');
    }
  };

  return {
    playerHand,
    dealerHand,
    gameStatus,
    playerScore: calculateScore(playerHand),
    dealerScore: calculateScore(dealerHand),
    isPlayerTurn,
    handleHit,
    handleStand,
    handleNewGame: dealInitialCards,
  };
}