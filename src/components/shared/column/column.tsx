import { ReactNode } from "react";
import styles from "./column.module.css"
import { CardStatus } from "../../../constants/enums/cardStatus";
import { useDroppable } from "@dnd-kit/core";

export default function Column({columnName, children}:{columnName:string, children:ReactNode}){
    
    const {setNodeRef}=useDroppable({id:columnName})
    
    return(
        <div className={styles.column} ref={setNodeRef}>
            <h3 className={styles.title}>{columnName.toString()}</h3>
            {children}
        </div>
    )
}