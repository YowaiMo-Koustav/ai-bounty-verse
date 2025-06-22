
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Globe, Leaf, Wind } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative py-20 px-6">
      <div className="container mx-auto text-center">
        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Leaf className="w-8 h-8 text-green-400 mr-3 animate-bounce" />
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Konoha Mission
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                {" "}Board
              </span>
            </h1>
            <Wind className="w-8 h-8 text-orange-400 ml-3 animate-pulse" />
          </div>
          
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Post ninja missions, submit solutions, and get AI-validated results with transparent crypto payments. 
            Serving the Hidden Leaf Village with cutting-edge Web3 and AI technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Browse Missions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline" 
              className="border-green-500/50 text-green-300 hover:bg-green-500/10 px-8 py-3 rounded-xl transition-all duration-200 backdrop-blur-sm"
            >
              Post a Mission
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="flex items-center bg-green-800/20 backdrop-blur-sm border border-green-600/30 rounded-full px-4 py-2">
              <Zap className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-green-200 text-sm">AI Validation</span>
            </div>
            <div className="flex items-center bg-green-800/20 backdrop-blur-sm border border-green-600/30 rounded-full px-4 py-2">
              <Shield className="w-4 h-4 text-orange-400 mr-2" />
              <span className="text-green-200 text-sm">Secure Payments</span>
            </div>
            <div className="flex items-center bg-green-800/20 backdrop-blur-sm border border-green-600/30 rounded-full px-4 py-2">
              <Globe className="w-4 h-4 text-amber-400 mr-2" />
              <span className="text-green-200 text-sm">IPFS Storage</span>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="max-w-6xl mx-auto">
          <p className="text-green-300 text-sm mb-6">Powered by ninja-grade technologies</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 opacity-70">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-white text-xs font-bold">x402</span>
              </div>
              <span className="text-green-300 text-xs">x402pay</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-white text-xs font-bold">CDP</span>
              </div>
              <span className="text-green-300 text-xs">CDP Wallet</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-white text-xs font-bold">AWS</span>
              </div>
              <span className="text-green-300 text-xs">Amazon Bedrock</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-white text-xs font-bold">AK</span>
              </div>
              <span className="text-green-300 text-xs">Akash Network</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-white text-xs font-bold">IPFS</span>
              </div>
              <span className="text-green-300 text-xs">Pinata IPFS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
