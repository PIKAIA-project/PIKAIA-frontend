import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";

const StyledRating = withStyles({
  iconFilled: {
    color: "#ff6d75",
  },
  iconHover: {
    color: "#ff3d47",
  },
})(Rating);

function Ratings(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [value, setValue] = useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Box>
          <Typography component="legend">Custom icon and color</Typography>
          <StyledRating
            name="customized-color"
            getLabelText={(value) =>
              `${value} Heart${value !== 1 ? "s" : ""} ${setValue(value)}`
            }
            onChange={(event, newValue) => {
              // Send ratings from here
              console.log(newValue);
              console.log(props);
            }}
            readOnly={false}
            precision={0.5}
            max={5}
            icon={<FavoriteIcon fontSize="inherit" />}
          />
        </Box>
      </Menu>{" "}
    </div>
  );
}

export default Ratings;
