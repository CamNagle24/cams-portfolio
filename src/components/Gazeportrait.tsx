import { useRef, useEffect, useState } from 'react';

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
  const [isHovering, setIsHovering] = useState(false);
  const [showGlasses, setShowGlasses] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    
    if (!video || !container) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Don't track when hovering directly over the portrait
      if (isHovering) return;
      
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
  }, [xSteps, ySteps, fps, isHovering]);

  // Set to center frame (facing forward) when hovering
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovering) {
      // Center frame is middle of the grid - looking straight ahead
      const centerXIndex = Math.floor(xSteps / 2);
      const centerYIndex = Math.floor(ySteps / 2);
      const centerFrameIndex = centerYIndex * xSteps + centerXIndex;
      const centerFrameTime = centerFrameIndex / fps;

      if (video.readyState >= 2) {
        video.currentTime = centerFrameTime;
      }
    }
  }, [isHovering, xSteps, ySteps, fps]);

  const handleMouseDown = () => {
    setShowGlasses(true);
  };

  const handleMouseUp = () => {
    setShowGlasses(false);
  };

  return (
    <div
      ref={containerRef}
      className={`gaze-portrait-container ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={(e) => {
        setIsHovering(false);
        setShowGlasses(false); // Remove glasses if mouse leaves while holding
      }}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '50%',
        cursor: isHovering ? 'pointer' : 'default',
        transition: 'transform 0.2s ease',
        transform: isHovering ? 'scale(1.05)' : 'scale(1)',
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
      
      {/* Glasses overlay - only while mouse is pressed down */}
      {showGlasses && (
        <div
          style={{
            position: 'absolute',
            top: '35%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: `${width * 0.5}px`,
            pointerEvents: 'none',
            animation: 'slideDown 0.3s ease-out',
          }}
        >
          😎
        </div>
      )}
      
      {/* Hover hint */}
      {isHovering && (
        <div
          style={{
            position: 'absolute',
            bottom: '-40px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0,0,0,0.8)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '12px',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
          }}
        >
          Hold to see me cool 😎
        </div>
      )}
      
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translate(-50%, -100%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }
      `}</style>
    </div>
  );
}