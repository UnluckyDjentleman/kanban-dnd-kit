import { useContext, useState } from "react";
import Button from "../../shared/button/button";
import { ModalContext } from "../../shared/modal/context/modal.context";
import { useKanbanStore } from "../../../store/store";
import BoardComponent from "../../widgets/board/board";
import { ButtonType } from "../../../constants/enums/buttonType";
import { useAppTranslation } from "../../../store/hooks/useTranslation";
import SelectComponent from "../../shared/select/select";
import styles from "./main-page.module.css"

export default function MainPage(){

    const {viewModalBoard}=useContext(ModalContext);
    const [substr, setSubstr]=useState<string>("")
    const {boards}=useKanbanStore()
    const {t}=useAppTranslation()

    const filteredBoards=()=>{
        return boards.filter(board => {
            const matchesQuery = substr
            ? board.name.toLowerCase().includes(substr.toLowerCase())
            : true;
            
            return matchesQuery;
        });
    }

    return(
        <div className={styles.main}>
            <div className={styles.header}>
                <div className={styles.filterWrapper}>
                    <input type="search" placeholder={t("Board Title")} value={substr} onChange={(e)=>setSubstr(e.currentTarget.value)}></input>
                </div>
                <SelectComponent></SelectComponent>
                <Button type={ButtonType.primary} onClick={()=>viewModalBoard(undefined)}>
                    {t("Add New Board")}
                </Button>
            </div>
            <div className={styles.content}>
                {
                    filteredBoards().map(el=>(
                        <BoardComponent key={el.id} el={el}/>
                    ))
                }
            </div>
        </div>
    )
}