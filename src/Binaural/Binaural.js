import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import Player from "./componants/Player";
import Minimized from "./componants/Minimized";

function Binaural() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <IconButton>
        <div
          onClick={() => {
            setOpen(true);
          }}
        >
          <Minimized />
        </div>
        {open ? <Player toggle={toggleMenu} /> : null}
      </IconButton>
    </div>
  );
}

export default Binaural;
