
const TeamSection = () => {
  return (
    <section id="team" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          OUR TEAM
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 flex-shrink-0">
              <img 
                src="/images/profile.png"
                alt="Kongkona Sarma"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            
            <div className="flex-1">
              <div className="flex items-start gap-4">
                <span className="text-6xl font-bold text-orange-600">K</span>
                <div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    ongkona Sarma is recognised with 20 years of experience working in the financial strategy, 
                    consulting sector. Her experience spans from designing for delivering financial advisory services, 
                    leading climate programmes to sustainable finance and impact measurement & management.
                  </p>
                  <a href="/team" className="text-orange-600 font-medium hover:underline">
                    Read More...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
