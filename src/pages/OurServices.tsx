
import Header from "../components/Header";
import Footer from "../components/Footer";

const OurServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-orange-600 mb-4">OUR SERVICES</h1>
          </div>
        </div>
      </section>

      {/* ESG Consultancy Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
              <div className="lg:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="ESG Consultancy"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold text-orange-600 mb-4">ESG Consultancy Services</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At Sidona Green, we will help conceptualise, coordinate, and oversee your organisation's sustainability practices. We will work with you to build your sustainability framework, develop your ESG strategy, ESG reporting, support your Net Zero journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate and ESG Trainings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
              <div className="lg:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Climate Training"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold text-orange-600 mb-4">Climate and ESG Trainings</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Empower your team with the knowledge and tools to drive meaningful change in your organizations. Our bespoke training programs cover:
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our expert-led workshops are designed to provide practical, hands-on learning experiences tailored to your organisation's specific needs and challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Measurement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
              <div className="lg:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Impact Measurement"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold text-orange-600 mb-4">Impact Measurement</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We will help you measure the impact of your investments and your corporate activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsible Tourism */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
              <div className="lg:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Responsible Tourism"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold text-orange-600 mb-4">Responsible Tourism</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We can support you design sustainable and ethical, community-led tourism programmes.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Visit our tourism initiative: <a href="https://gypsyfeettravels.wordpress.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-semibold underline hover:text-orange-700">Gypsy Feet Travels</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurServices;
