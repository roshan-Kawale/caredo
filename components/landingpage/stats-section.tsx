const stats = [
    { number: "150+", label: "Verified Doctors" },
    { number: "50K+", label: "Happy Patients" },
    { number: "25+", label: "Specialties" },
    { number: "15+", label: "Cities" },
]

export function StatsSection() {
    return (
        <section className="bg-teal-600 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
                            <div className="text-teal-100 text-lg">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}