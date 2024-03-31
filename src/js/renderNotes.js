import { localStorageAPI } from './localStorageAPI';
import { createNoteMarkup } from './createNoteMarkup';
import { refs } from './refs';

export function renderNotes() {
  const notes = localStorageAPI.getAll();
  const markup = notes.map(createNoteMarkup).join('');
  refs.list.insertAdjacentHTML('beforeend', markup);
}
