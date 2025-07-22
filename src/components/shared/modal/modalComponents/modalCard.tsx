import { FormEvent, useContext, useState } from "react";
import { Card } from "../../../../constants/types/card";
import styles from "./modalComponent.module.css"
import Button from "../../button/button";
import { colors } from "../../../../constants/enums/colors";
import clsx from "clsx";
import { useKanbanStore } from "../../../../store/store";
import { ModalContext } from "../context/modal.context";
import { ButtonType } from "../../../../constants/enums/buttonType";
import { CardStatus } from "../../../../constants/enums/cardStatus";
import { useAppTranslation } from "../../../../store/hooks/useTranslation";

export default function ModalCard({card, boardId}:{card?:Card, boardId?:string}){

    const {addCard, updateCard}=useKanbanStore()
    const {closeModal}=useContext(ModalContext)

    console.log(boardId);

    const [color, setColor]=useState(card?.color||colors[0]);
    const [date,setDate]=useState(card?.deadline);
    const [title, setTitle]=useState(card?.title);
    const {t}=useAppTranslation()

    const onSubmit=(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const newCard:Omit<Card,"id">={
            title: title as string,
            deadline: date?date as Date:new Date(),
            status: !card?CardStatus["To Do"]:card.status,
            color: color as string,
            board_id: parseInt(boardId as string,10)
        }
        //if setted date is lower than current then set it to current
        if(newCard.deadline<new Date()){
            newCard.deadline=new Date();
        }
        if(!card){
            addCard(newCard)
            closeModal()
        }
        else{
            updateCard(card?.id as string,newCard)
            closeModal()
        }
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <input required={true} placeholder={t("Card Title")} type={"text"} value={title} onChange={(e)=>setTitle(e.currentTarget.value)}/>
            <label>{t("Deadline Date")}:</label>
            <input required={true} placeholder={t("Deadline Date")} type={"date"} value={date?new Date(date as Date).toISOString().split('T')[0]:new Date().toISOString().split('T')[0]} onChange={(e)=>setDate(isNaN(new Date(e.currentTarget.value).getTime()) ? undefined : new Date(e.currentTarget.value))}/>
            <div className={styles["color-container"]}>
                {
                    colors.map(el=>(
                        <div onClick={()=>setColor(el)} key={el} className={clsx(styles.item, color===el&&styles.active)} style={{backgroundColor:el}}></div>
                    ))
                }
            </div>
            <Button type={ButtonType.primary}>
                {t("Save")}
            </Button>
        </form>
    )
}