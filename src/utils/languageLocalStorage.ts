export const getLanguageFromLocalStorage=()=>{
    const obj=JSON.parse(String(localStorage.getItem("kanban-storage")))
    const languageObj=obj["state"];
    return languageObj.language;
}