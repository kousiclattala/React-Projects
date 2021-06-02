# Context API

This project is build to learn Context API in **React**.

## Key Concepts

- Context API is State Management system present in React.
- It is useful to store variable data and can be accessed from throught out the Application.

```js
import React, { useState } from "react";

const Child = (props) => {
  return <ChildOne name={props.name} />;
};

const ChildOne = (props) => {
  return <ChildTwo name={props.name} />;
};

const ChildTwo = (props) => {
  return <GrandChild name={props.name} />;
};

const GrandChild = (props) => {
  return <h2>ChildName: {props.name}</h2>;
};

const App = () => {
  const [name, setName] = useState("Ranga");
  return (
    <div className="App">
      <Child name={name} />
    </div>
  );
};

export default App;
```

- Consider the above code, here i am using the `name` variable to display it on the `GrandChild` component, which can be called by the `ChildTwo` component, further it can be called by `ChildOne` component, further it can be called by `Child` component.
- Here, for simplicity purpose, I defined all the methods in one file, but in general these all are defined in different components.
- In order to send the data to `GrandChild` component, I have to pass the data to `Child`, `ChildOne`, `ChildTwo` and that data is not useful for these components, which is a very un-necessary sharing of data. To overcome this problem, they introduced a concept called **`Context API`**.

## Context API

- In **Context API**, the state of the variables are stored in a centralized `Store`. By using `Providers` data can be shared between components, and by using `Consumers` that data can be accessed in the components.

- In provider, we set the states and initial data, and send data to the children.

```js
// In provider.js file

import React, { useState } from "react";
import Context from "./context";

const Provider = (props) => {
  // setting up the states
  const [mission, setMission] = useState({
    missionName: "James Bond",
    missionCode: "007",
    accepted: "Not Accepted",
  });
  return (
    <Context.Provider
      value={{
        data: mission, //providing data and we can also provide methods through providers
        isMissionAccepted: () => {
          setMission({ ...mission, accepted: "Accepted" });
        },
      }}
    >
      {props.children} // by mentioning this, it can act like a wrapper.
    </Context.Provider>
  );
};

export default Provider;
```

- By using consumer, we get the data. In the below code for simplicity purpose, I developed all methods in single file. But in general they can be in different components.

```js
// In App.js file

import React, { Fragment } from "react";
import Provider from "./provider";
import Context from "./context";

const Missions = () => {
  return <Mission />;
};

const Mission = () => {
  return (
    // by using the consumer, we are getting the data.
    // through the cosumer we get back context, data is present in this context
    // by injecting callback we display the data.
    <Context.Consumer>
      {(context) => (
        <Fragment>
          <h3>Mission Details</h3>
          <p>Mission Name: {context.data.missionName}</p>
          <p>Mission Code: {context.data.missionCode}</p>
          <p>Mission Accepted: {context.data.accepted}</p>
          <button onClick={context.isMissionAccepted}>
            Accept The Mission
          </button>
        </Fragment>
      )}
    </Context.Consumer>
  );
};

const App = () => {
  return (
    <div>
      // we are using provider as wrapper.
      <Provider>
        <Missions />
      </Provider>
    </div>
  );
};

export default App;
```
