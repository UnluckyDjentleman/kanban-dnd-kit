import { useContext } from "react";
import Button from "../shared/button/button";
import { ModalContext } from "../shared/modal/context/modal.context";
import { useKanbanStore } from "../../store/store";
import BoardComponent from "../widgets/board/board";
import { ButtonType } from "../../constants/enums/buttonType";

export default function MainPage(){

    const {viewModalBoard}=useContext(ModalContext);
    const {boards}=useKanbanStore()

    return(
        <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{display:"flex",justifyContent:"flex-end", margin:"12px"}}>
                <Button type={ButtonType.primary} onClick={()=>viewModalBoard(undefined)}>
                    Add New Board
                </Button>
            </div>
            <div style={{display:"flex",width:"100%",flexWrap:"wrap"}}>
                {
                    boards.map(el=>(
                        <BoardComponent key={el.id} el={el}/>
                    ))
                }
            </div>
        </div>
    )
}