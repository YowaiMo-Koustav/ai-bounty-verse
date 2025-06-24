
import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BountyBoard } from "@/components/BountyBoard";
import { StatsSection } from "@/components/StatsSection";
import { FeaturedBounties } from "@/components/FeaturedBounties";

const Index = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">
      <div className="relative">
        {/* Subtle geometric pattern background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23059669%22%20fill-opacity=%220.03%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        {/* Animated subtle elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="animate-[float_8s_ease-in-out_infinite] absolute top-20 left-1/4 text-emerald-500/10 text-lg">◊</div>
          <div className="animate-[float_10s_ease-in-out_infinite_2s] absolute top-32 right-1/3 text-orange-500/10 text-sm">✧</div>
          <div className="animate-[float_6s_ease-in-out_infinite_1s] absolute top-60 left-1/2 text-emerald-600/10 text-md">◆</div>
          <div className="animate-[float_12s_ease-in-out_infinite_3s] absolute bottom-40 right-1/4 text-amber-500/10 text-lg">✦</div>
          <div className="animate-[float_7s_ease-in-out_infinite_4s] absolute bottom-60 left-1/3 text-emerald-500/10 text-sm">◊</div>
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
