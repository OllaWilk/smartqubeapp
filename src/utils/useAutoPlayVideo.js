import { useRef, useEffect, useState } from "react";

const useAutoPlayVideo = (src) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleCanPlay = () => {
        setIsLoaded(true);
        videoElement.play();
      };

      videoElement.addEventListener("canplaythrough", handleCanPlay);

      return () => {
        videoElement.removeEventListener("canplaythrough", handleCanPlay);
      };
    }
  }, [src]);

  return { videoRef, isLoaded };
};

export default useAutoPlayVideo;
