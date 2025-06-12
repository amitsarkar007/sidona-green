import { Link } from "react-router-dom";

const FounderSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            FOUNDER
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Founder Image */}
            <div className="flex-shrink-0">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-gray-200 shadow-lg">
                <img 
                  src="/images/profile.png" 
                  alt="Kongkona Sarma - Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex items-center gap-6 lg:gap-8">
              {/* Large K Logo */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-orange-600 flex items-center justify-center">
                  <span className="text-white text-4xl lg:text-5xl font-bold">K</span>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  ongkona Sarma is an economist with 20 years of experience working in the financial strategy 
                  consulting sector. Her experience spans from designing to delivering tailored advisory services 
                  to Financial Institutions in sustainable finance and impact measurement & management.
                </p>
                
                <Link 
                  to="/about"
                  className="text-orange-600 font-medium hover:text-orange-700 transition-colors text-lg"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection; 