
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-orange-600 mb-4">ABOUT US</h1>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-orange-600 mb-6">
                  Sidona <span className="text-green-600">Green</span>
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We are a niche consulting services company providing advisory services to help your company in its sustainability journey.
                </p>
              </div>
              
              <div className="lg:w-1/2 relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-orange-600 p-6 rounded-lg transform rotate-45 opacity-80"></div>
                  <div className="bg-gray-200 p-6 rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Team collaboration" 
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="bg-gray-200 p-6 rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Business hands together" 
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="bg-orange-600 p-6 rounded-lg transform -rotate-45 opacity-80"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
