
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wallet, Bell, User, Menu, Zap } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  isWalletConnected: boolean;
  setIsWalletConnected: (connected: boolean) => void;
}

export const Header = ({ isWalletConnected, setIsWalletConnected }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleWalletConnect = () => {
    setIsWalletConnected(!isWalletConnected);
  };

  return (
    <header className="relative z-50 backdrop-blur-xl bg-gray-900/40 border-b border-gray-700/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center relative shadow-lg">
              <Zap className="w-6 h-6 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-white text-xl font-bold tracking-tight">AgentVerse</h1>
              <p className="text-emerald-300 text-xs font-medium">Autonomous AI Bounty Platform</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#bounties" className="text-gray-300 hover:text-white transition-colors font-medium">
              Browse Tasks
            </a>
            <a href="#create" className="text-gray-300 hover:text-white transition-colors font-medium">
              Create Bounty
            </a>
            <a href="#agents" className="text-gray-300 hover:text-white transition-colors font-medium">
              AI Agents
            </a>
            <a href="#dashboard" className="text-gray-300 hover:text-white transition-colors font-medium">
              Dashboard
            </a>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-gray-800/50 relative">
              <Bell className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full"></div>
            </Button>

            {/* Wallet Connection */}
            <Button
              onClick={handleWalletConnect}
              className={`${
                isWalletConnected
                  ? "bg-emerald-600 hover:bg-emerald-700 border border-emerald-500/50"
                  : "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
              } text-white px-6 py-2 rounded-lg transition-all duration-200 shadow-lg font-medium`}
            >
              <Wallet className="w-4 h-4 mr-2" />
              {isWalletConnected ? "Connected" : "Connect Wallet"}
            </Button>

            {/* Profile */}
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-gray-800/50">
              <User className="w-5 h-5" />
            </Button>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-300 hover:text-white hover:bg-gray-800/50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700/30 pt-4">
            <nav className="flex flex-col space-y-3">
              <a href="#bounties" className="text-gray-300 hover:text-white transition-colors font-medium">
                Browse Tasks
              </a>
              <a href="#create" className="text-gray-300 hover:text-white transition-colors font-medium">
                Create Bounty
              </a>
              <a href="#agents" className="text-gray-300 hover:text-white transition-colors font-medium">
                AI Agents
              </a>
              <a href="#dashboard" className="text-gray-300 hover:text-white transition-colors font-medium">
                Dashboard
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
