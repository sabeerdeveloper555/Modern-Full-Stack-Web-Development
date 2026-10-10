const noteTitle = document.getElementById('noteTitle');
const noteContent = document.getElementById('noteContent');
const addNoteBtn = document.getElementById('addNoteBtn');
const notesContainer = document.getElementById('notesContainer');
const errorMessage = document.getElementById('errorMessage');
const cancelEditBtn = document.getElementById('cancelEditBtn');
const noNotesMessage = document.getElementById('noNotesMessage');
const emptyStateMessage = document.getElementById('emptyStateMessage');
const searchInput = document.getElementById('searchInput');

let notes = [];
let editingNoteId = null;

// Load notes from Local Storage
const savedNotes = localStorage.getItem('notes');

if (savedNotes) {
  try {
    notes = JSON.parse(savedNotes);

    if (!Array.isArray(notes)) {
      notes = [];
    }
  } catch (error) {
    notes = [];
    console.error('Unable to load saved notes:', error);
  }
}

// Render saved notes when the page loads
renderNotes();

// Add or update a note
addNoteBtn.addEventListener('click', () => {
  const title = noteTitle.value.trim();
  const content = noteContent.value.trim();

  if (title === '' || content === '') {
    errorMessage.textContent = 'Please enter both a title and note content';
    return;
  }

  errorMessage.textContent = '';

  if (editingNoteId !== null) {
    // Update the existing note
    const note = notes.find((item) => item.id === editingNoteId);

    if (note) {
      note.title = title;
      note.content = content;
    }

    editingNoteId = null;
    addNoteBtn.textContent = 'Add Note';
  } else {
    // Create a new note
    const note = {
      id: Date.now(),
      title: title,
      content: content,
    };

    notes.push(note);
  }

  saveNotes();
  clearForm();
  renderNotes();
});

// Cancel editing
cancelEditBtn.addEventListener('click', () => {
  editingNoteId = null;

  clearForm();

  addNoteBtn.textContent = 'Add Note';
  cancelEditBtn.hidden = true;

  errorMessage.textContent = '';
});

// Search notes by title or content
searchInput.addEventListener('input', () => {
  renderNotes();
});

// Render notes according to the current search
function renderNotes() {
  const searchText = searchInput.value.trim().toLowerCase();

  const filteredNotes = notes.filter((note) => {
    return (
      note.title.toLowerCase().includes(searchText) ||
      note.content.toLowerCase().includes(searchText)
    );
  });

  notesContainer.innerHTML = '';

  // Show matching notes
  filteredNotes.forEach((note) => {
    renderNote(note);
  });

  // Show the appropriate message
  updateMessages(filteredNotes);
}

// Render one note card
function renderNote(note) {
  const noteCard = document.createElement('div');
  noteCard.classList.add('note-card');

  const noteHeading = document.createElement('h3');
  noteHeading.textContent = note.title;

  const noteText = document.createElement('p');
  noteText.textContent = note.content;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';

  // Delete note
  deleteBtn.addEventListener('click', () => {
    notes = notes.filter((item) => item.id !== note.id);

    // Reset the form if the edited note is deleted
    if (editingNoteId === note.id) {
      editingNoteId = null;
      clearForm();

      addNoteBtn.textContent = 'Add Note';
      cancelEditBtn.hidden = true;

      errorMessage.textContent = '';
    }

    saveNotes();
    renderNotes();
  });

  // Edit note
  editBtn.addEventListener('click', () => {
    noteTitle.value = note.title;
    noteContent.value = note.content;

    editingNoteId = note.id;

    addNoteBtn.textContent = 'Update Note';
    cancelEditBtn.hidden = false;

    errorMessage.textContent = '';

    noteTitle.focus();
  });

  noteCard.appendChild(noteHeading);
  noteCard.appendChild(noteText);
  noteCard.appendChild(deleteBtn);
  noteCard.appendChild(editBtn);

  notesContainer.appendChild(noteCard);
}

// Update empty-state and search messages
function updateMessages(filteredNotes) {
  if (notes.length === 0) {
    emptyStateMessage.hidden = false;
    noNotesMessage.hidden = true;
  } else {
    emptyStateMessage.hidden = true;
    noNotesMessage.hidden = filteredNotes.length > 0;
  }
}

// Update Empty State independently if needed
function updateEmptyState() {
  emptyStateMessage.hidden = notes.length > 0;
}

// Save notes to Local Storage
function saveNotes() {
  localStorage.setItem('notes', JSON.stringify(notes));
}

// Clear form fields
function clearForm() {
  noteTitle.value = '';
  noteContent.value = '';
  errorMessage.textContent = '';
  cancelEditBtn.hidden = true;
}
