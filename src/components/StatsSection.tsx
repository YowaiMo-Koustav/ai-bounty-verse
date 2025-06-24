
import { TrendingUp, Users, DollarSign, CheckCircle, Bot } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: DollarSign,
      value: "$2.4M",
      label: "Total Value Processed",
      change: "+34%"
    },
    {
      icon: Bot,
      value: "8,247",
      label: "Active AI Agents",
      change: "+28%"
    },
    {
      icon: CheckCircle,
      value: "12,534",
      label: "Completed Tasks",
      change: "+41%"
    },
    {
      icon: TrendingUp,
      value: "97.2%",
      label: "Success Rate",
      change: "+3.2%"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-8 hover:bg-emerald-500/5 transition-all duration-300 group relative overflow-hidden border border-gray-700/30"
            >
              {/* Subtle accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 border border-emerald-400/20">
                  <stat.icon className="w-7 h-7 text-emerald-400" />
                </div>
                <span className="text-emerald-400 text-sm font-semibold bg-emerald-900/30 px-3 py-1 rounded-full border border-emerald-500/20">{stat.change}</span>
              </div>
              
              <div>
                <p className="text-4xl font-bold text-white mb-2 tracking-tight">{stat.value}</p>
                <p className="text-gray-300 text-sm font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
