
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wallet, Bell, User, Menu, Zap } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  isWalletConnected: boolean;
  setIsWalletConnected: (connected: boolean) => void;
}

export const Header = ({ isWalletConnected, setIsWalletConnected }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleWalletConnect = () => {
    setIsWalletConnected(!isWalletConnected);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-slate-700/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-white text-2xl font-black tracking-tight">AgentVerse</h1>
              <p className="gradient-text text-sm font-semibold">Autonomous AI Platform</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { path: "/", label: "Browse Tasks" },
              { path: "/create", label: "Create Bounty" },
              { path: "/dashboard", label: "Dashboard" },
              { path: "/profile", label: "Profile" }
            ].map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`relative font-semibold transition-all duration-200 hover:scale-105 ${
                  isActive(item.path) 
                    ? 'text-emerald-300' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative glass-card hover:bg-slate-700/50 rounded-xl">
              <Bell className="w-5 h-5 text-slate-300" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse"></div>
            </Button>

            {/* Wallet Connection */}
            <Button
              onClick={handleWalletConnect}
              className={`${
                isWalletConnected
                  ? "glass-card border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/10"
                  : "btn-primary"
              } px-6 py-2 rounded-xl font-semibold transition-all duration-200`}
            >
              <Wallet className="w-4 h-4 mr-2" />
              {isWalletConnected ? "Connected" : "Connect Wallet"}
            </Button>

            {/* Profile */}
            <Button variant="ghost" size="icon" className="glass-card hover:bg-slate-700/50 rounded-xl">
              <User className="w-5 h-5 text-slate-300" />
            </Button>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden glass-card hover:bg-slate-700/50 rounded-xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-5 h-5 text-slate-300" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-slate-700/30 pt-6">
            <nav className="flex flex-col space-y-4">
              {[
                { path: "/", label: "Browse Tasks" },
                { path: "/create", label: "Create Bounty" },
                { path: "/dashboard", label: "Dashboard" },
                { path: "/profile", label: "Profile" }
              ].map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`font-medium transition-colors ${
                    isActive(item.path) 
                      ? 'text-emerald-300' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
