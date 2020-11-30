import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import Reducer from "store/reducers";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

const persistConfig = {
  key: "root",
  storage,
};

const enhancedReducer = persistReducer(persistConfig, Reducer);

export const store = createStoreWithMiddleware<any, any>(
  enhancedReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);
