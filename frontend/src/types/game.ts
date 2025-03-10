export type TMove = {
  from: string;
  to: string;
  promotion?: string;
};

export type TGameResult = null | {
  winner: string;
  loser: string;
  gameResult:
    | "RESIGN"
    | "ACCEPT_DRAW"
    | "CHECKMATE"
    | "DRAW"
    | "ABANDON"
    | "TIMER_EXPIRED";
};

export type TColor = null | "white" | "black";
