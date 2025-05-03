
import { Card, CardContent } from "@/components/ui/card";
import VideoPlayer from "./VideoPlayer";
import CandidateProfile from "./CandidateProfile";
import BehaviorAnalysis from "./BehaviorAnalysis";

const InterviewInsight = () => {
  // Mock candidate data
  const candidateData = {
    name: "Alex Johnson",
    age: 28,
    gender: "Male",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    interviewDate: "2025-05-01",
    position: "Senior Software Engineer",
    experience: "5 years",
    education: "M.S. Computer Science",
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
  };

  // Mock behavior analysis data
  const analysisData = {
    confidenceScore: 85,
    communicationScore: 92,
    technicalScore: 88,
    problemSolvingScore: 90,
    teamworkScore: 87,
    overallRating: 88,
    keyInsights: [
      "Strong communication skills with clear articulation",
      "Demonstrates deep technical knowledge",
      "Positive body language throughout the interview",
      "Shows enthusiasm about the role and company culture"
    ]
  };

  return (
    <div className="container mx-auto py-6 px-4 max-w-7xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Interview Insight</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Video Player - Takes up 2/3 of the space on large screens */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-4">
              <VideoPlayer videoUrl={candidateData.videoUrl} />
            </CardContent>
          </Card>
        </div>
        
        {/* Candidate Profile - Takes up 1/3 of the space on large screens */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-4">
              <CandidateProfile candidate={candidateData} />
            </CardContent>
          </Card>
        </div>
        
        {/* Behavior Analysis - Full width */}
        <div className="lg:col-span-3">
          <Card>
            <CardContent className="p-4">
              <BehaviorAnalysis analysis={analysisData} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InterviewInsight;
