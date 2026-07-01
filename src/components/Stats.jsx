import {
    Award, Users, Bus, MapPin,
    TrendingUp, Clock, Star, CheckCircle
} from 'lucide-react';
import siteData from '../data/siteData';

// Map nama icon string ke komponen lucide-react
const iconMap = {
    Award, Users, Bus, MapPin,
    TrendingUp, Clock, Star, CheckCircle,
};

export default function Stats() {
    const { stats } = siteData;

    return (
        <section id="stats" className="bg-amber-400 py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {stats.map((stat) => {
                        const IconComponent = iconMap[stat.icon] || TrendingUp;
                        return (
                            <div
                                key={stat.id}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-14 h-14 bg-gray-900/10 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-gray-900/20 transition-colors">
                                    <IconComponent size={26} className="text-gray-900" />
                                </div>
                                <div className="text-4xl font-bold text-gray-900 leading-none mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-gray-800 font-medium text-sm">
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
