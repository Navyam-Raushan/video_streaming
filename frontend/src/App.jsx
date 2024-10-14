// import { useRef } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import VideoPlayer from './VideoPlayer';
// import VideoLink from './VideoLink';
// import './App.css';

// function App() {
//   const playerRef = useRef(null);
//   const videoLink = "http://localhost:8000/uploads/courses/2e3a3b15-1337-4c66-807b-a44f9b44550c/index.m3u8";

//   const videoPlayerOptions = {
//     controls: true,
//     responsive: true,
//     fluid: true,
//     sources: [
//       {
//         src: videoLink,
//         type: "application/x-mpegURL"
//       }
//     ]
//   };

//   const handlePlayerReady = (player) => {
//     playerRef.current = player;

//     // You can handle player events here
//     player.on("waiting", () => {
//       console.log("player is waiting");
//     });

//     player.on("dispose", () => {
//       console.log("player will dispose");
//     });
//   };

//   return (
//     <>
//       {/* VideoPlayer for streaming on the home page */}
//       <div>
//         <h1>Video Player</h1>
//         <VideoPlayer
//           options={videoPlayerOptions}
//           onReady={handlePlayerReady}
//         />
//       </div>

//       {/* Router and routes */}
//       <Router>
//         <Routes>
//           {/* Dynamic VideoPlayer route */}
//           <Route path="/watch/:lessonId" element={<VideoPlayer />} />
          
//           {/* Home route with VideoLink */}
//           <Route path="/" element={
//             <div>
//               <h1>Home Page</h1>
//               <VideoLink lessonId="2e3a3b15-1337-4c66-807b-a44f9b44550c" />
//             </div>
//           } />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;


// import React from 'react';


// new code here

import { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import VideoLink from './VideoLink';
import './App.css';

function App() {
  const playerRef = useRef(null);
  const videoLink = "http://localhost:8000/uploads/courses/0f97e39c-2689-46f6-bd4c-98887f96e59a/index.m3u8";

  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL"
      }
    ]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here
    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };

  return (
    <Router>
      <Routes>
        {/* Route to render VideoPlayer dynamically with lessonId */}
        <Route path="/watch/:lessonId" element={<VideoPlayer />} />

        {/* Home page with VideoLink to navigate to the /watch/:lessonId */}
        <Route path="/" element={
          <div>
            <h1>Home Page</h1>
            <VideoLink lessonId="0f97e39c-2689-46f6-bd4c-98887f96e59a" />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;


