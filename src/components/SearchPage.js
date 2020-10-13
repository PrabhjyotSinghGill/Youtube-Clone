import React from "react";
import "../views/SearchPage.css";
import ChannelRow from "../components/ChannelRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import VideoRow from "../components/VideoRow.js";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon></TuneOutlinedIcon>
        <h2>FILTER</h2>
      </div>
      <hr></hr>
      <ChannelRow
        image="https://geo-media.beatport.com/image/c94a4f32-45e5-4805-90ed-4688e1019112.jpg"
        channel="Minded Music"
        verified
        subs="659K"
        noOfVideos={382}
        description="Music Label and home of Roald Velden (Melodic House producer)"
      ></ChannelRow>
      <hr></hr>
      <VideoRow
        views="3.1K views"
        subs="659K"
        description="Minded Music Sessions Mixed by Roald Velden. OUT NOW!"
        timestamp="6 months ago"
        channel="Minded Music"
        title="Roald Velden - Reflections (Original Mix)"
        image="https://advertiseonbing.blob.core.windows.net/blob/bingads/media/library/lake-reflection.jpg?ext=.jpg"
      ></VideoRow>
      <VideoRow
        views="4.2K views"
        subs="659K"
        description="Minded Music Sessions Mixed by Roald Velden. OUT NOW!"
        timestamp="1 months ago"
        channel="Minded Music"
        title="Roald Velden - Around The World [sunsetmelodies]"
        image="https://www.inkayniperutours.com/blog/wp-content/uploads/2019/12/machu-Picchu.jpg"
      ></VideoRow>
      <VideoRow
        views="2.2K views"
        subs="659K"
        description="Minded Music Sessions Mixed by Roald Velden. OUT NOW!"
        timestamp="2 months ago"
        channel="Minded Music"
        title="Valentin - Port Of Call"
        image="https://gotourismguides.com/montreal/wp-content/uploads/bonsecours-market-old-port.jpg"
      ></VideoRow>
      
    </div>
  );
}

export default SearchPage;
