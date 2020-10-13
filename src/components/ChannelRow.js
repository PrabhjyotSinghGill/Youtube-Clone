import React from "react";
import "../views/ChannelRow.css";
import { Avatar } from "@material-ui/core";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image}></Avatar>
      <div className="channelRow__text">
        <h4>
          {channel}{" "}
          {verified && (
            <CheckCircleOutlineOutlinedIcon></CheckCircleOutlineOutlinedIcon>
          )}
        </h4>
        <p>
          {subs} subscribers • {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
