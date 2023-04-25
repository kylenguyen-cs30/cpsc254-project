const notesContainer = document.getElementById("app");
const addNoteButt = notesContainer.querySelector(".add-note");
input = document.getElementById("search_input");


input.addEventListener("input", () => searchFor(input));
addNoteButt.addEventListener("click", () => addNote());


function searchFor(input) {

	const notes = getNotes();
	const searchQuery = input.value.toLowerCase();
	//will return new array with notes that include input
	const filteredNotes = notes.filter(note => note.content.toLowerCase().includes(searchQuery));

	if (searchQuery === "") {
		displayNotes(notes);
	} else {
		displayNotes(filteredNotes);
	}

}


function displayNotes(notes) {
	notesContainer.innerHTML = "";
	
	notes.forEach(note => {
		const noteElement = createNote(note.id, note.content);
		notesContainer.appendChild(noteElement);
	});
	//Display all searched notes then add note button 
	notesContainer.appendChild(addNoteButt);

}


//This loads in the notes from local
getNotes().forEach(note => {
	const noteElement = createNote(note.id, note.content);
	notesContainer.insertBefore(noteElement, addNoteButt);

});


//getting notes from local storage
function getNotes() {

	return JSON.parse(localStorage.getItem("notess") || "[]");  // this function retrieves an array of "notess" from the local storage, or an empty array if none is found.

}


function saveNotes(notes) {
	localStorage.setItem("notess", JSON.stringify(notes));
}


function createNote(id, content) {
	const element = document.createElement("textarea");
	element.classList.add("note-text");
	element.value = content;
	element.placeholder = "Empty note";
	element.style.marginBottom = "10px";
	element.addEventListener("change", () => {
		updateNote(id, element.value);
	});

	element.addEventListener("dblclick", () => {
		const doDelete = confirm("Are you sure you want to delete?");
		if (doDelete) {
			deleteNote(id, element);
		}
	});
	return element;
}


function updateNote(id, newContent) {
	const notes = getNotes();
	const targetNote = notes.filter(note => note.id == id)[0];
	targetNote.content = newContent;
	saveNotes(notes);
}


function deleteNote(id, element) {
	const notes = getNotes().filter(note => note.id != id);
	saveNotes(notes);
	notesContainer.removeChild(element);
}


function addNote() {
	const existingNotes = getNotes();
	const noteObject = {
		id: Math.floor(Math.random() * 100000), content: ""
	};

	const noteElement = createNote(noteObject.id, noteObject.content);
	notesContainer.insertBefore(noteElement, addNoteButt);
	existingNotes.push(noteObject);
	saveNotes(existingNotes);
}







