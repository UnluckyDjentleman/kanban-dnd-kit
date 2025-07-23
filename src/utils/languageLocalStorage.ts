export const getLanguageFromLocalStorage=()=>{
    const obj=JSON.parse(String(localStorage.getItem("kanban-storage")))
    if(obj){
        const languageObj=obj["state"];
        return languageObj.language??null;
    }
    return null
}