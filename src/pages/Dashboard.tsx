
import { useState } from "react";
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Activity, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Target,
  Zap,
  Award
} from "lucide-react";

const Dashboard = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const stats = [
    { title: "Active Missions", value: "12", icon: Activity, change: "+2 this week", color: "text-emerald-400" },
    { title: "Total Earnings", value: "$24,500", icon: DollarSign, change: "+15% this month", color: "text-green-400" },
    { title: "Completion Rate", value: "94%", icon: CheckCircle, change: "+3% improvement", color: "text-blue-400" },
    { title: "Agent Network", value: "156", icon: Users, change: "12 new this week", color: "text-purple-400" },
  ];

  const recentMissions = [
    { id: 1, title: "Blockchain Integration Analysis", status: "In Progress", reward: "$3,500", progress: 65, agent: "AI-Alpha-7" },
    { id: 2, title: "Smart Contract Optimization", status: "Completed", reward: "$2,800", progress: 100, agent: "CodeMaster-X" },
    { id: 3, title: "DeFi Protocol Assessment", status: "Under Review", reward: "$4,200", progress: 85, agent: "SecurityBot-9" },
    { id: 4, title: "Web3 API Development", status: "In Progress", reward: "$3,100", progress: 42, agent: "DevAgent-3" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-900/30 text-green-300 border-green-500/30";
      case "In Progress": return "bg-blue-900/30 text-blue-300 border-blue-500/30";
      case "Under Review": return "bg-orange-900/30 text-orange-300 border-orange-500/30";
      default: return "bg-gray-900/30 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="relative">
        {/* Enhanced geometric pattern background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23059669%22%20fill-opacity=%220.04%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
        
        {/* JJK/Naruto/Boruto themed energy effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Domain expansion effects (JJK) */}
          <div className="domain-expansion absolute top-1/4 left-1/4 w-72 h-72 border border-purple-500/20 rounded-full animate-pulse"></div>
          <div className="domain-expansion absolute bottom-1/4 right-1/3 w-64 h-64 border border-blue-500/20 rounded-full animate-pulse delay-1000"></div>
          
          {/* Nine-tails chakra (Naruto) */}
          <div className="chakra-flow animate-[float_20s_ease-in-out_infinite] absolute top-32 right-1/5 text-orange-500/15 text-4xl">狐</div>
          <div className="chakra-flow animate-[float_16s_ease-in-out_infinite_3s] absolute bottom-48 left-1/6 text-red-500/15 text-3xl">影</div>
          
          {/* Karma seal effects (Boruto) */}
          <div className="karma-seal animate-[float_14s_ease-in-out_infinite_2s] absolute top-1/2 left-1/8 text-cyan-500/20 text-2xl">◇</div>
          <div className="karma-seal animate-[float_18s_ease-in-out_infinite_4s] absolute bottom-1/3 right-1/5 text-purple-500/20 text-xl">◆</div>
        </div>
        
        <Header 
          isWalletConnected={isWalletConnected} 
          setIsWalletConnected={setIsWalletConnected} 
        />
        
        <main className="relative z-10 container mx-auto px-6 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4 text-glow">Mission Control Dashboard</h1>
            <p className="text-xl text-gray-300">Monitor and manage your autonomous AI operations</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="glass-effect border-emerald-500/20 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-400">{stat.title}</p>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                    </div>
                    <div className={`p-3 rounded-lg bg-gray-800/50 ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="missions" className="space-y-6">
            <TabsList className="bg-gray-800/50 border border-gray-700/50">
              <TabsTrigger value="missions" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
                Active Missions
              </TabsTrigger>
              <TabsTrigger value="agents" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
                AI Agents
              </TabsTrigger>
              <TabsTrigger value="analytics" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
                Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="missions" className="space-y-4">
              <Card className="glass-effect border-emerald-500/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-400" />
                    Recent Mission Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentMissions.map((mission) => (
                      <div key={mission.id} className="p-4 rounded-lg bg-gray-800/30 border border-gray-700/50">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-white">{mission.title}</h3>
                          <Badge className={getStatusColor(mission.status)}>{mission.status}</Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                          <span>Agent: {mission.agent}</span>
                          <span className="text-emerald-400 font-medium">{mission.reward}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${mission.progress}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{mission.progress}% Complete</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="agents" className="space-y-4">
              <Card className="glass-effect border-emerald-500/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Zap className="w-5 h-5 text-emerald-400" />
                    AI Agent Network
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { name: "AI-Alpha-7", type: "Security Specialist", status: "Active", missions: 23, rating: 4.9 },
                      { name: "CodeMaster-X", type: "Development Expert", status: "Active", missions: 31, rating: 4.8 },
                      { name: "SecurityBot-9", type: "Audit Specialist", status: "Busy", missions: 18, rating: 4.7 },
                      { name: "DevAgent-3", type: "Full-Stack Developer", status: "Active", missions: 27, rating: 4.6 },
                      { name: "DataMiner-5", type: "Analytics Expert", status: "Standby", missions: 15, rating: 4.8 },
                      { name: "CryptoGuard-2", type: "Blockchain Security", status: "Active", missions: 22, rating: 4.9 },
                    ].map((agent, index) => (
                      <div key={index} className="p-4 rounded-lg bg-gray-800/30 border border-gray-700/50">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-white">{agent.name}</h4>
                          <Badge className={agent.status === "Active" ? "bg-green-900/30 text-green-300" : 
                                          agent.status === "Busy" ? "bg-orange-900/30 text-orange-300" : 
                                          "bg-gray-900/30 text-gray-300"}>
                            {agent.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">{agent.type}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{agent.missions} missions</span>
                          <div className="flex items-center gap-1">
                            <Award className="w-3 h-3 text-yellow-400" />
                            <span>{agent.rating}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <Card className="glass-effect border-emerald-500/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                    Performance Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <TrendingUp className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Analytics Dashboard</h3>
                    <p className="text-gray-400 mb-6">Detailed performance metrics and insights coming soon</p>
                    <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                      View Full Analytics
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
