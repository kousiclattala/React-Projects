# Project Recreation

## About Project

In this project, i deleted all the files in the `/src` folder, so that i can create them on my own and can learn about the architecture of `React App`.

## Learnings

- How to create components in _React App_
- How to send data from one component to other.

## Notes

- when we use `()` in the method then we don't have to use `return` keyword.
- To render dynamic data in your components then you have define your component like below.
- In the below code, where title is set by the user by sending a value, and don't forget to use `{}` braces, which tells compiler to load data dynamically.

```js - react file(Button.js)
import React from "react";

const Button = ({ title = "JavaScript" }) => (
  <div>
    <button className="button">{title}</button>
  </div>
);

export default Button;
```

- When you are re-using the component somewhere in your application _(in our case `Button Component`)_ like below. You can pass values to it, If you didn't pass any value then the defualt value _(if any)_ will be set

```js - react file(App.js)
import React from "react";
import "./style.css";
import Button from "./Button";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome Alien</h1>
      <Button title="React JS" /> //we are using the component by assiging prop value
      <Button title="Angular" />
      <Button /> // here default value will be set, because we are not sending any
      value to the component
    </div>
  );
};

export default App;
```
