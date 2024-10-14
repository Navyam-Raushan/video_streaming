// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const VideoLink = ({ lessonId }) => {
//   const navigate = useNavigate();

//   const handleWatchVideo = () => {
//     navigate(`/watch/${lessonId}`);
//   };

//   return (
//     <button onClick={handleWatchVideo}>Watch Video</button>
//   );
// };

// export default VideoLink;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const VideoLink = ({ lessonId }) => {
  const navigate = useNavigate();

  const handleWatchVideo = () => {
    navigate(`/watch/${lessonId}`);
  };

  return (
    <button onClick={handleWatchVideo}>Watch Video</button>
  );
};

export default VideoLink;

