
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Clock, DollarSign, Users, Star } from "lucide-react";

export const FeaturedBounties = () => {
  const featuredBounties = [
    {
      id: 1,
      title: "Build a Smart Contract Audit Tool",
      description: "Create an AI-powered tool that can automatically audit Solidity smart contracts for common vulnerabilities and security issues.",
      reward: "$2,500",
      submissions: 12,
      timeLeft: "5 days",
      category: "Security",
      difficulty: "Advanced",
      aiValidation: true,
      featured: true
    },
    {
      id: 2,
      title: "Design a DeFi Dashboard UI",
      description: "Create a modern, responsive dashboard for tracking DeFi portfolio performance with real-time data visualization.",
      reward: "$1,800",
      submissions: 8,
      timeLeft: "3 days",
      category: "Frontend",
      difficulty: "Intermediate",
      aiValidation: true,
      featured: true
    },
    {
      id: 3,
      title: "Write Technical Documentation",
      description: "Comprehensive documentation for a new blockchain protocol including API references, tutorials, and examples.",
      reward: "$750",
      submissions: 15,
      timeLeft: "7 days",
      category: "Documentation",
      difficulty: "Beginner",
      aiValidation: true,
      featured: false
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Bounties</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            High-value opportunities with AI validation and transparent payments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBounties.map((bounty) => (
            <Card
              key={bounty.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-2">
                    <Badge
                      variant="secondary"
                      className={`${
                        bounty.difficulty === "Advanced"
                          ? "bg-red-500/20 text-red-300 border-red-500/30"
                          : bounty.difficulty === "Intermediate"
                          ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                          : "bg-green-500/20 text-green-300 border-green-500/30"
                      }`}
                    >
                      {bounty.difficulty}
                    </Badge>
                    {bounty.featured && (
                      <Badge className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 border-purple-500/30">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                  {bounty.aiValidation && (
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center">
                      <span className="text-purple-400 text-xs font-bold">AI</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {bounty.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {bounty.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6 text-sm">
                  <div className="flex items-center text-green-400">
                    <DollarSign className="w-4 h-4 mr-1" />
                    {bounty.reward}
                  </div>
                  <div className="flex items-center text-blue-400">
                    <Users className="w-4 h-4 mr-1" />
                    {bounty.submissions} submissions
                  </div>
                  <div className="flex items-center text-orange-400">
                    <Clock className="w-4 h-4 mr-1" />
                    {bounty.timeLeft}
                  </div>
                </div>

                {/* Action */}
                <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white transition-all duration-200">
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-3 rounded-xl"
          >
            View All Bounties
          </Button>
        </div>
      </div>
    </section>
  );
};
