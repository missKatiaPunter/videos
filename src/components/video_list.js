import React from 'react';
import { ListGroup } from 'react-bootstrap';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map(vid => {
    return <VideoListItem key={vid.etag} vid={vid} />
  });
  return (
    <ListGroup className="col-md-4">
      {videoItems}
    </ListGroup>
  );
}

export default VideoList;