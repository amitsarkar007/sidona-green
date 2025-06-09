
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-orange-600 mb-6">
              Sidona <span className="text-green-600">Green</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are a niche consulting services company providing advisory services to help your company in its sustainability journey.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
