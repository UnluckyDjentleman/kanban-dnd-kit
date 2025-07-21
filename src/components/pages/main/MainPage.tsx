import { useContext } from "react";
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
    const {boards}=useKanbanStore()
    const {t}=useAppTranslation()

    return(
        <div className={styles.main}>
            <div className={styles.header}>
                <SelectComponent></SelectComponent>
                <Button type={ButtonType.primary} onClick={()=>viewModalBoard(undefined)}>
                    {t("Add New Board")}
                </Button>
            </div>
            <div className={styles.content}>
                {
                    boards.map(el=>(
                        <BoardComponent key={el.id} el={el}/>
                    ))
                }
            </div>
        </div>
    )
}