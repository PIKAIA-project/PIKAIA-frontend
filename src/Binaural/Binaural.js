import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import Player from "./componants/Player";
import Minimized from "./componants/Minimized";
import MusicPlayer from "./componants/MusicPlayer";

function Binaural() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div
        onClick={() => {
          setOpen(true);
        }}
      >
        <MusicPlayer />
      </div>
    </div>
  );
}

export default Binaural;
