import { Card } from "../../../constants/types/card"
import styles from "./card.module.css"

export default function KanbanCard({el}:{el:Card}){
    return (
        <div className={styles.card}>
            <div className={styles.header} style={{backgroundColor: el.color}}>
                <h1>{el.title}</h1>
            </div>
            <div className={styles.info}>
                <span>Deadline: {new Date(el.deadline).toLocaleDateString().replace("/","-")}</span>
            </div>
        </div>
    )
}