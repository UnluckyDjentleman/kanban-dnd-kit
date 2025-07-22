import { countries } from "../../../constants/arrays/countries";
import styles from "./select.module.css"
import Select, { SingleValue } from "react-select"
import { Country } from "../../../constants/types/country";
import { useAppTranslation } from "../../../store/hooks/useTranslation";
import { useKanbanStore } from "../../../store/store";

export default function SelectComponent(){

    const {changeLanguageCallback}=useAppTranslation()
    const {setLanguage,language}=useKanbanStore()
    
    const changeAppLanguage=(lang:SingleValue<Country>)=>{
        setLanguage(lang?.id as string);
        console.log(lang);
        changeLanguageCallback(lang?.id as string)
    }

    const selectedCountry=countries.find(el=>el.id===language) as Country
    console.log(selectedCountry);

    return(
        <Select className={styles.select} 
        options={countries}
        formatOptionLabel={(country)=>(
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img 
                    src={country.icon} 
                    width={20} 
                    style={{ marginRight: '10px' }} 
                    alt={country.name} 
                />
                <span>{country.name}</span>
            </div>
        )}
        value={selectedCountry}
        defaultValue={countries[0]}
        getOptionValue={(option) => option.id}
        isOptionSelected={(option) => option.id === language}
        onChange={changeAppLanguage}
        isDisabled={false}
        isLoading={false}
        isClearable={false}
        isRtl={false}
        isSearchable={false}
        ></Select>
    )
}