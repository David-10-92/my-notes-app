import { useContext, useEffect } from "react"
import HeaderComponent from "../component/HeaderComponent"
import { NoteContext } from "../context/node.context"
import NoteCard from "../component/NoteCard"
import "./NotePage.css"
import CreateNote from "../component/createNote"

function NotePage() {
    const {notes,getNotes} = useContext(NoteContext)

    useEffect(() => {
        getNotes()
    },[])

    const noteCards = notes.map((note) => {
        return(
            <li key={note.id}>
                <NoteCard note={note}></NoteCard>
            </li>
        )
    })

  return (
    <>
        <HeaderComponent></HeaderComponent>
        <section id="notes-page">
            <h2>Notes</h2>
            <ul className="note-list">
                <li>
                    <CreateNote></CreateNote>
                </li>
                {noteCards}</ul>
        </section>
    </>
  )
}

export default NotePage