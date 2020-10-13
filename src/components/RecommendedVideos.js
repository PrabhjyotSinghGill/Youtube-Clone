import React from "react";
import "../views/RecommendedVideos.css";
import VideoCard from "../components/VideoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__Videos">
        <VideoCard
          title="Become a Web Developer | 2019/2020"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://amturing.acm.org/images/lg_aw/1013846.jpg"
          channel="Donald Knuth"
          image="https://d2r55xnwy6nx47.cloudfront.net/uploads/2020/04/Donald-Knuth_2880_Lede.jpg"
        ></VideoCard>
        <VideoCard
          title="Roald-Velden | Minded Music Sessions 101"
          views="501M Views"
          timestamp="1 week ago"
          channelImage="https://geo-media.beatport.com/image/c94a4f32-45e5-4805-90ed-4688e1019112.jpg"
          channel="Minded Music"
          image="https://i.ytimg.com/vi/DF8rMvUAWIQ/maxresdefault.jpg"
        ></VideoCard>
        <VideoCard
          title="I phone 12 | LIDAR Sensor"
          views="100M Views"
          timestamp="1 Hour Ago"
          channelImage="https://img2.chinadaily.com.cn/images/202002/28/5e58caeba31012820656ce32.jpeg"
          channel="Apple News"
          image="https://specials-images.forbesimg.com/imageserve/5f711ee0dbc9f02046cfbefb/960x0.jpg?fit=scale"
        ></VideoCard>
        <VideoCard
          title="Jan Martin and Mate Rial |Beautiful"
          views="14k Views"
          timestamp="50 Minutes Ago"
          channelImage="https://geo-media.beatport.com/image/c94a4f32-45e5-4805-90ed-4688e1019112.jpg"
          channel="Minded Music"
          image="https://farm5.staticflickr.com/4245/34378168630_2ef45b6833_k.jpg"
        ></VideoCard>
        <VideoCard
          title="Roald Velden - Reflections (Original Mix)"
          views="3.1K views"
          timestamp="6 months ago"
          channelImage="https://geo-media.beatport.com/image/c94a4f32-45e5-4805-90ed-4688e1019112.jpg"
          channel="Minded Music"
          image="https://advertiseonbing.blob.core.windows.net/blob/bingads/media/library/lake-reflection.jpg?ext=.jpg"
        ></VideoCard>
        <VideoCard
          views="2.5M views"
          timestamp="1 day ago"
          channelImage="https://covalentcareers3.s3.amazonaws.com/media/wp-legacy/uploads/2015/01/essilor-logo.jpg"
          channel="Essilor"
          title="Crizal Prevencia | Blue Violet Light Filtering Lenses | Essilor"
          image="https://www.essilorusa.com/content/dam/essilor-redesign/crizal-sub-pages/Crizal-Prevencia_medium-image@2X.jpg"
        ></VideoCard>
        <VideoCard
          views="5M views"
          timestamp="6 day ago"
          channelImage="https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Lamborghini_Logo.svg/180px-Lamborghini_Logo.svg.png"
          channel="Lamborghini"
          title="Lamborghini Aventador"
          image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/c112-lamborghini-sian-rds-final-150-1594215319.jpg"
        ></VideoCard>
        <VideoCard
          views="1.8M views"
          timestamp="1 week ago"
          channelImage="https://tonimarino.co.uk/wp-content/uploads/2018/03/Mont-Blanc-Logo-1.png"
          channel="MONT BLANC"
          title="MONT BLANC M"
          image="https://cdn.iphoneincanada.ca/wp-content/uploads/2015/08/montblanc-m-fountain-pen.jpg"
        ></VideoCard>
      </div>
    </div>
  );
}

export default RecommendedVideos;
