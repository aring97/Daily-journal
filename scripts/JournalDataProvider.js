let entries=[]
const eventHub=document.querySelector(".main")

export const getEntries=()=>{
    return fetch("http://localhost:3000/entries")
    .then(entrys=>entrys.json())
    .then(entry=>{entries=entry})
}

export const useJournalEntries = () => {
    return entries
}

const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}
export const saveJournalEntry=(entryObj)=>{
    //use fetch with the Post method to add your entry to your API
    fetch("http://localhost:3000/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObj)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}