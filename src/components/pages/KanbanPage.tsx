import { useContext } from "react";
import { ButtonType } from "../../constants/enums/buttonType";
import Button from "../shared/button/button";
import { ModalContext } from "../shared/modal/context/modal.context";
import { CardStatus } from "../../constants/enums/cardStatus";
import Column from "../shared/column/column";
import { useKanbanStore } from "../../store/store";
import { useNavigate, useParams } from "react-router-dom";
import KanbanCard from "../widgets/card/card";
import DraggableCard from "../widgets/draggable/draggable";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useAppTranslation } from "../../store/hooks/useTranslation";

export default function KanbanPage(){

    const {viewModalCard}=useContext(ModalContext)
    const navigate=useNavigate()
    const {cards, boards, updateCard, updateBoard, getCardsByBoardId}=useKanbanStore()
    const {boardId}=useParams()
    const {t}=useAppTranslation()

    const handleDragEnd=(e:DragEndEvent)=>{
        const {active, over}=e;

        if(over&&active.id!==over.id){
            const card=cards.find(el=>el.id===active.id)
            updateCard(active.id as string, {...card, status:over.id as CardStatus});
            updateBoard(Number(boardId), {updatedDate: new Date(Date.now())});
        }
    }

    return (
        <div style={{display:"flex", flexDirection:"column", height:"100%"}}>
            <div style={{display:"flex", justifyContent:"space-around"}}>
                <Button type={ButtonType.dashed} onClick={()=>navigate("/")}>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        {t("Back")}
                    </div>
                </Button>
                <p>{boards.find(el=>el.id===parseInt(boardId as string,10))?.name}</p>
                <Button type={ButtonType.primary} onClick={()=>viewModalCard(undefined, boardId)}>
                    {t("Add New Item")}
                </Button>
            </div>
            <DndContext onDragEnd={handleDragEnd}>
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    {
                        Object.keys(CardStatus).filter(value => typeof value === 'string').map(el=>(
                            <Column columnName={el}>
                                {
                                    getCardsByBoardId(Number(boardId)).filter(x=>x.status.toString()===el).map(card=>(
                                        <DraggableCard id={card.id}>
                                            <KanbanCard el={card}/>
                                        </DraggableCard>
                                    ))
                                }
                            </Column>
                        ))
                    }
                </div>
            </DndContext>
        </div>
    )
}