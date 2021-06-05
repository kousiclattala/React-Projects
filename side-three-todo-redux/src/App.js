import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "reactstrap";
// redux imports
import { Provider } from "react-redux";
import store from "./store";

import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Todo />
        <TodoForm />
      </Container>
    </Provider>
  );
}

export default App;
