import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = "https://apis.budlee.ai/api";

/**
 * Hook to fetch a signed URL for a landing page video.
 * Converts local path '/videos/xxx.mp4' to server path 'settings/landing_videos/xxx.mp4'.
 */
export const useSignedVideo = (path) => {
  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    const fetchSignedUrl = async () => {
      if (!path) return;
      
      try {
        const response = await axios.get(`${API_BASE_URL}/core/utils/sign-guide-url/?path=${path}`);
        setVideoSrc(response.data.url);
      } catch (err) {
        console.error("Failed to sign video URL:", err);
      }
    };

    fetchSignedUrl();
  }, [path]);

  return videoSrc;
};
