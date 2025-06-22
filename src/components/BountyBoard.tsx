
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Clock, DollarSign, Users, ExternalLink, Zap, Leaf, Wind } from "lucide-react";

export const BountyBoard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const bounties = [
    {
      id: 1,
      title: "Chakra Network Security Audit",
      description: "Perform a comprehensive security audit of our village's chakra network protocols. Identify vulnerabilities and provide detailed recommendations.",
      reward: "3,200 Ryō",
      submissions: 5,
      timeLeft: "8 days",
      category: "Security",
      difficulty: "S-Rank",
      aiValidation: true,
      tags: ["Chakra", "Security", "Network"]
    },
    {
      id: 2,
      title: "Ninja Tools Marketplace Interface",
      description: "Build a responsive interface for a ninja tools marketplace with wallet integration, search, and filtering capabilities.",
      reward: "2,100 Ryō",
      submissions: 12,
      timeLeft: "6 days",
      category: "Frontend",
      difficulty: "A-Rank",
      aiValidation: true,
      tags: ["React", "Web3", "Marketplace"]
    },
    {
      id: 3,
      title: "Village Protocol Documentation",
      description: "Rewrite and improve existing village protocol documentation with better examples, clear explanations, and interactive demos.",
      reward: "800 Ryō",
      submissions: 18,
      timeLeft: "4 days",
      category: "Documentation",
      difficulty: "C-Rank",
      aiValidation: false,
      tags: ["Documentation", "Protocol", "Writing"]
    },
    {
      id: 4,
      title: "Jutsu Recognition AI Model",
      description: "Optimize existing jutsu recognition model for better performance and accuracy. Reduce inference time while maintaining quality.",
      reward: "2,800 Ryō",
      submissions: 7,
      timeLeft: "10 days",
      category: "AI/ML",
      difficulty: "S-Rank",
      aiValidation: true,
      tags: ["AI", "Machine Learning", "Jutsu"]
    },
    {
      id: 5,
      title: "Mobile Mission Tracker Design",
      description: "Design a modern, intuitive UI/UX for a mobile mission tracker app. Include wireframes, mockups, and interactive prototypes.",
      reward: "1,500 Ryō",
      submissions: 9,
      timeLeft: "5 days",
      category: "Design",
      difficulty: "B-Rank",
      aiValidation: false,
      tags: ["UI/UX", "Mobile", "Design"]
    },
    {
      id: 6,
      title: "Village Transaction Analysis",
      description: "Create analysis scripts to examine village transaction patterns and generate insights for the council.",
      reward: "1,200 Ryō",
      submissions: 14,
      timeLeft: "7 days",
      category: "Backend",
      difficulty: "A-Rank",
      aiValidation: true,
      tags: ["Analytics", "Blockchain", "Data"]
    }
  ];

  const categories = ["all", "Security", "Frontend", "Backend", "Design", "Documentation", "AI/ML"];
  const difficulties = ["all", "C-Rank", "B-Rank", "A-Rank", "S-Rank"];

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
          <div className="flex items-center justify-center mb-4">
            <Wind className="w-6 h-6 text-green-400 mr-3 animate-pulse" />
            <h2 className="text-4xl font-bold text-white">Mission Board</h2>
            <Leaf className="w-6 h-6 text-orange-400 ml-3 animate-bounce" />
          </div>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            Discover ninja missions, submit solutions, and earn rewards with AI-powered validation
          </p>
        </div>

        {/* Filters */}
        <div className="bg-green-800/20 backdrop-blur-sm border border-green-600/30 rounded-2xl p-6 mb-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 text-green-400/20 text-xl">🍃</div>
          <div className="absolute bottom-4 left-4 text-orange-400/20 text-lg">🍂</div>
          
          <div className="flex flex-col lg:flex-row gap-4 items-center relative z-10">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-300 w-5 h-5" />
              <Input
                placeholder="Search missions, skills, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-green-900/20 border-green-600/30 text-white placeholder-green-300 focus:border-orange-500/50 backdrop-blur-sm"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48 bg-green-900/20 border-green-600/30 text-white backdrop-blur-sm">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-green-900 border-green-600/30 backdrop-blur-xl">
                {categories.map(category => (
                  <SelectItem key={category} value={category} className="text-white hover:bg-green-800/50 focus:bg-green-800/50">
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Difficulty Filter */}
            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger className="w-full lg:w-48 bg-green-900/20 border-green-600/30 text-white backdrop-blur-sm">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent className="bg-green-900 border-green-600/30 backdrop-blur-xl">
                {difficulties.map(difficulty => (
                  <SelectItem key={difficulty} value={difficulty} className="text-white hover:bg-green-800/50 focus:bg-green-800/50">
                    {difficulty === "all" ? "All Ranks" : difficulty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Filter Button */}
            <Button variant="outline" className="border-orange-500/50 text-orange-300 hover:bg-orange-500/10 backdrop-blur-sm">
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
              className="bg-green-800/20 backdrop-blur-sm border border-green-600/30 hover:border-orange-500/50 transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
              {/* Leaf decorations */}
              <div className="absolute top-3 right-3 text-green-400/20 text-lg">🍃</div>
              <div className="absolute bottom-3 left-3 text-orange-400/20 text-sm">🍂</div>
              
              <div className="p-6 relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-2 flex-wrap">
                    <Badge
                      variant="secondary"
                      className={`${
                        bounty.difficulty === "S-Rank"
                          ? "bg-red-500/20 text-red-300 border-red-500/30"
                          : bounty.difficulty === "A-Rank"
                          ? "bg-orange-500/20 text-orange-300 border-orange-500/30"
                          : bounty.difficulty === "B-Rank"
                          ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                          : "bg-green-500/20 text-green-300 border-green-500/30"
                      }`}
                    >
                      {bounty.difficulty}
                    </Badge>
                    <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">
                      {bounty.category}
                    </Badge>
                  </div>
                  {bounty.aiValidation && (
                    <div className="flex items-center bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full px-2 py-1 border border-orange-400/20">
                      <Zap className="w-3 h-3 text-orange-400 mr-1" />
                      <span className="text-orange-400 text-xs font-medium">AI Validated</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                  {bounty.title}
                </h3>
                
                <p className="text-green-200 text-sm mb-4 line-clamp-2">
                  {bounty.description}
                </p>

                {/* Tags */}
                <div className="flex gap-2 mb-4 flex-wrap">
                  {bounty.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-green-900/20 text-green-300 px-2 py-1 rounded-full border border-green-600/30"
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
                  <div className="flex items-center text-amber-400">
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
                  <Button className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white transition-all duration-200 shadow-lg">
                    Accept Mission
                  </Button>
                  <Button variant="outline" size="icon" className="border-green-600/30 text-green-300 hover:bg-green-800/30">
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
            className="border-green-500/50 text-green-300 hover:bg-green-500/10 px-8 py-3 rounded-xl backdrop-blur-sm"
          >
            Load More Missions
          </Button>
        </div>
      </div>
    </section>
  );
};
