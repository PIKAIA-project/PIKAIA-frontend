import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import axios from "axios";
import { getToken } from "../../utils";

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

  const [rating, setRating] = useState({});

  async function ratings(newValue) {
    let token = getToken();
    var key = "1a55d8e0ffa94fc7988a1fc24deb69b0";
    let axiosConfig = {
      headers: {
        "x-access-token": token,
        "Ocp-Apim-Subscription-Key": key, //the token is a variable which holds the token
      },
      data: {
        song_id: props.id,
        rating: newValue,
      },
    };
    console.log(newValue);
    console.log(props.id);
    await axios
      .put("https://pikaia-rest.azurewebsites.net/rating", axiosConfig)
      .then((res) => {
        console.log(res);
      });
  }
  return (
    <div>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Box>
          <Typography component="legend">
            How much did this help you?
          </Typography>
          <StyledRating
            name="customized-color"
            getLabelText={(value) =>
              `${value} Heart${value !== 1 ? "s" : ""} ${setValue(value)}`
            }
            onChange={(event, newValue) => {
              // Send ratings from here
              ratings(newValue);
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
