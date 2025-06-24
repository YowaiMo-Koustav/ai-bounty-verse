
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Clock, DollarSign, Users, Star, Zap, Bot } from "lucide-react";

export const FeaturedBounties = () => {
  const featuredBounties = [
    {
      id: 1,
      title: "AI-Powered Smart Contract Auditing System",
      description: "Develop an autonomous agent that leverages Amazon Bedrock to analyze and audit smart contracts for security vulnerabilities and optimization opportunities.",
      reward: "$8,500",
      submissions: 23,
      timeLeft: "6 days",
      category: "AI/Security",
      difficulty: "Expert",
      aiValidation: true,
      featured: true
    },
    {
      id: 2,
      title: "Decentralized Agent Marketplace Interface",
      description: "Build a sophisticated dashboard for AI agent deployment and management with real-time analytics, revenue tracking, and automated payout systems.",
      reward: "$6,200",
      submissions: 18,
      timeLeft: "4 days",
      category: "Frontend/Web3",
      difficulty: "Advanced",
      aiValidation: true,
      featured: true
    },
    {
      id: 3,
      title: "Comprehensive Agent Framework Documentation",
      description: "Create detailed technical documentation for autonomous agent development including API references, integration guides, and best practices.",
      reward: "$2,800",
      submissions: 31,
      timeLeft: "8 days",
      category: "Documentation",
      difficulty: "Intermediate",
      aiValidation: true,
      featured: false
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Bot className="w-8 h-8 text-emerald-400 mr-4" />
            <h2 className="text-5xl font-bold text-white tracking-tight">Featured Opportunities</h2>
            <Zap className="w-8 h-8 text-orange-400 ml-4" />
          </div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Premium bounties with AI validation, transparent payments, and enterprise-grade infrastructure support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBounties.map((bounty) => (
            <Card
              key={bounty.id}
              className="glass-effect border border-gray-700/30 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105 group relative overflow-hidden"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
              
              <div className="p-8 relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex gap-3">
                    <Badge
                      variant="secondary"
                      className={`${
                        bounty.difficulty === "Expert"
                          ? "bg-red-500/20 text-red-300 border-red-500/30"
                          : bounty.difficulty === "Advanced"
                          ? "bg-orange-500/20 text-orange-300 border-orange-500/30"
                          : "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                      } font-semibold`}
                    >
                      {bounty.difficulty}
                    </Badge>
                    {bounty.featured && (
                      <Badge className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border-orange-500/30 font-semibold">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                  {bounty.aiValidation && (
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center border border-emerald-400/20">
                      <Zap className="w-5 h-5 text-emerald-400" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors leading-tight">
                  {bounty.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-8 line-clamp-3 leading-relaxed">
                  {bounty.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-8 text-sm">
                  <div className="flex items-center text-emerald-400 font-bold text-lg">
                    <DollarSign className="w-5 h-5 mr-1" />
                    {bounty.reward}
                  </div>
                  <div className="flex items-center text-teal-400 font-medium">
                    <Users className="w-4 h-4 mr-1" />
                    {bounty.submissions} submissions
                  </div>
                  <div className="flex items-center text-orange-400 font-medium">
                    <Clock className="w-4 h-4 mr-1" />
                    {bounty.timeLeft}
                  </div>
                </div>

                {/* Action */}
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white transition-all duration-200 shadow-lg font-semibold py-3">
                  Accept Challenge
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/10 px-10 py-4 rounded-xl backdrop-blur-sm font-semibold text-lg"
          >
            View All Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
};
