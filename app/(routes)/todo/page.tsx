"use client";

import Button from "@/_components/base/button";
import Input from "@/_components/base/input";
import ItemTask from "@/_components/todo/item-task";
import { Task } from "@/_constants/providers/todo-list";
import { TodoListContext } from "@/_providers/todo-list";
import React, { useContext } from "react";
import { Field, Form } from "react-final-form";

const useViewModel = () => {
  const { onAddTask } = useContext(TodoListContext);

  const onSubmit = (task: Task) => {
    onAddTask(task);
  };

  return {
    onSubmit,
  };
};

const ToDo = () => {
  const { todoList } = useContext(TodoListContext);
  const { onSubmit } = useViewModel();
  return (
    <div className="p-layout-tablet xl:p-layout-desktop flex h-full w-full flex-col items-center gap-4 overflow-hidden xl:gap-8">
      <h1 className="text-center text-2xl font-bold xl:text-4xl">
        My Todo List
      </h1>

      <div className="relative flex min-h-[400px] w-full flex-col items-center gap-4 overflow-y-auto rounded-lg border-2 bg-gray-100 p-2 md:max-w-[900px] lg:p-4 xl:max-w-[1200px]">
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, pristine, invalid }) => (
            <form
              className="flex w-full justify-between"
              onSubmit={async (event) => {
                await handleSubmit(event);
                form.reset();
              }}
            >
              <div className="w-3/4">
                <Input name="topic" placeholder="Input details task" />
              </div>

              <Button type="submit" disabled={invalid || pristine}>
                Add task
              </Button>
            </form>
          )}
        />

        <hr />

        {todoList.length > 0 ? (
          todoList.map((task) => <ItemTask key={task.id} task={task} />)
        ) : (
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-2xl font-bold text-gray-500">
            Empty data
          </p>
        )}
      </div>
    </div>
  );
};

export default ToDo;
