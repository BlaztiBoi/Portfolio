import React from 'react';
import { Card as CardType } from '../../types/blackjack';
import { Card } from './Card';

interface HandProps {
  cards: CardType[];
  hideFirst?: boolean;
  score?: number;
}

export function Hand({ cards, hideFirst = false, score }: HandProps) {
  return (
    <div>
      <div className="flex gap-2 flex-wrap">
        {cards.map((card, index) => (
          <Card
            key={`${card.suit}-${card.value}`}
            card={card}
            hidden={hideFirst && index === 0}
          />
        ))}
      </div>
      {score !== undefined && (
        <div className="mt-2 text-white font-semibold">
          Score: {hideFirst ? '?' : score}
        </div>
      )}
    </div>
  );
}