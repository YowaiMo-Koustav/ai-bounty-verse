
import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, X, DollarSign, Clock, Target } from "lucide-react";

const CreateBounty = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="relative">
        {/* Enhanced geometric pattern background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23059669%22%20fill-opacity=%220.04%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
        
        {/* JJK/Naruto/Boruto themed energy effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Cursed energy orbs (JJK) */}
          <div className="cursed-energy-orb top-20 left-10"></div>
          <div className="cursed-energy-orb top-40 right-20"></div>
          <div className="cursed-energy-orb bottom-32 left-1/3"></div>
          
          {/* Chakra elements (Naruto) */}
          <div className="chakra-symbol animate-[float_15s_ease-in-out_infinite] absolute top-24 right-1/4 text-orange-500/20 text-3xl">卍</div>
          <div className="chakra-symbol animate-[float_12s_ease-in-out_infinite_2s] absolute bottom-40 left-1/5 text-blue-500/20 text-2xl">火</div>
          
          {/* Scientific ninja tools (Boruto) */}
          <div className="tech-glow animate-[float_18s_ease-in-out_infinite_3s] absolute top-1/3 left-1/6 text-purple-500/20 text-xl">⬢</div>
          <div className="tech-glow animate-[float_14s_ease-in-out_infinite_1s] absolute bottom-1/3 right-1/4 text-cyan-500/20 text-lg">◈</div>
          
          {/* Background glow effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <Header 
          isWalletConnected={isWalletConnected} 
          setIsWalletConnected={setIsWalletConnected} 
        />
        
        <main className="relative z-10 container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-glow">
                Create New Mission
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Deploy autonomous AI agents to complete your objectives with precision and efficiency
              </p>
            </div>

            <Card className="glass-effect border-emerald-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Target className="w-6 h-6 text-emerald-400" />
                  Mission Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Mission Title</label>
                    <Input 
                      placeholder="e.g. Smart Contract Security Assessment"
                      className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Category</label>
                    <Select>
                      <SelectTrigger className="bg-gray-800/50 border-gray-700/50 text-white">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="development">Development</SelectItem>
                        <SelectItem value="security">Security</SelectItem>
                        <SelectItem value="research">Research</SelectItem>
                        <SelectItem value="analysis">Analysis</SelectItem>
                        <SelectItem value="integration">Integration</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Mission Description</label>
                  <Textarea 
                    placeholder="Provide detailed requirements and specifications for the AI agents..."
                    className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 min-h-32"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Reward (USD)
                    </label>
                    <Input 
                      type="number"
                      placeholder="5000"
                      className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Duration (Days)
                    </label>
                    <Input 
                      type="number"
                      placeholder="14"
                      className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Priority Level</label>
                    <Select>
                      <SelectTrigger className="bg-gray-800/50 border-gray-700/50 text-white">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="critical">Critical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-medium text-gray-300">Tags</label>
                  <div className="flex gap-2 mb-3">
                    <Input 
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Add a tag..."
                      className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400"
                      onKeyPress={(e) => e.key === 'Enter' && addTag()}
                    />
                    <Button onClick={addTag} size="icon" className="bg-emerald-600 hover:bg-emerald-700">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-emerald-900/30 text-emerald-300 border-emerald-500/30">
                        {tag}
                        <button onClick={() => removeTag(tag)} className="ml-2 hover:text-red-400">
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end space-x-4 pt-6">
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                    Save Draft
                  </Button>
                  <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8">
                    Deploy Mission
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateBounty;
