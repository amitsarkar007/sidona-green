
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

      {/* Services Hero Image */}
      <section className="relative h-[400px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-green-600 bg-opacity-40"></div>
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

            {/* Service Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-orange-600 text-white p-6 rounded-lg text-center">
                <div className="mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="font-bold">ESG Consultancy Services</h3>
              </div>
              
              <div className="bg-orange-600 text-white p-6 rounded-lg text-center">
                <div className="mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v9a2 2 0 002 2h8a2 2 0 002-2V9h-2m-4 0H9m0 0V7a2 2 0 012-2h2a2 2 0 012 2v4"/>
                  </svg>
                </div>
                <h3 className="font-bold">Impact Measurement</h3>
              </div>
              
              <div className="bg-orange-600 text-white p-6 rounded-lg text-center">
                <div className="mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  </svg>
                </div>
                <h3 className="font-bold">Responsible Tourism</h3>
              </div>
              
              <div className="bg-orange-600 text-white p-6 rounded-lg text-center">
                <div className="mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.5 3A6.5 6.5 0 0116 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 019.5 16 6.5 6.5 0 013 9.5 6.5 6.5 0 019.5 3z"/>
                  </svg>
                </div>
                <h3 className="font-bold">Climate and ESG Trainings</h3>
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
                  Visit our tourism initiative: <span className="text-orange-600 font-semibold">Gypsy Feet Travels</span>
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
