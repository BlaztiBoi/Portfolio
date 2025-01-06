import React from 'react';
import { Card as CardType } from '../../types/blackjack';

interface CardProps {
  card: CardType;
  hidden?: boolean;
}

export function Card({ card, hidden = false }: CardProps) {
  const getSuitColor = (suit: string) => {
    return ['♥', '♦'].includes(suit) ? 'text-red-500' : 'text-black';
  };

  return (
    <div
      className={`w-24 h-36 rounded-lg ${
        hidden ? 'bg-blue-800' : 'bg-white'
      } shadow-md flex items-center justify-center transform transition-transform hover:scale-105`}
    >
      {!hidden && (
        <div className="text-2xl font-bold">
          <span className={getSuitColor(card.suit)}>
            {card.value}
            {card.suit}
          </span>
        </div>
      )}
    </div>
  );
}