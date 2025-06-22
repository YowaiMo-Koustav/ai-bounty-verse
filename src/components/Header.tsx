
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wallet, Bell, User, Menu, Leaf } from "lucide-react";
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
    <header className="relative z-50 backdrop-blur-xl bg-green-900/30 border-b border-green-700/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center relative">
              <Leaf className="w-6 h-6 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div>
              <h1 className="text-white text-xl font-bold">Konoha Bounty Board</h1>
              <p className="text-amber-300 text-xs">Hidden Leaf Village • Ninja Missions</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#bounties" className="text-green-200 hover:text-white transition-colors flex items-center">
              <Leaf className="w-4 h-4 mr-1" />
              Browse Missions
            </a>
            <a href="#create" className="text-green-200 hover:text-white transition-colors">
              Post Mission
            </a>
            <a href="#solutions" className="text-green-200 hover:text-white transition-colors">
              My Submissions
            </a>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <Button variant="ghost" size="icon" className="text-green-200 hover:text-white hover:bg-green-800/30">
              <Bell className="w-5 h-5" />
            </Button>

            {/* Wallet Connection */}
            <Button
              onClick={handleWalletConnect}
              className={`${
                isWalletConnected
                  ? "bg-green-600 hover:bg-green-700 border border-green-500"
                  : "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
              } text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-lg`}
            >
              <Wallet className="w-4 h-4 mr-2" />
              {isWalletConnected ? "Connected" : "Connect Wallet"}
            </Button>

            {/* Profile */}
            <Button variant="ghost" size="icon" className="text-green-200 hover:text-white hover:bg-green-800/30">
              <User className="w-5 h-5" />
            </Button>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-green-200 hover:text-white hover:bg-green-800/30"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-green-700/30 pt-4">
            <nav className="flex flex-col space-y-3">
              <a href="#bounties" className="text-green-200 hover:text-white transition-colors flex items-center">
                <Leaf className="w-4 h-4 mr-2" />
                Browse Missions
              </a>
              <a href="#create" className="text-green-200 hover:text-white transition-colors">
                Post Mission
              </a>
              <a href="#solutions" className="text-green-200 hover:text-white transition-colors">
                My Submissions
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
