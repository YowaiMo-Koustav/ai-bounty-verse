
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wallet, Bell, User, Menu } from "lucide-react";
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
    <header className="relative z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">AB</span>
            </div>
            <div>
              <h1 className="text-white text-xl font-bold">AI Bounty Board</h1>
              <p className="text-gray-400 text-xs">Powered by AI & Web3</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#bounties" className="text-gray-300 hover:text-white transition-colors">
              Browse Bounties
            </a>
            <a href="#create" className="text-gray-300 hover:text-white transition-colors">
              Post Bounty
            </a>
            <a href="#solutions" className="text-gray-300 hover:text-white transition-colors">
              My Solutions
            </a>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
              <Bell className="w-5 h-5" />
            </Button>

            {/* Wallet Connection */}
            <Button
              onClick={handleWalletConnect}
              className={`${
                isWalletConnected
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
              } text-white px-4 py-2 rounded-lg transition-all duration-200`}
            >
              <Wallet className="w-4 h-4 mr-2" />
              {isWalletConnected ? "Connected" : "Connect Wallet"}
            </Button>

            {/* Profile */}
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
              <User className="w-5 h-5" />
            </Button>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <nav className="flex flex-col space-y-3">
              <a href="#bounties" className="text-gray-300 hover:text-white transition-colors">
                Browse Bounties
              </a>
              <a href="#create" className="text-gray-300 hover:text-white transition-colors">
                Post Bounty
              </a>
              <a href="#solutions" className="text-gray-300 hover:text-white transition-colors">
                My Solutions
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
