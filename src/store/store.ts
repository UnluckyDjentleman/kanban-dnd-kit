import {create} from "zustand"
import {persist, createJSONStorage} from "zustand/middleware"
import { CardSlice, createCardSlice } from "./slices/cardSlice"
import { BoardSlice, createBoardSlice } from "./slices/boardSlice"
import { createLanguageSlice, LanguageSlice } from "./slices/languageSlice"

export type AppState=CardSlice&BoardSlice&LanguageSlice

export const useKanbanStore=create<AppState>()(
    persist(
        (...a) => ({
        ...createBoardSlice(...a),
        ...createCardSlice(...a),
        ...createLanguageSlice(...a)
        }),
        {
            name: 'kanban-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
)

