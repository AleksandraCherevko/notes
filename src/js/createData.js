import { refs } from './refs';
import { nanoid } from 'nanoid';
export function createData() {
  const formValues = { id: nanoid() };
  new FormData(refs.form).forEach((value, key) => {
    formValues[key] = value;
  });
  return formValues;
}
