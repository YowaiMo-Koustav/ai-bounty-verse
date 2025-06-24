
import { useState } from "react";
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Settings, 
  Award, 
  TrendingUp, 
  Shield, 
  Wallet,
  Edit3,
  Star,
  Calendar,
  MapPin,
  Link as LinkIcon
} from "lucide-react";

const Profile = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const achievements = [
    { title: "Mission Master", description: "Completed 50+ missions", icon: Award, color: "text-yellow-400" },
    { title: "Security Expert", description: "Specialized in blockchain security", icon: Shield, color: "text-blue-400" },
    { title: "Top Performer", description: "Maintained 95%+ success rate", icon: Star, color: "text-purple-400" },
    { title: "Early Adopter", description: "Joined in the first month", icon: TrendingUp, color: "text-green-400" },
  ];

  const missionHistory = [
    { id: 1, title: "DeFi Protocol Security Audit", completion: "2024-01-15", reward: "$4,200", rating: 5 },
    { id: 2, title: "Smart Contract Optimization", completion: "2024-01-10", reward: "$3,500", rating: 5 },
    { id: 3, title: "Blockchain Integration Analysis", completion: "2024-01-05", reward: "$2,800", rating: 4 },
    { id: 4, title: "Web3 API Development", completion: "2023-12-28", reward: "$3,100", rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="relative">
        {/* Enhanced geometric pattern background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23059669%22%20fill-opacity=%220.04%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
        
        {/* JJK/Naruto/Boruto themed energy effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Infinite void (JJK Gojo's domain) */}
          <div className="infinite-void absolute top-20 right-20 w-32 h-32 border-2 border-blue-500/20 rounded-full animate-spin-slow"></div>
          <div className="infinite-void absolute bottom-32 left-16 w-24 h-24 border border-purple-500/20 rounded-full animate-spin-slow delay-2000"></div>
          
          {/* Rasengan energy (Naruto) */}
          <div className="rasengan-energy animate-[float_25s_ease-in-out_infinite] absolute top-1/3 left-1/4 text-blue-500/15 text-5xl">螺</div>
          <div className="rasengan-energy animate-[float_20s_ease-in-out_infinite_4s] absolute bottom-1/4 right-1/3 text-orange-500/15 text-4xl">旋</div>
          
          {/* Jougan vision (Boruto) */}
          <div className="jougan-vision animate-[float_15s_ease-in-out_infinite_1s] absolute top-1/2 right-1/6 text-cyan-400/20 text-3xl">眼</div>
          <div className="jougan-vision animate-[float_22s_ease-in-out_infinite_3s] absolute bottom-40 left-1/3 text-purple-400/20 text-2xl">浄</div>
        </div>
        
        <Header 
          isWalletConnected={isWalletConnected} 
          setIsWalletConnected={setIsWalletConnected} 
        />
        
        <main className="relative z-10 container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Profile Header */}
            <Card className="glass-effect border-emerald-500/20 shadow-2xl mb-8">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                      A
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h1 className="text-3xl font-bold text-white mb-2">Agent Commander Alpha</h1>
                        <p className="text-gray-400 mb-4">Blockchain Security Specialist & AI Mission Orchestrator</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>San Francisco, CA</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>Joined December 2023</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <LinkIcon className="w-4 h-4" />
                            <span>agentverse.dev</span>
                          </div>
                        </div>
                      </div>
                      <Button 
                        onClick={() => setIsEditing(!isEditing)}
                        variant="outline" 
                        className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10"
                      >
                        <Edit3 className="w-4 h-4 mr-2" />
                        {isEditing ? "Save" : "Edit Profile"}
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 rounded-lg bg-gray-800/30">
                        <div className="text-2xl font-bold text-emerald-400">127</div>
                        <div className="text-sm text-gray-500">Missions Completed</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-gray-800/30">
                        <div className="text-2xl font-bold text-blue-400">4.9</div>
                        <div className="text-sm text-gray-500">Average Rating</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-gray-800/30">
                        <div className="text-2xl font-bold text-green-400">$67K</div>
                        <div className="text-sm text-gray-500">Total Earned</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-gray-800/30">
                        <div className="text-2xl font-bold text-purple-400">98%</div>
                        <div className="text-sm text-gray-500">Success Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="bg-gray-800/50 border border-gray-700/50">
                <TabsTrigger value="overview" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="achievements" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
                  Achievements
                </TabsTrigger>
                <TabsTrigger value="history" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
                  Mission History
                </TabsTrigger>
                <TabsTrigger value="settings" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
                  Settings
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card className="glass-effect border-emerald-500/20 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <User className="w-5 h-5 text-emerald-400" />
                      Professional Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {isEditing ? (
                      <Textarea 
                        defaultValue="Experienced blockchain security specialist with expertise in smart contract auditing, DeFi protocol analysis, and AI-powered automated testing. Passionate about building secure, scalable Web3 infrastructure and leading autonomous agent teams to deliver exceptional results."
                        className="bg-gray-800/50 border-gray-700/50 text-white min-h-32"
                      />
                    ) : (
                      <p className="text-gray-300 leading-relaxed">
                        Experienced blockchain security specialist with expertise in smart contract auditing, DeFi protocol analysis, and AI-powered automated testing. Passionate about building secure, scalable Web3 infrastructure and leading autonomous agent teams to deliver exceptional results.
                      </p>
                    )}
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="glass-effect border-emerald-500/20 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-white text-lg">Specializations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {["Blockchain Security", "Smart Contracts", "DeFi Protocols", "AI Automation", "Web3 Integration", "Cryptography"].map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-emerald-900/30 text-emerald-300 border-emerald-500/30">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-effect border-emerald-500/20 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-white text-lg flex items-center gap-2">
                        <Wallet className="w-5 h-5 text-emerald-400" />
                        Wallet Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Balance:</span>
                        <span className="text-white font-medium">$12,450 USD</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Pending:</span>
                        <span className="text-orange-400 font-medium">$3,200 USD</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Address:</span>
                        <span className="text-emerald-400 font-mono text-sm">0x742d...8f2a</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <Card key={index} className="glass-effect border-emerald-500/20 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-lg bg-gray-800/50 ${achievement.color}`}>
                            <achievement.icon className="w-8 h-8" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white">{achievement.title}</h3>
                            <p className="text-sm text-gray-400">{achievement.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="history" className="space-y-4">
                <Card className="glass-effect border-emerald-500/20 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-white">Recent Mission History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {missionHistory.map((mission) => (
                        <div key={mission.id} className="p-4 rounded-lg bg-gray-800/30 border border-gray-700/50">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-white">{mission.title}</h3>
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-400 font-medium">{mission.reward}</span>
                              <div className="flex items-center gap-1">
                                {[...Array(mission.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-400">Completed: {mission.completion}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <Card className="glass-effect border-emerald-500/20 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Settings className="w-5 h-5 text-emerald-400" />
                      Account Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Display Name</label>
                        <Input 
                          defaultValue="Agent Commander Alpha"
                          className="bg-gray-800/50 border-gray-700/50 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Email</label>
                        <Input 
                          defaultValue="alpha@agentverse.dev"
                          className="bg-gray-800/50 border-gray-700/50 text-white"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Bio</label>
                      <Textarea 
                        defaultValue="Blockchain security specialist & AI mission orchestrator"
                        className="bg-gray-800/50 border-gray-700/50 text-white"
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                        Save Changes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
