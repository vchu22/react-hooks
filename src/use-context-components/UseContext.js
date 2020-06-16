import React from "react";
import ComponentC from "./ComponentC";
import "./Components.css";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function UseContext() {
  return (
    <div className="component">
      {/* multiple context */}
      <UserContext.Provider value={"Blah"}>
        <ChannelContext.Provider value={"Codevolution"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default UseContext;
