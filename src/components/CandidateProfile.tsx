
import { Card, CardContent } from "@/components/ui/card";
import { User, Calendar } from "lucide-react";

interface CandidateProps {
  candidate: {
    name: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    interviewDate: string;
    position: string;
    experience: string;
    education: string;
  };
}

const CandidateProfile = ({ candidate }: CandidateProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-blue-100 p-3 rounded-full">
          <User className="text-blue-600" size={24} />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{candidate.name}</h2>
          <p className="text-sm text-gray-500">{candidate.position}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
        <div className="col-span-2 flex items-center gap-2">
          <Calendar size={16} className="text-blue-500" />
          <span className="text-sm text-gray-600">
            Interview Date: {formatDate(candidate.interviewDate)}
          </span>
        </div>
        
        <div className="space-y-1">
          <p className="text-xs text-gray-500">Age</p>
          <p className="font-medium text-gray-700">{candidate.age} years</p>
        </div>
        
        <div className="space-y-1">
          <p className="text-xs text-gray-500">Gender</p>
          <p className="font-medium text-gray-700">{candidate.gender}</p>
        </div>
        
        <div className="col-span-2 space-y-1 border-t pt-2 mt-1">
          <p className="text-xs text-gray-500">Email</p>
          <p className="font-medium text-gray-700 break-all">{candidate.email}</p>
        </div>
        
        <div className="col-span-2 space-y-1">
          <p className="text-xs text-gray-500">Phone</p>
          <p className="font-medium text-gray-700">{candidate.phone}</p>
        </div>
        
        <div className="col-span-2 space-y-1 border-t pt-2 mt-1">
          <p className="text-xs text-gray-500">Experience</p>
          <p className="font-medium text-gray-700">{candidate.experience}</p>
        </div>
        
        <div className="col-span-2 space-y-1">
          <p className="text-xs text-gray-500">Education</p>
          <p className="font-medium text-gray-700">{candidate.education}</p>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t">
        <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
          View Full Resume
        </button>
      </div>
    </div>
  );
};

export default CandidateProfile;
