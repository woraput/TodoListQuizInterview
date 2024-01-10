import { ReactNode, createContext } from "react";
import useViewModel, { TodoListContextProps } from "./view-model";

export const TodoListContext = createContext({} as TodoListContextProps);

export function TodoListProvider({ children }: { children: ReactNode }) {
  const { todoList, onAddTask, onEditTask, onDeleteTask } = useViewModel();

  return (
    <TodoListContext.Provider
      value={{
        todoList,
        onAddTask,
        onEditTask,
        onDeleteTask,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
}
