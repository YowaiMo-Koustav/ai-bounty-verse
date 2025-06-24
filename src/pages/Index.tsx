
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
      <div className="relative">
        {/* Enhanced geometric pattern background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23059669%22%20fill-opacity=%220.04%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
        
        {/* Anime-inspired energy effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Energy orbs flowing across screen */}
          <div className="energy-orb top-20"></div>
          <div className="energy-orb top-40"></div>
          <div className="energy-orb top-60"></div>
          <div className="energy-orb top-80"></div>
          
          {/* Chakra-like spinning elements */}
          <div className="chakra-element animate-[float_12s_ease-in-out_infinite] absolute top-32 left-1/4 text-emerald-500/20 text-2xl">◉</div>
          <div className="chakra-element animate-[float_15s_ease-in-out_infinite_2s] absolute top-48 right-1/3 text-orange-500/20 text-xl">⬟</div>
          <div className="chakra-element animate-[float_10s_ease-in-out_infinite_1s] absolute top-96 left-1/2 text-purple-500/20 text-2xl">◈</div>
          <div className="chakra-element animate-[float_18s_ease-in-out_infinite_3s] absolute bottom-60 right-1/4 text-pink-500/20 text-xl">◊</div>
          <div className="chakra-element animate-[float_14s_ease-in-out_infinite_4s] absolute bottom-80 left-1/3 text-blue-500/20 text-lg">◉</div>
          
          {/* Additional floating elements with different animations */}
          <div className="animate-[float_8s_ease-in-out_infinite] absolute top-20 left-1/6 text-emerald-400/15 text-lg">✧</div>
          <div className="animate-[float_11s_ease-in-out_infinite_1.5s] absolute top-72 right-1/5 text-orange-400/15 text-md">⟡</div>
          <div className="animate-[float_13s_ease-in-out_infinite_2.5s] absolute bottom-40 left-3/4 text-teal-400/15 text-xl">◆</div>
          
          {/* Large background glow effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <Header 
          isWalletConnected={isWalletConnected} 
          setIsWalletConnected={setIsWalletConnected} 
        />
        
        <main className="relative z-10">
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
