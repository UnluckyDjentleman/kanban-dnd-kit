import { ReactNode } from "react";
import styles from "./column.module.css"
import { useDroppable } from "@dnd-kit/core";
import { useAppTranslation } from "../../../store/hooks/useTranslation";


export default function Column({columnName, children}:{columnName:string, children:ReactNode}){
    
    const {setNodeRef}=useDroppable({id:columnName})
    const {t}=useAppTranslation()
    
    return(
        <div className={styles.column} ref={setNodeRef}>
            <h3 className={styles.title}>{t(columnName.toString())}</h3>
            {children}
        </div>
    )
}