
import { TrendingUp, Users, DollarSign, CheckCircle } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: DollarSign,
      value: "$127,500",
      label: "Total Bounties Paid",
      change: "+23%"
    },
    {
      icon: Users,
      value: "2,847",
      label: "Active Contributors",
      change: "+18%"
    },
    {
      icon: CheckCircle,
      value: "1,234",
      label: "Completed Bounties",
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
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <stat.icon className="w-6 h-6 text-purple-400" />
                </div>
                <span className="text-green-400 text-sm font-medium">{stat.change}</span>
              </div>
              
              <div>
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
