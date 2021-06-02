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
