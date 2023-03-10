import React from "react";
import { ACTIONS } from "./App";

export default function Todo({ todo, dispatch }) {
  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.MARK_COMPLETE,
            payload: { id: todo.id },
          })
        }
      >
        Complete
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: { id: todo.id },
          })
        }
      >
        Delete
      </button>
    </div>
  );
}
