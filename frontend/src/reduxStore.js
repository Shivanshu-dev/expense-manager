import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import { expenseReducer } from "./reducers/expenseReducer";
import { filtersReducer } from "./reducers/filterReducer";

const user = localStorage.getItem("User")
  ? JSON.parse(localStorage.getItem("User"))
  : {};

const initialState = { users: { user } };

// console.log(initialState);

export const store = createStore(
  combineReducers({
    users: authReducer,
    expenses: expenseReducer,
    filters: filtersReducer,
  }),
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
