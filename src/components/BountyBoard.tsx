
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Clock, DollarSign, Users, ExternalLink, Zap, TrendingUp, Award, Code, Shield } from "lucide-react";

export const BountyBoard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [activeTab, setActiveTab] = useState("active");

  const activeBounties = [
    {
      id: 1,
      title: "Distributed Ledger Infrastructure Audit",
      description: "Comprehensive security assessment of distributed ledger protocols. Identify vulnerabilities, analyze consensus mechanisms, and provide detailed security recommendations.",
      reward: "$3,200",
      submissions: 5,
      timeLeft: "8 days",
      category: "Security",
      difficulty: "Expert",
      aiValidation: true,
      tags: ["Blockchain", "Security", "Infrastructure"]
    },
    {
      id: 2,
      title: "Decentralized Exchange Interface Development",
      description: "Build responsive trading interface with advanced charting, wallet integration, liquidity pools, and real-time market data visualization.",
      reward: "$2,100",
      submissions: 12,
      timeLeft: "6 days",
      category: "Frontend",
      difficulty: "Advanced",
      aiValidation: true,
      tags: ["React", "DeFi", "Trading"]
    },
    {
      id: 3,
      title: "Protocol Documentation Enhancement",
      description: "Comprehensive documentation overhaul with interactive examples, API references, integration guides, and developer tutorials.",
      reward: "$800",
      submissions: 18,
      timeLeft: "4 days",
      category: "Documentation",
      difficulty: "Intermediate",
      aiValidation: false,
      tags: ["Documentation", "API", "Developer Tools"]
    },
    {
      id: 4,
      title: "Machine Learning Model Optimization",
      description: "Optimize existing ML models for better performance and accuracy. Reduce inference time while maintaining quality metrics.",
      reward: "$2,800",
      submissions: 7,
      timeLeft: "10 days",
      category: "AI/ML",
      difficulty: "Expert",
      aiValidation: true,
      tags: ["Machine Learning", "Optimization", "Performance"]
    },
    {
      id: 5,
      title: "Mobile Application UX Design",
      description: "Design modern, intuitive user experience for mobile application. Include wireframes, prototypes, and interaction design.",
      reward: "$1,500",
      submissions: 9,
      timeLeft: "5 days",
      category: "Design",
      difficulty: "Advanced",
      aiValidation: false,
      tags: ["UI/UX", "Mobile", "Design Systems"]
    },
    {
      id: 6,
      title: "Data Analytics Platform Development",
      description: "Create comprehensive analytics platform with real-time data processing, visualization, and business intelligence features.",
      reward: "$1,200",
      submissions: 14,
      timeLeft: "7 days",
      category: "Backend",
      difficulty: "Advanced",
      aiValidation: true,
      tags: ["Analytics", "Data Science", "Backend"]
    }
  ];

  const featuredBounties = [
    {
      id: 7,
      title: "Enterprise Blockchain Infrastructure",
      description: "Scalable blockchain infrastructure for enterprise applications with high throughput and security standards.",
      reward: "$5,000",
      submissions: 3,
      timeLeft: "15 days",
      category: "Infrastructure",
      difficulty: "Expert",
      aiValidation: true,
      tags: ["Enterprise", "Blockchain", "Scalability"]
    },
    {
      id: 8,
      title: "AI Agent Framework Development",
      description: "Build comprehensive framework for autonomous AI agents with CDP wallet integration and payment processing.",
      reward: "$4,500",
      submissions: 8,
      timeLeft: "12 days",
      category: "AI/ML",
      difficulty: "Expert",
      aiValidation: true,
      tags: ["AI Agents", "Framework", "Automation"]
    }
  ];

  const completedBounties = [
    {
      id: 9,
      title: "Smart Contract Security Analysis",
      description: "Completed security audit of DeFi smart contracts with comprehensive vulnerability assessment.",
      reward: "$2,400",
      submissions: 15,
      completedDate: "2 days ago",
      category: "Security",
      difficulty: "Expert",
      winner: "SecurityPro Labs"
    }
  ];

  const categories = ["all", "Security", "Frontend", "Backend", "Design", "Documentation", "AI/ML", "Infrastructure"];
  const difficulties = ["all", "Beginner", "Intermediate", "Advanced", "Expert"];

  const filterBounties = (bounties: any[]) => {
    return bounties.filter(bounty => {
      const matchesSearch = bounty.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           bounty.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           bounty.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "all" || bounty.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === "all" || bounty.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  };

  const BountyCard = ({ bounty, isCompleted = false }: { bounty: any, isCompleted?: boolean }) => (
    <Card className="group relative overflow-hidden bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-500 hover:transform hover:scale-[1.02]">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative p-6 z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex gap-2 flex-wrap">
            <Badge
              variant="secondary"
              className={`${
                bounty.difficulty === "Expert"
                  ? "bg-red-500/20 text-red-300 border-red-500/30"
                  : bounty.difficulty === "Advanced"
                  ? "bg-orange-500/20 text-orange-300 border-orange-500/30"
                  : bounty.difficulty === "Intermediate"
                  ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                  : "bg-green-500/20 text-green-300 border-green-500/30"
              } backdrop-blur-sm`}
            >
              {bounty.difficulty}
            </Badge>
            <Badge className="bg-slate-700/50 text-slate-300 border-slate-600/30 backdrop-blur-sm">
              {bounty.category}
            </Badge>
          </div>
          {!isCompleted && bounty.aiValidation && (
            <div className="flex items-center bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full px-3 py-1 border border-emerald-400/20 backdrop-blur-sm">
              <Zap className="w-3 h-3 text-emerald-400 mr-1" />
              <span className="text-emerald-400 text-xs font-medium">AI Validated</span>
            </div>
          )}
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors line-clamp-2">
          {bounty.title}
        </h3>
        
        <p className="text-slate-300 text-sm mb-4 line-clamp-3 leading-relaxed">
          {bounty.description}
        </p>

        {/* Tags */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {bounty.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="text-xs bg-slate-800/50 text-slate-300 px-2 py-1 rounded-full border border-slate-600/30 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-6 text-sm">
          <div className="flex items-center text-emerald-400 font-bold">
            <DollarSign className="w-4 h-4 mr-1" />
            {bounty.reward}
          </div>
          {!isCompleted ? (
            <>
              <div className="flex items-center text-slate-400">
                <Users className="w-4 h-4 mr-1" />
                {bounty.submissions} submissions
              </div>
              <div className="flex items-center text-amber-400">
                <Clock className="w-4 h-4 mr-1" />
                {bounty.timeLeft}
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center text-slate-400">
                <Award className="w-4 h-4 mr-1" />
                Winner: {bounty.winner}
              </div>
              <div className="flex items-center text-slate-400">
                <Clock className="w-4 h-4 mr-1" />
                {bounty.completedDate}
              </div>
            </>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white transition-all duration-200 shadow-lg hover:shadow-emerald-500/25">
            {isCompleted ? "View Details" : "Apply Now"}
          </Button>
          <Button variant="outline" size="icon" className="border-slate-600/30 text-slate-300 hover:bg-slate-800/50 backdrop-blur-sm">
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );

  return (
    <section className="py-16 px-6 relative" id="bounties">
      {/* Enhanced background with JJK/Naruto inspired elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white tracking-tight">Professional Task Board</h2>
          </div>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Discover high-value opportunities, submit solutions, and earn rewards through our AI-powered validation system
          </p>
        </div>

        {/* Enhanced Filters */}
        <div className="glass-effect rounded-2xl p-6 mb-8 border border-slate-700/30 backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                placeholder="Search projects, technologies, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-800/50 border-slate-600/30 text-white placeholder-slate-400 focus:border-emerald-500/50 backdrop-blur-sm h-12"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48 bg-slate-800/50 border-slate-600/30 text-white backdrop-blur-sm h-12">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-slate-600/30 backdrop-blur-xl">
                {categories.map(category => (
                  <SelectItem key={category} value={category} className="text-white hover:bg-slate-800/50 focus:bg-slate-800/50">
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Difficulty Filter */}
            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger className="w-full lg:w-48 bg-slate-800/50 border-slate-600/30 text-white backdrop-blur-sm h-12">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-slate-600/30 backdrop-blur-xl">
                {difficulties.map(difficulty => (
                  <SelectItem key={difficulty} value={difficulty} className="text-white hover:bg-slate-800/50 focus:bg-slate-800/50">
                    {difficulty === "all" ? "All Levels" : difficulty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Advanced Filter Button */}
            <Button variant="outline" className="border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/10 backdrop-blur-sm h-12 px-6">
              <Filter className="w-4 h-4 mr-2" />
              Advanced
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 rounded-xl p-1 mb-8">
            <TabsTrigger 
              value="active" 
              className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-slate-300 transition-all duration-200 rounded-lg font-medium"
            >
              Active Projects ({activeBounties.length})
            </TabsTrigger>
            <TabsTrigger 
              value="featured" 
              className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-slate-300 transition-all duration-200 rounded-lg font-medium"
            >
              Featured ({featuredBounties.length})
            </TabsTrigger>
            <TabsTrigger 
              value="completed" 
              className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-slate-300 transition-all duration-200 rounded-lg font-medium"
            >
              Completed ({completedBounties.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {filterBounties(activeBounties).map((bounty) => (
                <BountyCard key={bounty.id} bounty={bounty} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="featured">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {filterBounties(featuredBounties).map((bounty) => (
                <BountyCard key={bounty.id} bounty={bounty} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {filterBounties(completedBounties).map((bounty) => (
                <BountyCard key={bounty.id} bounty={bounty} isCompleted />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Load More */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/10 px-8 py-3 rounded-xl backdrop-blur-sm font-medium"
          >
            Load More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
