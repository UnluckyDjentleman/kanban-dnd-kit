import { createContext, ReactNode, useState } from "react"
import { createPortal } from "react-dom";
import { Board } from "../../../../constants/types/board";
import { Card } from "../../../../constants/types/card";
import Modal from "../modal";
import ModalBoard from "../modalComponents/modalBoard";
import ModalCard from "../modalComponents/modalCard";

const initialState={
    viewModalBoard:(_:Board|undefined)=>{},
    viewModalCard:(_:Card|undefined, boardId?:string)=>{},
    closeModal: ()=>{},
}

export const ModalContext=createContext(initialState)

export const ModalProvider=({children}:{children:ReactNode})=>{
    const [isOpen, setIsOpen] = useState<boolean>();
    const [activeModal, setActiveModal] = useState<"board"|"card"| null>(
        null,
    );
    const [activeBoard, setActiveBoard] = useState<Board>();
    const [activeCard, setActiveCard] = useState<Card>();
    const [activeBoardId, setActiveBoardId] = useState<string | undefined>();

    const contextVal = {
        viewModalBoard: (board?: Board) => {
            setIsOpen(true);
            setActiveBoard(board)
            setActiveModal("board");
        },
        viewModalCard: (card?:Card, boardId?:string) => {
            setIsOpen(true);
            setActiveCard(card)
            setActiveBoardId(boardId)
            setActiveModal("card");
        },
        closeModal: () => {
            setIsOpen(false);
            setActiveModal(null);
        },
    };

    const getModal = () => {
        switch(activeModal){
            case "board": return <ModalBoard item={activeBoard}/>;
            case "card": return <ModalCard card={activeCard} boardId={activeBoardId}/>;
            default: return undefined;
        }
    };

    return (
        <ModalContext.Provider value={contextVal}>
            {children}
            {isOpen && createPortal(<Modal>{getModal()}</Modal>, document.body)}
        </ModalContext.Provider>
    );
}