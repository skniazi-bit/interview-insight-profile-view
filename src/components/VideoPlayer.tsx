
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer = ({ videoUrl }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">Candidate Interview</h2>
      
      <div className="relative bg-black rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          className="w-full aspect-video rounded-lg"
          src={videoUrl}
          poster="/placeholder.svg"
          onEnded={() => setIsPlaying(false)}
        />
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="outline"
              size="icon"
              className="bg-white/20 hover:bg-white/40 text-white border-none"
              onClick={togglePlay}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              className="bg-white/20 hover:bg-white/40 text-white border-none"
              onClick={toggleMute}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </Button>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
        <h3 className="font-medium text-blue-800 mb-1">Interview Session</h3>
        <p className="text-sm text-blue-700">
          Technical interview for Senior Software Engineer position. 
          Duration: 45 minutes. Conducted by: Sarah Williams, Tech Lead.
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;
