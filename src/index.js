import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import todoReducer from "./reducers/Todo";

//스토어 생성
const store = createStore(todoReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
//왜인지는 들어도 이해못함 생성한 store를 app컴포에서 사용하려면 provider로 감싸주고 프롭스로 넘겨준다
