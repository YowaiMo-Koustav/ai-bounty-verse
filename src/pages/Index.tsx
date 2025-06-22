
import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BountyBoard } from "@/components/BountyBoard";
import { StatsSection } from "@/components/StatsSection";
import { FeaturedBounties } from "@/components/FeaturedBounties";

const Index = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
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
