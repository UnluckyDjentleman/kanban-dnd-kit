import { useDraggable } from "@dnd-kit/core";
import {CSS} from "@dnd-kit/utilities"
import styles from "./draggable.module.css"
import { MdDragIndicator } from "react-icons/md";

export default function DraggableCard({id,children}:{
    id:string,
    children: React.ReactNode
}){
    const {attributes, listeners, setNodeRef, transform, isDragging}=useDraggable({id});

    const style={
        transform: CSS.Translate.toString(transform),
        opacity: isDragging?0.5:1,
        zIndex: isDragging?100:1
    }

    return(
        <div ref={setNodeRef} style={style} className={styles.draggable} >
            <div className={styles.dragHandle} {...listeners} {...attributes}>
                <MdDragIndicator size={18}/>
            </div>
            <div className={styles.cardContent}>
                {children}
            </div>
        </div>
    )
}