
const WhatWeDoSection = () => {
  const services = [
    {
      title: "TECHNICAL ASSISTANCE",
      image: "/placeholder.svg",
      description: "Expert technical support and guidance"
    },
    {
      title: "MARKET SYSTEMS DEVELOPMENT", 
      image: "/placeholder.svg",
      description: "Building sustainable market systems"
    },
    {
      title: "ESG CONSULTANCY",
      image: "/placeholder.svg", 
      description: "Comprehensive ESG strategy and implementation"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          WHAT WE DO
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute bottom-0 left-0 right-0 bg-orange-600 text-white p-4">
                  <h3 className="font-bold text-sm">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
