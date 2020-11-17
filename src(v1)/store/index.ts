import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import Reducer from "./reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

export const store = createStoreWithMiddleware(
  Reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
