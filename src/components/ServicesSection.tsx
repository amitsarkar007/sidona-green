
import { Users, BarChart3, MapPin, TrendingUp } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "ESG Consultancy Services",
      description: "Comprehensive ESG strategy development and implementation"
    },
    {
      icon: BarChart3,
      title: "Impact Measurement",
      description: "Measuring and reporting environmental and social impact"
    },
    {
      icon: MapPin,
      title: "Responsible Tourism",
      description: "Sustainable tourism development and consultation"
    },
    {
      icon: TrendingUp,
      title: "Climate and ESG Trainings",
      description: "Expert-led workshops and training programs"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          OUR SERVICES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <div key={index} className="bg-orange-600 text-white p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <service.icon size={48} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-sm mb-4 opacity-90">
                {service.description}
              </p>
              <a 
                href="/our-services"
                className="bg-white text-orange-600 px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors inline-block"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
