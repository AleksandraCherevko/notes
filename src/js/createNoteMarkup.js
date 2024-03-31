export function createNoteMarkup(formValues) {
  return `<li class="task-list-item">
  <button class="task-list-item-btn" data-id=${formValues.id}>Удалить</button>
  <h3>${formValues.taskName}</h3>
 <p>${formValues.taskText}</p>
   </li>`;
}
