"use client";

import Button from "@/_components/base/button";
import Checkbox from "@/_components/base/checkbox";
import { AppIconEnum } from "@/_components/base/icon/view-model";
import { ButtonVariant } from "@/_constants/components/button";
import { Task } from "@/_constants/providers/todo-list";
import React from "react";
import { Form } from "react-final-form";
import useViewModel from "./view-model";
import Input from "@/_components/base/input";
import { cx } from "@emotion/css";

type Props = {
  task: Task;
};

const ItemTask = ({ task }: Props) => {
  const { onSubmit, onDeleteTask, isEdit, onEdit } = useViewModel();

  return (
    <Form
      initialValues={task}
      onSubmit={onSubmit}
      render={({ handleSubmit, pristine, invalid, form }) => {
        const onCancel = () => {
          onEdit();
          form.reset();
        };

        return (
          <form
            className="flex w-full justify-between gap-2 rounded-lg bg-white p-2 transition-all duration-300"
            onSubmit={async (event) => {
              await handleSubmit(event);
              form.reset();
            }}
          >
            <div className="flex w-2/3 flex-1 items-center gap-2 md:w-full md:gap-4">
              {isEdit ? (
                <div className="w-5/6">
                  <Input name="topic" placeholder="Edit details task" />
                </div>
              ) : (
                <>
                  <Checkbox
                    id={`checkbox-${task.id}`}
                    name="isDone"
                    isToggleSubmit
                    disabled={isEdit}
                  />
                  <p
                    className={cx(
                      task.isDone && "opacity-20 transition-all duration-300",
                      "line-clamp-1 w-full break-words text-sm md:text-lg",
                    )}
                  >
                    {task.topic}
                  </p>
                </>
              )}
            </div>
            <div className="flex flex-shrink-0 items-center gap-2">
              {isEdit ? (
                <>
                  <Button type="submit" disabled={pristine || invalid}>
                    Save
                  </Button>
                  <Button onClick={onCancel}>Cancel</Button>
                </>
              ) : (
                <>
                  <Button
                    variant={ButtonVariant.ICON}
                    onClick={() => {
                      onEdit();
                    }}
                    icon={AppIconEnum.EDIT}
                  />
                  <Button
                    variant={ButtonVariant.ICON}
                    onClick={() => onDeleteTask(task.id)}
                    icon={AppIconEnum.TRASH}
                  />
                </>
              )}
            </div>
          </form>
        );
      }}
    />
  );
};

export default ItemTask;
