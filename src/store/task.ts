import { writable } from 'svelte/store';
import { v4 as uuid } from 'uuid';

export type Task = {
  id: string;
  title: string;
  content: string;
}

const json = localStorage.getItem("tasks");
const data = json ? JSON.parse(json) : []
export const tasksState = writable<Task[]>(data);

export const addTask = (task: Omit<Task, "id">) => {
  tasksState.update(current => [...current, {...task, id: uuid()}]);
}

export const editTask = (task: Task) => {
  tasksState.update(current => current.map(item => item.id === task.id ? {...task} : item))
}

export const removeTask = (id: string) => {
  tasksState.update(current => current.filter(item => item.id !== id ));
}