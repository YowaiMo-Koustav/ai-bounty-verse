
import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BountyBoard } from "@/components/BountyBoard";
import { StatsSection } from "@/components/StatsSection";
import { FeaturedBounties } from "@/components/FeaturedBounties";

const Index = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-green-900 to-orange-900 relative overflow-hidden">
      <div className="relative">
        {/* Flying leaves background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2280%22%20height=%2280%22%20viewBox=%220%200%2080%2080%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23228B22%22%20fill-opacity=%220.08%22%3E%3Cpath%20d=%22M20%2040c0-5%205-10%2010-10s10%205%2010%2010-5%2010-10%2010-10-5-10-10z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        {/* Animated leaves */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="animate-[float_6s_ease-in-out_infinite] absolute top-10 left-10 text-green-600/30 text-2xl">🍃</div>
          <div className="animate-[float_8s_ease-in-out_infinite_2s] absolute top-20 right-20 text-orange-600/30 text-xl">🍂</div>
          <div className="animate-[float_7s_ease-in-out_infinite_1s] absolute top-40 left-1/4 text-green-700/20 text-lg">🍃</div>
          <div className="animate-[float_9s_ease-in-out_infinite_3s] absolute top-60 right-1/3 text-amber-600/30 text-xl">🍂</div>
          <div className="animate-[float_5s_ease-in-out_infinite_4s] absolute bottom-40 left-1/2 text-green-600/20 text-2xl">🍃</div>
          <div className="animate-[float_10s_ease-in-out_infinite_1.5s] absolute bottom-20 right-10 text-orange-500/30 text-lg">🍂</div>
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
