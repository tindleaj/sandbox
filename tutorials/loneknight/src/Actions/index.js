import { UPDATE_TASK, ADD_TASK } from "./Types";

export function updateTask(id, values) {
  if (typeof values === "object") {
    return {
      type: UPDATE_TASK,
      payload: { id, values }
    };
  }
  throw new Error("invalid task update values");
}

export function addTask(values) {
  if (typeof values === "object") {
    if (values.id && values.position && values.title && values.text) {
      return {
        type: ADD_TASK,
        payload: values
      };
    }
  }
  throw new Error("invalid task values");
}
