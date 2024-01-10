"use client";

import { ReactNode } from "react";
import { TodoListProvider } from "./todo-list";

export function Providers({ children }: { children: ReactNode }) {
  return <TodoListProvider>{children}</TodoListProvider>;
}
