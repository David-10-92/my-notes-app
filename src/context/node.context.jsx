import { createContext, useState } from "react";

const NoteContext = createContext()

function NoteProviderWrapper(props){

    const [notes,setNotes] = useState([])

    const API_URL = "https://ca34fdef498644b54e9b.free.beeceptor.com/api/notes/"

    const getNotes = async () => {
        try {
            const api = await fetch(API_URL)
            const data = await api.json()
            setNotes(data.reverse())
        } catch (error) {
            console.log(error)
        }
    }

    const updateNote = (updatedNote) => {
        const updatedNotes = notes.map(note => {
            if(note.id !== updatedNote.id) return note
            return updatedNote
        })
        setNotes(updatedNotes)
    }

    const addNote = async (newNote) => {
        try {
            await fetch(API_URL, {
                method: "POST",
                body: JSON.stringify(newNote)
            })
            setNotes([newNote, ...notes])
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <NoteContext.Provider value={{notes,getNotes,setNotes,updateNote,addNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export{NoteContext,NoteProviderWrapper}