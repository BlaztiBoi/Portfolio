import React from 'react';
import { GameBoard } from '../components/blackjack/GameBoard';
import { GameControls } from '../components/blackjack/GameControls';
import { useBlackjack } from '../hooks/useBlackjack';

export function BlackjackGame() {
  const {
    playerHand,
    dealerHand,
    gameStatus,
    playerScore,
    dealerScore,
    isPlayerTurn,
    handleHit,
    handleStand,
    handleNewGame,
  } = useBlackjack();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 to-emerald-700 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Blackjack</h1>
        <GameBoard
          playerHand={playerHand}
          dealerHand={dealerHand}
          gameStatus={gameStatus}
          playerScore={playerScore}
          dealerScore={dealerScore}
          isPlayerTurn={isPlayerTurn}
        />
        <GameControls
          onHit={handleHit}
          onStand={handleStand}
          onNewGame={handleNewGame}
          gameStatus={gameStatus}
          isPlayerTurn={isPlayerTurn}
        />
      </div>
    </div>
  );
}