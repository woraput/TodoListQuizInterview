import { Task } from "@/_constants/providers/todo-list";
import { TodoListContext } from "@/_providers/todo-list";
import { useContext, useState } from "react";

const useViewModel = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { onEditTask, onDeleteTask } = useContext(TodoListContext);

  const onEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const onSubmit = (task: Task) => {
    onEditTask(task);
    setIsEdit(false);
  };

  return { onSubmit, onDeleteTask, isEdit, onEdit };
};

export default useViewModel;
