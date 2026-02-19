import React from "react";
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlaybackRateButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
} from "media-chrome/react";

export default function VideoPlayer({ url }) {
  return (
    <div className="w-full max-w-full rounded-xl overflow-hidden shadow-lg bg-background border border-border flex justify-center">
      <MediaController 
        className="w-full h-full"
        // This ensures the controller stays within the bounds of the video's ratio
        style={{ 
          aspectRatio: "16 / 9",
          backgroundColor: "black"
        }}
      >
        <video
          slot="media"
          src={url}
          preload="metadata"
          crossOrigin="anonymous"
          playsInline
          // 'object-contain' ensures the whole video is visible even if the ratios don't match
          className="w-full h-full object-contain"
        />

        {/* Centered Play Button */}
        <MediaPlayButton
          slot="centered-chrome"
          style={{
            width: "70px",
            height: "70px",
            "--media-control-background": "rgba(0,0,0,0.6)",
            "--media-control-hover-background": "rgba(0,0,0,0.8)",
            borderRadius: "50%",
            color: "white"
          }}
        />

        {/* Bottom Control Bar */}
        <MediaControlBar className="flex gap-2 items-center justify-around bg-linear-to-t from-black/80 to-transparent p-2">
          
          <MediaSeekBackwardButton seekOffset={10} className="bg-transparent" />
          <MediaPlayButton className="bg-transparent"/>
          <MediaSeekForwardButton seekOffset={10} className="bg-transparent"/>

          <MediaTimeDisplay showDuration className="text-foreground text-xs bg-transparent"/>
          <MediaTimeRange className="bg-transparent"/>

          <MediaMuteButton className="bg-transparent"/>
          <MediaVolumeRange className="bg-transparent"/>

          <MediaPlaybackRateButton className="bg-transparent"/>
          <MediaFullscreenButton className="bg-transparent"/>
        </MediaControlBar>
      </MediaController>
    </div>
  );
}