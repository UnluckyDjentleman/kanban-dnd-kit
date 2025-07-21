import {StateCreator} from "zustand"
import { countries } from "../../constants/arrays/countries";

interface LanguageSlice{
    language:string;
    setLanguage:(value:string)=>void
}

export type {LanguageSlice}

export const createLanguageSlice: StateCreator<LanguageSlice>=(set)=>(
    {
        language:countries[0].id,
        setLanguage:(value:string)=>{
            set({language:value})
        }
    }
)