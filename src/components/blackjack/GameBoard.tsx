import React from 'react';
import { Hand } from './Hand';
import { GameStatus } from '../../types/blackjack';
import { Card } from '../../types/blackjack';

interface GameBoardProps {
  playerHand: Card[];
  dealerHand: Card[];
  gameStatus: GameStatus;
  playerScore: number;
  dealerScore: number;
  isPlayerTurn: boolean;
}

export function GameBoard({
  playerHand,
  dealerHand,
  gameStatus,
  playerScore,
  dealerScore,
  isPlayerTurn,
}: GameBoardProps) {
  return (
    <div className="bg-green-800 rounded-xl p-8 shadow-xl mb-8">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Dealer's Hand</h2>
          <Hand cards={dealerHand} hideFirst={isPlayerTurn} score={dealerScore} />
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Your Hand</h2>
          <Hand cards={playerHand} score={playerScore} />
        </div>
      </div>
      {gameStatus !== 'playing' && (
        <div className="mt-6 text-center">
          <div className="text-2xl font-bold text-white">
            {gameStatus === 'playerWin' && '🎉 You Win! 🎉'}
            {gameStatus === 'dealerWin' && '😔 Dealer Wins'}
            {gameStatus === 'push' && '🤝 Push - It\'s a Tie!'}
            {gameStatus === 'playerBust' && '💥 Bust! You Lose'}
          </div>
        </div>
      )}
    </div>
  );
}