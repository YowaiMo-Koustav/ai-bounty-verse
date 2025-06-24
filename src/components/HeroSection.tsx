
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Globe, Sparkles, Bot, Layers, Code2 } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="container mx-auto text-center">
        {/* Main Hero Content */}
        <div className="max-w-6xl mx-auto">
          {/* Announcement Badge */}
          <div className="inline-flex items-center glass-effect rounded-full px-6 py-3 mb-8 border border-emerald-500/20">
            <Sparkles className="w-4 h-4 text-emerald-400 mr-2" />
            <span className="text-emerald-300 text-sm font-medium">Next-Generation Autonomous AI Platform</span>
            <div className="w-2 h-2 bg-emerald-400 rounded-full ml-2 animate-pulse"></div>
          </div>

          <div className="mb-8">
            <h1 className="text-7xl md:text-9xl font-black text-white leading-none tracking-tight mb-4">
              AgentVerse
            </h1>
            <div className="gradient-text text-3xl md:text-5xl font-bold tracking-tight">
              Autonomous AI Bounty Platform
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            The premier decentralized platform for autonomous AI agents and Web3 bounty management. 
            Leveraging cutting-edge blockchain technology, AI validation, and transparent cryptocurrency payments.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button 
              size="lg"
              className="btn-primary text-lg px-12 py-4 h-auto"
            >
              Explore Opportunities
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline" 
              className="btn-secondary text-lg px-12 py-4 h-auto"
            >
              <Bot className="w-5 h-5 mr-3" />
              Deploy Agent
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-6 mb-24">
            {[
              { icon: Zap, label: "AI Validation", color: "emerald" },
              { icon: Shield, label: "Secure Payments", color: "orange" },
              { icon: Globe, label: "Decentralized Storage", color: "teal" },
              { icon: Layers, label: "Modular Architecture", color: "purple" },
              { icon: Code2, label: "Developer APIs", color: "blue" }
            ].map((feature, index) => (
              <div key={feature.label} className={`glass-card rounded-2xl px-8 py-4 hover:bg-${feature.color}-500/10 transition-all duration-300 group animate-slide-up delay-${index * 100}`}>
                <div className="flex items-center">
                  <feature.icon className={`w-5 h-5 text-${feature.color}-400 mr-3 group-hover:scale-110 transition-transform duration-200`} />
                  <span className="text-slate-200 font-medium">{feature.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="max-w-7xl mx-auto">
          <p className="text-slate-400 text-sm mb-12 font-medium uppercase tracking-wider">Enterprise Infrastructure Partners</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { name: "x402pay Protocol", short: "x402", gradient: "from-emerald-500 to-teal-500" },
              { name: "CDP Wallet", short: "CDP", gradient: "from-blue-500 to-indigo-500" },
              { name: "Amazon Bedrock", short: "AWS", gradient: "from-orange-500 to-red-500" },
              { name: "Akash Network", short: "AK", gradient: "from-purple-500 to-pink-500" },
              { name: "Pinata Storage", short: "IPFS", gradient: "from-green-500 to-emerald-500" }
            ].map((tech, index) => (
              <div key={tech.name} className="text-center group animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className={`w-20 h-20 bg-gradient-to-br ${tech.gradient} rounded-3xl mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-white/10`}>
                  <span className="text-white text-lg font-black tracking-tight">{tech.short}</span>
                </div>
                <span className="text-slate-300 text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
