/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useRef, useState, useEffect } from "react";
import { getInitialProgress } from "../server-actions/getInitialProgress";
import { createInitialProgress } from "../server-actions/createInitialProgress";
import { updateProgressOnServer } from "../server-actions/updateProgressOnServer";
import YouTube from "react-youtube";

const VideoPlayer = ({ video }) => {
  const videoUrl = video[0].url;
  const duration = video[0].duration;
  const videoId = video[0].id;

  const [progressTime, setProgressTime] = useState(0);
  // const [playerReady, setPlayerReady] = useState(false);
  const hasMounted = useRef(false);
  const playerRef = useRef(null);

  const fetchVideoProgress = async () => {
    try {
      const { progressData } = await getInitialProgress(videoId);

      if (progressData.length !== 0) {
        setProgressTime(progressData[0].progress_time);
        // setPlayerReady(true);
      } else {
        await createInitialProgress(videoId, duration);
        return;
      }
    } catch (error) {
      console.error("Error fetching initial progress:", error);
    }
  };

  useEffect(() => {
    if (hasMounted.current) {
      // Fetch progress only if the player is ready
      fetchVideoProgress();
    } else {
      hasMounted.current = true;
    }
  }, [videoId, duration]); // Depend on videoId, duration, and playerReady

  const onPlayerReady = (event) => {
    // setPlayerReady(true);

    if (progressTime > 0) {
      event.target.seekTo(progressTime); // Seek to stored progress
    }
  };

  const onPlayerStateChange = (event) => {
    const currentTime = event.target.getCurrentTime();
    updateProgressOnServer(videoId, currentTime);
  };

  const getYoutubeIdFromUrl = (url) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=)?([\w\-]+)/i;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const youtubeVideoId = getYoutubeIdFromUrl(videoUrl);

  const opts = {
    height: "420px",
    width: "100%",
    playerVars: {
      // Enable progress tracking
      autoplay: 0,
      enablejsapi: 1,
      controls: 1,
      playsinline: 1,
    },
  };

  return (
    <div className="mx-auto w-full">
      <YouTube
        videoId={youtubeVideoId}
        opts={opts}
        onReady={onPlayerReady}
        onStateChange={onPlayerStateChange}
        ref={playerRef}
      />
    </div>
  );
};

export default VideoPlayer;
