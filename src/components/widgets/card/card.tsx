import { MdDelete, MdEdit } from "react-icons/md";
import { ButtonType } from "../../../constants/enums/buttonType";
import { Card } from "../../../constants/types/card"
import Button from "../../shared/button/button";
import styles from "./card.module.css"
import { ModalContext } from "../../shared/modal/context/modal.context";
import { useContext } from "react";
import { useKanbanStore } from "../../../store/store";
import { useParams } from "react-router-dom";
import { useAppTranslation } from "../../../store/hooks/useTranslation";

export default function KanbanCard({el}:{el:Card}){

    const {viewModalCard}=useContext(ModalContext)
    const {boardId}=useParams();
    const {t}=useAppTranslation();
    const {deleteCard}=useKanbanStore()

    return (
        <div className={styles.card}>
            <div className={styles.header} style={{backgroundColor: el.color}}>
                <h1>{el.title}</h1>
            </div>
            <div className={styles.info}>
                <span>{t("Deadline Date")}: {new Date(el.deadline).toLocaleDateString().replace("/","-")}</span>
            </div>
            <div className={styles.footer}>
                <Button type={ButtonType.dashed} onClick={(e?:React.MouseEvent<HTMLButtonElement>)=>{
                    viewModalCard(el,boardId)
                }}>
                    <MdEdit size={18}/>
                </Button> 
                <Button type={ButtonType.dashed} onClick={(e?:React.MouseEvent<HTMLButtonElement>)=>{
                    deleteCard(el.id)
                }}>
                    <MdDelete size={18}/>
                </Button>
            </div>
        </div>
    )
}