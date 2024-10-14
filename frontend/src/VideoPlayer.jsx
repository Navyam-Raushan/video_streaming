import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export const VideoPlayer = (props) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { options, onReady } = props;

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        onReady && onReady(player);
      }));

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div
      data-vjs-player
      style={{ width: "600px" }}
    >
      <div ref={videoRef} />
    </div>
  );
};

export default VideoPlayer;


// new code

// import React, { useRef, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import videojs from 'video.js'; // Assuming you are using video.js for the video player

// const VideoPlayer = () => {
//   // const { lessonId } = useParams(); // Get lessonId from URL params
//   const lessonId  = "0f97e39c-2689-46f6-bd4c-98887f96e59a"; // Get lessonId from URL params
//   const playerRef = useRef(null);

//   // You can map lessonId to the corresponding video source
//   // const videoSourceMap = {
//   //   '2e3a3b15-1337-4c66-807b-a44f9b44550c': 'http://localhost:8000/uploads/courses/2e3a3b15-1337-4c66-807b-a44f9b44550c/index.m3u8',
//   //   // Add other lessonId mappings if necessary
//   // };

//   const videoPlayerOptions = {
//     controls: true,
//     responsive: true,
//     fluid: true,
//     sources: [
//       {
//         src: videoSourceMap[lessonId], // Use lessonId to fetch the correct video
//         type: 'application/x-mpegURL'
//       }
//     ]
//   };

//   useEffect(() => {
//     if (playerRef.current) return; // Prevent duplicate initialization
//     const videoElement = document.querySelector('.video-js');

//     // Initialize video.js player
//     const player = videojs(videoElement, videoPlayerOptions, () => {
//       console.log('Player is ready');
//     });

//     // Save player instance
//     playerRef.current = player;

//     return () => {
//       if (playerRef.current) {
//         playerRef.current.dispose(); // Clean up the player on component unmount
//         playerRef.current = null;
//       }
//     };
//   }, [lessonId]); // Re-run if lessonId changes

//   return (
//     <div>
//       <h2>Playing lesson: {lessonId}</h2>
//       <video className="video-js vjs-default-skin" controls preload="auto" />
//     </div>
//   );
// };

// export default VideoPlayer;
