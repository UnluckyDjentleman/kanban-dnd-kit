import { clsx } from "clsx"
import styles from "./button.module.css"
import { JSX, ReactNode } from "react"
import { ButtonType } from "../../../constants/enums/buttonType";

export default function Button({type, children, onClick}:{type:ButtonType, children:ReactNode|JSX.Element, onClick?:(e?:React.MouseEvent<HTMLButtonElement>)=>void}){
    
    const getButtonClassByType=(type:ButtonType)=>{
        switch(type){
            case ButtonType.primary: return styles.primaryButton;
            case ButtonType.outlined: return styles.outlinedButton;
            case ButtonType.dashed: return styles.dashedButton;
        }
    }
    
    return (
        <button className={clsx(styles.button, getButtonClassByType(type))} onClick={onClick}>{children}</button>
    )
}