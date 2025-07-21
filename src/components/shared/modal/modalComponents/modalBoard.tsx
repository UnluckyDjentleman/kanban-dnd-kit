import { FormEvent, useContext, useState } from "react";
import { Board } from "../../../../constants/types/board";
import styles from "./modalComponent.module.css"
import { ModalContext } from "../context/modal.context";
import { useKanbanStore } from "../../../../store/store";
import Button from "../../button/button";
import { ButtonType } from "../../../../constants/enums/buttonType";
import { useAppTranslation } from "../../../../store/hooks/useTranslation";

export default function ModalBoard({item}:{item?:Board}){
    const [boardName, setBoardName]=useState<string>(item?.name as string)

    const {closeModal}=useContext(ModalContext);
    const {addBoard, updateBoard}=useKanbanStore()
    const {t}=useAppTranslation();

    const onSubmit=(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const newCard:Omit<Board,"id"|"createdDate"|"updatedDate">={
            name:boardName
        }
        if(!item){
            addBoard(newCard)
            closeModal()
        }
        else{
            updateBoard(item?.id,newCard)
            closeModal()
        }
    }

    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <input placeholder={t("Board Title")} type={"text"} value={boardName} onChange={(e)=>setBoardName(e.currentTarget.value)}/>
            <Button type={ButtonType.primary}>
                Save
            </Button>
        </form>
    )
}