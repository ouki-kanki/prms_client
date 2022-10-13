import { configureStore } from "@reduxjs/toolkit";
import  createSagaMiddleware from 'redux-saga'
import counterReducer from './features/counter/counterSlice';
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();


export default configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware)
  }
})


sagaMiddleware.run(rootSaga)