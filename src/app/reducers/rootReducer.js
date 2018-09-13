import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";
import eventReducer from "../../features/event/eventReducer";
import modalsReducer from "../../features/modals/modalReducer";
import authReducer from "../../features/auth/authReducer";
import asyncReducer from "../../features/async/asyncReducer";

const rootReducer = combineReducers({
  events: eventReducer,
  form: formReducer,
  modals: modalsReducer,
  auth: authReducer,
  async: asyncReducer,
  toastr: toastrReducer,
});

export default rootReducer;
