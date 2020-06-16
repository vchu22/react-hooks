import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContext, ChannelContext } from "./UseContext";

function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div className="component">
      <h3>Component E</h3>
      <p>
        {user} - {channel}
      </p>
      <ComponentF />
    </div>
  );
}

export default ComponentE;
