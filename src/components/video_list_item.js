import React from 'react';

const VideoListItem = ({ vid }) => {
  const thumbUrl = vid.snippet.thumbnails.default.url;
  console.log(thumbUrl);

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={thumbUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading primary">{vid.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;