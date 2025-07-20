import { useDraggable, DragOverlay } from "@dnd-kit/core";
import {CSS} from "@dnd-kit/utilities"

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
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {children}
        </div>
    )
}