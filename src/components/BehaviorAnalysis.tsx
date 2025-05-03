
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ChartBar, ChartLine } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

interface BehaviorAnalysisProps {
  analysis: {
    confidenceScore: number;
    communicationScore: number;
    technicalScore: number;
    problemSolvingScore: number;
    teamworkScore: number;
    overallRating: number;
    keyInsights: string[];
  };
}

const BehaviorAnalysis = ({ analysis }: BehaviorAnalysisProps) => {
  const chartData = [
    { name: "Confidence", score: analysis.confidenceScore },
    { name: "Communication", score: analysis.communicationScore },
    { name: "Technical", score: analysis.technicalScore },
    { name: "Problem Solving", score: analysis.problemSolvingScore },
    { name: "Teamwork", score: analysis.teamworkScore },
  ];

  // Mock time series data for sentiment analysis
  const sentimentData = [
    { time: "0:00", score: 65 },
    { time: "5:00", score: 70 },
    { time: "10:00", score: 85 },
    { time: "15:00", score: 75 },
    { time: "20:00", score: 90 },
    { time: "25:00", score: 80 },
    { time: "30:00", score: 85 },
    { time: "35:00", score: 95 },
    { time: "40:00", score: 90 },
    { time: "45:00", score: 88 },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 80) return "text-blue-600";
    if (score >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  const getProgressColor = (score: number) => {
    if (score >= 90) return "bg-green-500";
    if (score >= 80) return "bg-blue-500";
    if (score >= 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Behavior Analysis</h2>
        <div className="flex items-center mt-2 sm:mt-0">
          <span className="text-sm text-gray-500 mr-2">Overall Rating:</span>
          <span className={`text-lg font-bold ${getScoreColor(analysis.overallRating)}`}>
            {analysis.overallRating}%
          </span>
        </div>
      </div>

      <Tabs defaultValue="scores">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="scores" className="flex items-center gap-2">
            <ChartBar size={16} />
            Performance Scores
          </TabsTrigger>
          <TabsTrigger value="timeline" className="flex items-center gap-2">
            <ChartLine size={16} />
            Interview Timeline
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="scores" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {chartData.map((item) => (
                    <div key={item.name} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{item.name}</span>
                        <span className={`text-sm font-medium ${getScoreColor(item.score)}`}>
                          {item.score}%
                        </span>
                      </div>
                      <Progress 
                        value={item.score} 
                        className="h-2" 
                        indicatorClassName={getProgressColor(item.score)} 
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-sm font-medium mb-4 px-2">Score Distribution</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="score" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-sm font-medium mb-3">Key Insights</h3>
              <ul className="space-y-2">
                {analysis.keyInsights.map((insight, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm text-gray-700">{insight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="timeline">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-sm font-medium mb-4 px-2">Sentiment Analysis Over Time</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={sentimentData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="time" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#3b82f6" 
                    strokeWidth={2} 
                    dot={{ fill: "#3b82f6" }} 
                  />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-xs text-center text-gray-500 mt-2">
                Interview duration (minutes:seconds)
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BehaviorAnalysis;
