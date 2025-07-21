import { useNavigate } from "react-router-dom"
import { Board } from "../../../constants/types/board"
import styles from "./board.module.css"
import Button from "../../shared/button/button"
import { ButtonType } from "../../../constants/enums/buttonType"
import { useContext } from "react"
import { ModalContext } from "../../shared/modal/context/modal.context"
import { useKanbanStore } from "../../../store/store"
import {MdEdit, MdDelete} from "react-icons/md"
import { useAppTranslation } from "../../../store/hooks/useTranslation"

export default function BoardComponent({el}:{el:Board}){

    const navigate=useNavigate()
    const {viewModalBoard}=useContext(ModalContext)
    const {deleteBoard}=useKanbanStore()

    const {t}=useAppTranslation()

    const navigateToKanban=(id:number)=>{
        navigate(`/kanban/${id}`)
    }

    return (
        <div className={styles.board} onClick={()=>navigateToKanban(el.id)}>
            <h1 className={styles.title}>{el.name}</h1>
            <div className={styles.info}>
                <span>{t("Created")}: {new Date(el.createdDate).toLocaleDateString().replace("/","-")}</span>
                <span>{t("Updated")}: {new Date(el.updatedDate).toLocaleDateString().replace("/","-")}</span>
            </div>
            <div className={styles.footer}>
                <Button type={ButtonType.dashed} onClick={(e?:React.MouseEvent<HTMLButtonElement>)=>{
                    e?.stopPropagation();
                    viewModalBoard(el)
                }}>
                    <MdEdit size={18}/>
                </Button> 
                <Button type={ButtonType.dashed} onClick={(e?:React.MouseEvent<HTMLButtonElement>)=>{
                    e?.stopPropagation()
                    deleteBoard(el.id)
                }}>
                    <MdDelete size={18}/>
                </Button>
            </div>
        </div>
    )
}