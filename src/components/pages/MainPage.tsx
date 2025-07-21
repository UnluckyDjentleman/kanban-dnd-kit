import { useContext } from "react";
import Button from "../shared/button/button";
import { ModalContext } from "../shared/modal/context/modal.context";
import { useKanbanStore } from "../../store/store";
import BoardComponent from "../widgets/board/board";
import { ButtonType } from "../../constants/enums/buttonType";
import Select from "../shared/select/select";
import { useAppTranslation } from "../../store/hooks/useTranslation";
import SelectComponent from "../shared/select/select";
import { Country } from "../../constants/types/country";
import { countries } from "../../constants/arrays/countries";

export default function MainPage(){

    const {viewModalBoard}=useContext(ModalContext);
    const {boards}=useKanbanStore()
    const {t}=useAppTranslation()

    return(
        <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{display:"flex",justifyContent:"flex-end", margin:"12px"}}>
                <SelectComponent></SelectComponent>
                <Button type={ButtonType.primary} onClick={()=>viewModalBoard(undefined)}>
                    {t("Add New Board")}
                </Button>
            </div>
            <div style={{display:"flex",width:"100%",flexWrap:"wrap",gap:"4px"}}>
                {
                    boards.map(el=>(
                        <BoardComponent key={el.id} el={el}/>
                    ))
                }
            </div>
        </div>
    )
}