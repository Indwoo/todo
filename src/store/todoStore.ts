import { create } from 'zustand';

export type TodoItem = {
  id: string;
  groupid: string;
  title: string;
  start: string;
  end: string;
};

type TodoState = {
  todo: TodoItem[];
  addTodo: (todo: TodoItem) => void;
};

export const useTodoStore = create<TodoState>((set) => ({
  todo: [],
  addTodo: (todo) => set((state) => ({ todo: [...state.todo, todo] })),
}));
