import { useNavigate } from "react-router-dom"
import { ButtonType } from "../../../constants/enums/buttonType"
import { useAppTranslation } from "../../../store/hooks/useTranslation"
import Button from "../../shared/button/button"
import styles from "./error-page.module.css"

export default function ErrorPage(){
    const {t}=useAppTranslation()
    const navigate=useNavigate()
    return (
        <div className={styles.main}>
            <p>{t("404 Not Found")}...</p>
            <Button type={ButtonType.outlined} onClick={()=>navigate("/")}>
                {t("Back")}
            </Button>
        </div>
    )
}