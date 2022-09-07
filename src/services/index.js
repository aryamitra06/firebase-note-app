import { db } from "../firebase-config";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const notesCollectionRef = collection(db, "notes");

//Create a new note
export const createNote = (newNote) => {
    return addDoc(notesCollectionRef, newNote)
}

//fetch note by id
export const getNoteById = (id) => {
    const noteDoc = doc(db, "notes", id);
    return getDoc(noteDoc);
}

//Update a new note
export const updateNote = (id, updatedNote) => {
    const noteDoc = doc(db, "notes", id);
    return updateDoc(noteDoc, updatedNote)
}

//delete note
export const deleteNote = (id) => {
    const noteDoc = doc(db, "notes", id);
    return deleteDoc(noteDoc);
}

//fetch all notes
export const fetchNotes = () => {
    try {
        return getDocs(notesCollectionRef);
    } catch (error) {
    }
}