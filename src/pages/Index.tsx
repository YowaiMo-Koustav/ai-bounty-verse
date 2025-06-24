
import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BountyBoard } from "@/components/BountyBoard";
import { StatsSection } from "@/components/StatsSection";
import { FeaturedBounties } from "@/components/FeaturedBounties";

const Index = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Enhanced grid background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f625,transparent)]"></div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large gradient orbs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Floating elements with anime-inspired shapes */}
        <div className="absolute top-32 left-1/4 animate-float-slow">
          <div className="w-4 h-4 bg-gradient-to-br from-emerald-400/30 to-emerald-600/30 rounded-full shadow-lg"></div>
        </div>
        <div className="absolute top-48 right-1/3 animate-float-medium">
          <div className="w-3 h-3 bg-gradient-to-br from-orange-400/30 to-red-500/30 transform rotate-45 shadow-lg"></div>
        </div>
        <div className="absolute top-96 left-1/2 animate-float-fast">
          <div className="w-5 h-5 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-full shadow-lg"></div>
        </div>
        <div className="absolute bottom-60 right-1/4 animate-float-slow">
          <div className="w-4 h-4 bg-gradient-to-br from-pink-400/30 to-pink-600/30 transform rotate-12 shadow-lg"></div>
        </div>
        <div className="absolute bottom-80 left-1/3 animate-float-medium">
          <div className="w-3 h-3 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-full shadow-lg"></div>
        </div>
      </div>
      
      <div className="relative z-10">
        <Header 
          isWalletConnected={isWalletConnected} 
          setIsWalletConnected={setIsWalletConnected} 
        />
        
        <main>
          <HeroSection />
          <StatsSection />
          <FeaturedBounties />
          <BountyBoard />
        </main>
      </div>
    </div>
  );
};

export default Index;
