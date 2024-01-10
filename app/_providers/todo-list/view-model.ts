"use client";

import { Task } from "@/_constants/providers/todo-list";
import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

export type TodoListContextProps = {
  todoList: Task[];
  onAddTask: (task: Task) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (id: string) => void;
};

function useViewModel() {
  const [todoList, setTodoList] = useState<Task[]>([]);

  const sortingStatus = useCallback((a: Task, b: Task) => {
    return Number(a.isDone) - Number(b.isDone);
  }, []);

  const onAddTask = (task: Task) => {
    setTodoList(
      [...todoList, { ...task, id: uuidv4(), isDone: false }].sort(
        sortingStatus,
      ),
    );
  };

  const onEditTask = (task: Task) => {
    const index = todoList.findIndex((it) => it.id === task.id);
    const newList = [...todoList];
    newList[index] = task;
    setTodoList(newList.sort(sortingStatus));
  };

  const onDeleteTask = (id: string) => {
    Swal.fire({
      title: "Confirm delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      reverseButtons: true,
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setTodoList(todoList.filter((it) => it.id !== id));
        Swal.fire({
          title: "Deleted!",
          text: "Your task has been deleted.",
          icon: "success",
          confirmButtonColor: "#6e7881",
        });
      }
    });
  };

  return { todoList, onAddTask, onEditTask, onDeleteTask };
}

export default useViewModel;
