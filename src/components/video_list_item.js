import React from 'react';
import { ListGroupItem, Media } from 'react-bootstrap';

const VideoListItem = ({ vid }) => {
  const thumbUrl = vid.snippet.thumbnails.default.url;
  console.log(thumbUrl);

  return (
    <ListGroupItem>
      <Media>
        <img className="align-self-start mr-3" src={thumbUrl} />
        <Media.Body>
          <Media.Heading>{vid.snippet.title}</Media.Heading>
        </Media.Body>
      </Media>
    </ListGroupItem>
  );
}

export default VideoListItem;