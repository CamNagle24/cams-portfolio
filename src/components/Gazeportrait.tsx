import { useRef, useEffect } from 'react';

interface GazePortraitProps {
  videoSrc?: string;
  width?: number;
  height?: number;
  xSteps?: number;
  ySteps?: number;
  fps?: number;
  className?: string;
}

export default function GazePortrait({
  videoSrc = '/cam-output.mp4',
  width = 300,
  height = 300,
  xSteps = 25,
  ySteps = 25,
  fps = 60,
  className = '',
}: GazePortraitProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastFrameTimeRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    
    if (!video || !container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastFrameTimeRef.current < 1000 / fps) {
        return;
      }
      lastFrameTimeRef.current = now;

      // Get the outer container (parent element) bounds
      const parent = container.parentElement;
      if (!parent) return;
      
      const rect = parent.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      // Normalize based on the parent container size
      const normalizedX = Math.max(-1, Math.min(1, deltaX / (rect.width / 2)));
      const normalizedY = Math.max(-1, Math.min(1, deltaY / (rect.height / 2)));

      const xIndex = Math.round(((normalizedX + 1) / 2) * (xSteps - 1));
      const yIndex = Math.round(((normalizedY + 1) / 2) * (ySteps - 1));

      const frameIndex = yIndex * xSteps + xIndex;
      const frameTime = frameIndex / fps;

      if (video.readyState >= 2) {
        video.currentTime = frameTime;
      }
    };

    // Listen on parent element instead of document
    const parent = container.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        parent.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [xSteps, ySteps, fps]);

  return (
    <div
      ref={containerRef}
      className={`gaze-portrait-container ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '50%',
      }}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        preload="auto"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
}