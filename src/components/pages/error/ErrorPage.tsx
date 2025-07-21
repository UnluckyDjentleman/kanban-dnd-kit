import { useAppTranslation } from "../../../store/hooks/useTranslation"

export default function ErrorPage(){
    const {t}=useAppTranslation()
    return (
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"32px",color:"red"}}>{t("404 Not Found")}...</div>
    )
}