/**
 * Створи список справ.
 * На сторінці є два інпути які має вводиться назва і текст задачі.
 * Після натискання на кнопку "Додати" завдання додається до списку #task-list.
 *
 * Розмітка картки задачі
 * <li class="task-list-item">
 *     <button class="task-list-item-btn">Удалить</button>
 *     <h3>Заголовок</h3>
 *     <p>Текст</p>
 * </li>
 *
 * У кожної картки має бути кнопка "Видалити", щоб можна було
 * прибрати завдання зі списку.
 * Список із завданнями має бути доступним після перезавантаження сторінки.
 */

import { refs } from './js/refs';
import { createData } from './js/createData';
import { createNoteMarkup } from './js/createNoteMarkup';
import { localStorageAPI } from './js/localStorageAPI';
import { renderNotes } from './js/renderNotes';

refs.form.addEventListener('submit', submitForm);
renderNotes();

function submitForm(event) {
  event.preventDefault();
  const formValues = createData();

  const markup = createNoteMarkup(formValues);

  refs.list.insertAdjacentHTML('beforeend', markup);
  localStorageAPI.add(formValues);
}
