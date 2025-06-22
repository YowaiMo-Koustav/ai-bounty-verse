
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Globe } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative py-20 px-6">
      <div className="container mx-auto text-center">
        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI-Powered
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Bounty Platform
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Post bounties, submit solutions, and get AI-validated results with transparent crypto payments. 
            Built on cutting-edge Web3 and AI technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3 rounded-xl transition-all duration-200 transform hover:scale-105"
            >
              Browse Bounties
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline" 
              className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-3 rounded-xl transition-all duration-200"
            >
              Post a Bounty
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <Zap className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-gray-300 text-sm">AI Validation</span>
            </div>
            <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <Shield className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-gray-300 text-sm">Secure Payments</span>
            </div>
            <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <Globe className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-gray-300 text-sm">IPFS Storage</span>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-400 text-sm mb-6">Powered by cutting-edge technologies</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 opacity-60">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg mx-auto mb-2"></div>
              <span className="text-gray-400 text-xs">x402pay</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mx-auto mb-2"></div>
              <span className="text-gray-400 text-xs">CDP Wallet</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg mx-auto mb-2"></div>
              <span className="text-gray-400 text-xs">Amazon Bedrock</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg mx-auto mb-2"></div>
              <span className="text-gray-400 text-xs">Akash Network</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mx-auto mb-2"></div>
              <span className="text-gray-400 text-xs">Pinata IPFS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
