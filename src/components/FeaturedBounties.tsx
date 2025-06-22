
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Clock, DollarSign, Users, Star, Leaf, Zap } from "lucide-react";

export const FeaturedBounties = () => {
  const featuredBounties = [
    {
      id: 1,
      title: "Build a Chakra Network Security Tool",
      description: "Create an AI-powered tool that can automatically audit chakra flow contracts for common vulnerabilities and security issues.",
      reward: "2,500 Ryō",
      submissions: 12,
      timeLeft: "5 days",
      category: "Security",
      difficulty: "S-Rank",
      aiValidation: true,
      featured: true
    },
    {
      id: 2,
      title: "Design a Ninja Tools Dashboard",
      description: "Create a modern, responsive dashboard for tracking ninja tool inventory with real-time data visualization.",
      reward: "1,800 Ryō",
      submissions: 8,
      timeLeft: "3 days",
      category: "Frontend",
      difficulty: "A-Rank",
      aiValidation: true,
      featured: true
    },
    {
      id: 3,
      title: "Write Village Protocol Documentation",
      description: "Comprehensive documentation for new village protocols including jutsu references, mission guidelines, and examples.",
      reward: "750 Ryō",
      submissions: 15,
      timeLeft: "7 days",
      category: "Documentation",
      difficulty: "C-Rank",
      aiValidation: true,
      featured: false
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="w-6 h-6 text-green-400 mr-3" />
            <h2 className="text-4xl font-bold text-white">Featured Missions</h2>
            <Leaf className="w-6 h-6 text-orange-400 ml-3 transform scale-x-[-1]" />
          </div>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            High-value opportunities with AI validation and transparent payments from the Hidden Leaf Village
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBounties.map((bounty) => (
            <Card
              key={bounty.id}
              className="bg-green-800/20 backdrop-blur-sm border border-green-600/30 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105 group relative overflow-hidden"
            >
              {/* Leaf pattern overlay */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 text-green-400 text-xl">🍃</div>
                <div className="absolute bottom-4 left-4 text-orange-400 text-lg">🍂</div>
              </div>
              
              <div className="p-6 relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-2">
                    <Badge
                      variant="secondary"
                      className={`${
                        bounty.difficulty === "S-Rank"
                          ? "bg-red-500/20 text-red-300 border-red-500/30"
                          : bounty.difficulty === "A-Rank"
                          ? "bg-orange-500/20 text-orange-300 border-orange-500/30"
                          : "bg-green-500/20 text-green-300 border-green-500/30"
                      }`}
                    >
                      {bounty.difficulty}
                    </Badge>
                    {bounty.featured && (
                      <Badge className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border-orange-500/30">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                  {bounty.aiValidation && (
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center border border-orange-400/20">
                      <Zap className="w-4 h-4 text-orange-400" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                  {bounty.title}
                </h3>
                
                <p className="text-green-200 text-sm mb-6 line-clamp-3">
                  {bounty.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6 text-sm">
                  <div className="flex items-center text-green-400 font-semibold">
                    <DollarSign className="w-4 h-4 mr-1" />
                    {bounty.reward}
                  </div>
                  <div className="flex items-center text-amber-400">
                    <Users className="w-4 h-4 mr-1" />
                    {bounty.submissions} submissions
                  </div>
                  <div className="flex items-center text-orange-400">
                    <Clock className="w-4 h-4 mr-1" />
                    {bounty.timeLeft}
                  </div>
                </div>

                {/* Action */}
                <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white transition-all duration-200 shadow-lg">
                  Accept Mission
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-green-500/50 text-green-300 hover:bg-green-500/10 px-8 py-3 rounded-xl backdrop-blur-sm"
          >
            View All Missions
          </Button>
        </div>
      </div>
    </section>
  );
};
