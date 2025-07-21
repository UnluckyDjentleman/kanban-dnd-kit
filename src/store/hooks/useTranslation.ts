import { useTranslation } from "react-i18next"

export const useAppTranslation=()=>{
    const {t,i18n}=useTranslation();

    const changeLanguageCallback=(lng:string)=>{
        i18n.changeLanguage(lng)
    }

    return {t,changeLanguageCallback}
}