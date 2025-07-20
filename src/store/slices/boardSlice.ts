import { StateCreator } from "zustand";
import { Board } from "../../constants/types/board"
import { CardSlice } from "./cardSlice";

interface BoardSlice {
  boards: Board[];
  addBoard: (board: Omit<Board, 'id' | 'createdDate' | 'updatedDate'>) => void;
  updateBoard: (id: number, board: Partial<Board>) => void;
  deleteBoard: (id: number) => void;
  getBoard: (id: number) => Board | undefined;
}

export type {BoardSlice}

export const createBoardSlice: StateCreator<
  BoardSlice & CardSlice,
  [],
  [],
  BoardSlice
> = (set, get) => ({
  boards: [],
  addBoard: (board) => {
    const newBoard: Board = {
      ...board,
      id: Date.now(),
      createdDate: new Date(),
      updatedDate: new Date(),
    };
    set((state) => ({ boards: [...state.boards, newBoard] }));
  },
  updateBoard: (id, board) => {
    set((state) => ({
      boards: state.boards.map((b) =>
        b.id === id ? { ...b, ...board, updatedDate: new Date() } : b
      ),
    }));
  },
  deleteBoard: (id) => {
    set({ boards: get().boards.filter((b) => b.id !== id) });
  },
  getBoard: (id) => get().boards.find((b) => b.id === id),
});