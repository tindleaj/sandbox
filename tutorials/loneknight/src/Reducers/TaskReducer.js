import { ADD_TASK, UPDATE_TASK } from "../Actions/Types";

export default function(state = { list: [] }, action) {
  switch (action.type) {
    case ADD_TASK:
      return { list: [...state.list, action.payload] };
    case UPDATE_TASK:
      let { list } = state;
      console.log("UPDATE_TASK", action);
      list = list.map(item => {
        if (item.id === action.payload.taskId) {
          return action.payload.values;
        }
      });
    default:
      return state;
  }
}
