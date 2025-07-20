import { useContext } from 'react'
import { ModalContext } from './context/modal.context'
import styles from './modal.module.css'

export default function Modal({children}:{children:React.ReactNode}){

    const {closeModal}=useContext(ModalContext)

    return(
        <>
            <div className={styles["modal-bg"]} onClick={closeModal}/>
            <div className={styles.modal}>
                <div className={styles.wrapper}>{children}</div>
            </div>
        </>
    )
}