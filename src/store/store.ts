import {create} from "zustand"
import {persist, createJSONStorage} from "zustand/middleware"
import { CardSlice, createCardSlice } from "./slices/cardSlice"
import { BoardSlice, createBoardSlice } from "./slices/boardSlice"

export type AppState=CardSlice&BoardSlice

export const useKanbanStore=create<AppState>()(
    persist(
        (...a) => ({
        ...createBoardSlice(...a),
        ...createCardSlice(...a),
        }),
        {
            name: 'kanban-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
)

