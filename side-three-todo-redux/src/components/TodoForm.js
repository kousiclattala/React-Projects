import React, { useState } from "react";

import {
  Form,
  FormGroup,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
} from "reactstrap";

import { addTodo } from "../actions/todo-action";
import { connect } from "react-redux";

import { v4 } from "uuid";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "") {
      return alert("Input shouldn't be empty");
    }

    const todo = {
      title,
      id: v4(),
    };

    addTodo(todo);

    setTitle("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter your todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <InputGroupAddon addonType="prepend">
            <Button color="primary">Add Todo</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => {
    dispatch(addTodo(todo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
