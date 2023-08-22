import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "./features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="w-full md:w-auto">
      <ul role="list" className="divide-y divide-gray-100">
        {todos.map((todo) => (
          <li className="flex justify-between gap-x-6 py-5" key={todo.id}>
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {todo.text}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p
                className="mt-1 text-xs leading-5 text-gray-500"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Delete
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
