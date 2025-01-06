import React from 'react';
import { GameStatus } from '../../types/blackjack';

interface GameControlsProps {
  onHit: () => void;
  onStand: () => void;
  onNewGame: () => void;
  gameStatus: GameStatus;
  isPlayerTurn: boolean;
}

export function GameControls({
  onHit,
  onStand,
  onNewGame,
  gameStatus,
  isPlayerTurn,
}: GameControlsProps) {
  return (
    <div className="flex justify-center gap-4">
      {gameStatus === 'playing' && isPlayerTurn ? (
        <>
          <button
            onClick={onHit}
            className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 
            transition-colors font-semibold"
          >
            Hit
          </button>
          <button
            onClick={onStand}
            className="px-6 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 
            transition-colors font-semibold"
          >
            Stand
          </button>
        </>
      ) : (
        <button
          onClick={onNewGame}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
          transition-colors font-semibold"
        >
          New Game
        </button>
      )}
    </div>
  );
}