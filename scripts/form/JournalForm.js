import {saveJournalEntry} from "../JournalDataProvider.js"
const contentTarget=document.querySelector(".forum")
const eventHub=document.querySelector(".main")

eventHub.addEventListener("click", clickEvent=>{
    if(clickEvent.target.id==="submit"){
        const concept=document.querySelector("#concept")
        const date=document.querySelector("#date")
        const mood=document.querySelector("#mood")
        const content=document.querySelector("#entry")
        const entryObj={
            "date":date.value,
            "concept":concept.value,
            "entry":content.value,
            "mood":mood.value
        }
        saveJournalEntry(entryObj)
    }
})
const render =()=>{
    contentTarget.innerHTML+=`<fieldset>
<p>Concept Covered</p>
<input type="text" id="concept"/>
<p>Journal Entry</p>
<textarea id="entry" placeholder="enter text here"></textarea>
<p>Date of entry</p>
<input type="date" id="date"/>
<p>Mood</p>
<select id="mood">
    <option value="happy">Happy</option>
    <option value="neutral">Neutral</option>
    <option value="sad">Sad</option>
    <option value="frustrated">Frustrated</option>
    <option value="content">Content</option>
</select>
<p>Record Journal Entry</p>
<button id="submit">submit</button>
</section>`
}

export const JournalFormComponent=()=>{
    render()
}