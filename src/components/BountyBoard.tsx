
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Clock, DollarSign, Users, ExternalLink, Zap } from "lucide-react";

export const BountyBoard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const bounties = [
    {
      id: 1,
      title: "Smart Contract Security Audit",
      description: "Perform a comprehensive security audit of our DeFi protocol smart contracts. Identify vulnerabilities and provide detailed recommendations.",
      reward: "$3,200",
      submissions: 5,
      timeLeft: "8 days",
      category: "Security",
      difficulty: "Advanced",
      aiValidation: true,
      tags: ["Solidity", "Security", "DeFi"]
    },
    {
      id: 2,
      title: "React Frontend for NFT Marketplace",
      description: "Build a responsive React frontend for an NFT marketplace with wallet integration, search, and filtering capabilities.",
      reward: "$2,100",
      submissions: 12,
      timeLeft: "6 days",
      category: "Frontend",
      difficulty: "Intermediate",
      aiValidation: true,
      tags: ["React", "Web3", "NFT"]
    },
    {
      id: 3,
      title: "API Documentation Overhaul",
      description: "Rewrite and improve existing API documentation with better examples, clear explanations, and interactive demos.",
      reward: "$800",
      submissions: 18,
      timeLeft: "4 days",
      category: "Documentation",
      difficulty: "Beginner",
      aiValidation: false,
      tags: ["Documentation", "API", "Technical Writing"]
    },
    {
      id: 4,
      title: "Machine Learning Model Optimization",
      description: "Optimize existing ML model for better performance and accuracy. Reduce inference time while maintaining quality.",
      reward: "$2,800",
      submissions: 7,
      timeLeft: "10 days",
      category: "AI/ML",
      difficulty: "Advanced",
      aiValidation: true,
      tags: ["Python", "TensorFlow", "Optimization"]
    },
    {
      id: 5,
      title: "Mobile App UI/UX Design",
      description: "Design a modern, intuitive UI/UX for a crypto wallet mobile app. Include wireframes, mockups, and interactive prototypes.",
      reward: "$1,500",
      submissions: 9,
      timeLeft: "5 days",
      category: "Design",
      difficulty: "Intermediate",
      aiValidation: false,
      tags: ["UI/UX", "Mobile", "Figma"]
    },
    {
      id: 6,
      title: "Blockchain Data Analysis Script",
      description: "Create Python scripts to analyze blockchain transaction patterns and generate insights for our research team.",
      reward: "$1,200",
      submissions: 14,
      timeLeft: "7 days",
      category: "Backend",
      difficulty: "Intermediate",
      aiValidation: true,
      tags: ["Python", "Blockchain", "Data Analysis"]
    }
  ];

  const categories = ["all", "Security", "Frontend", "Backend", "Design", "Documentation", "AI/ML"];
  const difficulties = ["all", "Beginner", "Intermediate", "Advanced"];

  const filteredBounties = bounties.filter(bounty => {
    const matchesSearch = bounty.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bounty.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bounty.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || bounty.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "all" || bounty.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <section className="py-16 px-6" id="bounties">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Bounty Board</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover opportunities, submit solutions, and earn rewards with AI-powered validation
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search bounties, skills, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-purple-500/50"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48 bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-white/10">
                {categories.map(category => (
                  <SelectItem key={category} value={category} className="text-white hover:bg-white/10">
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Difficulty Filter */}
            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger className="w-full lg:w-48 bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-white/10">
                {difficulties.map(difficulty => (
                  <SelectItem key={difficulty} value={difficulty} className="text-white hover:bg-white/10">
                    {difficulty === "all" ? "All Levels" : difficulty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Filter Button */}
            <Button variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Bounty Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {filteredBounties.map((bounty) => (
            <Card
              key={bounty.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-2 flex-wrap">
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
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      {bounty.category}
                    </Badge>
                  </div>
                  {bounty.aiValidation && (
                    <div className="flex items-center bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full px-2 py-1">
                      <Zap className="w-3 h-3 text-purple-400 mr-1" />
                      <span className="text-purple-400 text-xs font-medium">AI Validated</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {bounty.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {bounty.description}
                </p>

                {/* Tags */}
                <div className="flex gap-2 mb-4 flex-wrap">
                  {bounty.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded-full border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6 text-sm">
                  <div className="flex items-center text-green-400 font-semibold">
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

                {/* Actions */}
                <div className="flex gap-3">
                  <Button className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white transition-all duration-200">
                    Submit Solution
                  </Button>
                  <Button variant="outline" size="icon" className="border-white/10 text-gray-300 hover:bg-white/5">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-3 rounded-xl"
          >
            Load More Bounties
          </Button>
        </div>
      </div>
    </section>
  );
};
