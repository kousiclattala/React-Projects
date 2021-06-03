import React from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";

import { FaCheckDouble } from "react-icons/fa";

const Todos = ({ todos, markComplete }) => {
  return (
    <ListGroup className="mt2 mb2 items">
      {todos.map((todo) => (
        <ListGroupItem key={todo.id}>
          {todo.title}
          <span className="float-right" onClick={() => markComplete(todo.id)}>
            <FaCheckDouble />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Todos;
