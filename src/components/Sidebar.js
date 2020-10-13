import React from "react";
import "../views/Sidebar.css";
import SidebarRow from "../components/SidebarRow";
import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import WhatshotSharpIcon from "@material-ui/icons/WhatshotSharp";
import SubscriptionsSharpIcon from "@material-ui/icons/SubscriptionsSharp";
import VideoLibrarySharpIcon from "@material-ui/icons/VideoLibrarySharp";
import HistorySharpIcon from "@material-ui/icons/HistorySharp";
import OndemandVideoSharpIcon from "@material-ui/icons/OndemandVideoSharp";
import WatchLaterSharpIcon from "@material-ui/icons/WatchLaterSharp";
import ThumbUpAltSharpIcon from "@material-ui/icons/ThumbUpAltSharp";
import ExpandMoreSharpIcon from "@material-ui/icons/ExpandMoreSharp";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected title="Home" Icon={HomeSharpIcon}></SidebarRow>
      <SidebarRow title="Trending" Icon={WhatshotSharpIcon}></SidebarRow>
      <SidebarRow
        title="Subscription"
        Icon={SubscriptionsSharpIcon}
      ></SidebarRow>
      <hr></hr>
      <SidebarRow title="Library" Icon={VideoLibrarySharpIcon}></SidebarRow>
      <SidebarRow title="History" Icon={HistorySharpIcon}></SidebarRow>
      <SidebarRow
        title="Your Videos"
        Icon={OndemandVideoSharpIcon}
      ></SidebarRow>
      <SidebarRow title="Watch Later" Icon={WatchLaterSharpIcon}></SidebarRow>
      <SidebarRow title="Liked Videos" Icon={ThumbUpAltSharpIcon}></SidebarRow>
      <SidebarRow title="Show More" Icon={ExpandMoreSharpIcon}></SidebarRow>
      <hr></hr>
    </div>
  );
}

export default Sidebar;
