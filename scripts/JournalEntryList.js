/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries, getEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const eventHub=document.querySelector(".main")
const entryLog = document.querySelector(".PreviousNotes")

eventHub.addEventListener("journalStateChanged", change=>{
    EntryListComponent()
})
export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    getEntries().then(()=>{
    const entries = useJournalEntries()
    for (const entry of entries) {
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
        entryLog.innerHTML +=`
        <section class="entrySection">
        ${JournalEntryComponent(entry)}
        </section>`
    }
    })
}