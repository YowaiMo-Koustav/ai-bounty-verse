
import { TrendingUp, Users, DollarSign, CheckCircle, Leaf } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: DollarSign,
      value: "127,500 Ryō",
      label: "Total Mission Rewards",
      change: "+23%"
    },
    {
      icon: Users,
      value: "2,847",
      label: "Active Ninja",
      change: "+18%"
    },
    {
      icon: CheckCircle,
      value: "1,234",
      label: "Completed Missions",
      change: "+31%"
    },
    {
      icon: TrendingUp,
      value: "94%",
      label: "Success Rate",
      change: "+2%"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-green-800/20 backdrop-blur-sm border border-green-600/30 rounded-2xl p-6 hover:bg-green-700/30 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Leaf decoration */}
              <div className="absolute top-2 right-2 opacity-20">
                <Leaf className="w-6 h-6 text-green-400 transform rotate-12" />
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 border border-orange-400/20">
                  <stat.icon className="w-6 h-6 text-orange-300" />
                </div>
                <span className="text-green-400 text-sm font-medium bg-green-900/30 px-2 py-1 rounded">{stat.change}</span>
              </div>
              
              <div>
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-green-200 text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
