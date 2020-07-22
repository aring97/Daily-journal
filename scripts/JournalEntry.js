/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
           <div class="date">${entry.date}</div>
           <div class="concept">${entry.concept}</div>
           <div class="entry">${entry.entry}</div>
           <div class="mood">${entry.mood}</div>
           <div class="delete">Delete</div>
           <div class="edit">Edit</div>
        </section>
    `
}