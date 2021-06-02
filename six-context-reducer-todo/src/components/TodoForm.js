import React, { useState, useContext } from "react";
import {
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
} from "reactstrap";
import TodoContext from "../context/TodoContext";
import { ADD_TODO } from "../context/action.types";
import { v4 } from "uuid";

const TodoForm = () => {
  const [todoString, setTodoString] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (todoString === "") {
      return alert("Input Field is Empty");
    }

    const todo = {
      todoString,
      id: v4(),
    };

    dispatch({
      type: ADD_TODO,
      payload: todo,
    });

    setTodoString("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            id="todo"
            name="todo"
            placeholder="Your next Todo"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />
          <InputGroupAddon>
            <Button
              color="warning"
              //todo: onClick
            >
              Add
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
