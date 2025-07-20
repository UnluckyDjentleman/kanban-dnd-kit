import { StateCreator } from "zustand"
import { BoardSlice } from "./boardSlice"
import { Card } from "../../constants/types/card";

interface CardSlice{
    cards: Card[];
    addCard: (card: Omit<Card, 'id'>) => void;
    updateCard: (id: string, card: Partial<Card>) => void;
    deleteCard: (id: string) => void;
    deleteCardsByBoardId: (boardId: number) => void;
    getCardsByBoardId: (boardId: number) => Card[];
    getCard: (id: string) => Card | undefined;
}

export type {CardSlice}

export const createCardSlice: StateCreator<
  BoardSlice & CardSlice,
  [],
  [],
  CardSlice
> = (set, get) => ({
  cards: [],
  addCard: (card) => {
    const newCard: Card = {
      ...card,
      id: crypto.randomUUID(),
    };
    set((state) => ({ cards: [...state.cards, newCard] }));
  },
  updateCard: (id, card) => {
    set((state) => ({
      cards: state.cards.map((c) => (c.id === id ? { ...c, ...card } : c)),
    }));
  },
  deleteCard: (id) => {
    set({ cards: get().cards.filter((c) => c.id !== id) });
  },
  deleteCardsByBoardId: (boardId) => {
    set({ cards: get().cards.filter((c) => c.board_id !== boardId) });
  },
  getCardsByBoardId: (boardId) => {
    return get().cards.filter((card) => card.board_id === boardId);
  },
  getCard: (id) => get().cards.find((c) => c.id === id),
});