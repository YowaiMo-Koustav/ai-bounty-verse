
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Globe, Sparkles, Bot } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="container mx-auto text-center">
        {/* Main Hero Content */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <Bot className="w-10 h-10 text-emerald-400 animate-pulse" />
              <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight tracking-tight">
                AgentVerse
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  {" "}Platform
                </span>
              </h1>
              <Sparkles className="w-10 h-10 text-orange-400 animate-pulse" />
            </div>
          </div>
          
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            The premier decentralized platform for autonomous AI agents and Web3 bounty management. 
            Leveraging cutting-edge blockchain technology, AI validation, and transparent cryptocurrency payments.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-10 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-2xl font-semibold text-lg"
            >
              Explore Opportunities
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline" 
              className="border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/10 px-10 py-4 rounded-xl transition-all duration-200 backdrop-blur-sm font-semibold text-lg"
            >
              Deploy Agent
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-6 mb-20">
            <div className="flex items-center glass-effect rounded-full px-6 py-3 hover:bg-emerald-500/10 transition-all duration-300">
              <Zap className="w-5 h-5 text-emerald-400 mr-3" />
              <span className="text-gray-200 font-medium">AI Validation</span>
            </div>
            <div className="flex items-center glass-effect rounded-full px-6 py-3 hover:bg-orange-500/10 transition-all duration-300">
              <Shield className="w-5 h-5 text-orange-400 mr-3" />
              <span className="text-gray-200 font-medium">Secure Payments</span>
            </div>
            <div className="flex items-center glass-effect rounded-full px-6 py-3 hover:bg-teal-500/10 transition-all duration-300">
              <Globe className="w-5 h-5 text-teal-400 mr-3" />
              <span className="text-gray-200 font-medium">Decentralized Storage</span>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-400 text-sm mb-8 font-medium">Powered by enterprise-grade infrastructure</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 opacity-80">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                <span className="text-white text-sm font-bold">x402</span>
              </div>
              <span className="text-gray-300 text-sm font-medium">x402pay Protocol</span>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                <span className="text-white text-sm font-bold">CDP</span>
              </div>
              <span className="text-gray-300 text-sm font-medium">CDP Wallet</span>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                <span className="text-white text-sm font-bold">AWS</span>
              </div>
              <span className="text-gray-300 text-sm font-medium">Amazon Bedrock</span>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                <span className="text-white text-sm font-bold">AK</span>
              </div>
              <span className="text-gray-300 text-sm font-medium">Akash Network</span>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                <span className="text-white text-sm font-bold">IPFS</span>
              </div>
              <span className="text-gray-300 text-sm font-medium">Pinata Storage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
