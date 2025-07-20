import { useNavigate } from "react-router-dom"
import { Board } from "../../../constants/types/board"
import styles from "./board.module.css"

export default function BoardComponent({el}:{el:Board}){

    const navigate=useNavigate()

    const navigateToKanban=(id:number)=>{
        navigate(`/kanban/${id}`)
    }

    return (
        <div className={styles.board} onClick={()=>navigateToKanban(el.id)}>
            <h1 className={styles.title}>{el.name}</h1>
            <div className={styles.info}>
                <span>Created: {new Date(el.createdDate).toLocaleDateString().replace("/","-")}</span>
                <span>Updated: {new Date(el.updatedDate).toLocaleDateString().replace("/","-")}</span>
            </div>
        </div>
    )
}