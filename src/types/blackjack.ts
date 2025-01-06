export interface Card {
  suit: string;
  value: string;
}

export type GameStatus = 'playing' | 'playerWin' | 'dealerWin' | 'playerBust' | 'push';