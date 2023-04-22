import React from "react";

const YouTubeVideoCard = ({ videoId }) => {
  return (
    <div className="align-self-center">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">YouTube Video</h5>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            title="YouTube Video"
            className="embed-responsive-item"
            src={`https://www.youtube.com/embed/VuG7ge_8I2Y/embed/ ${videoId}`}
            allowFullScreen
          />
        </div>
      </div>
    </div>
       <div className="card">
       <div className="card-body">
         <h5 className="card-title">YouTube Video</h5>
         <div className="embed-responsive embed-responsive-16by9">
           <iframe
             title="YouTube Video"
             className="embed-responsive-item"
             src={`https://www.youtube.com/embed/tNS3W_2o_DA/embed/ ${videoId}`}
             allowFullScreen
           />
         </div>
       </div>
     </div>
     <div className="card">
       <div className="card-body">
         <h5 className="card-title">YouTube Video</h5>
         <div className="embed-responsive embed-responsive-16by9">
           <iframe
             title="YouTube Video"
             className="embed-responsive-item"
             src={`https://www.youtube.com/embed/rPEu7PbNq0E/embed/ ${videoId}`}
             allowFullScreen
           />
         </div>
       </div>
     
     </div>
     </div>
  );
};

export default YouTubeVideoCard;
