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
