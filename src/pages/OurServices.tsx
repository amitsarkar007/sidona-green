
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
                We help you conceptualize, coordinate, and implement impactful ESG initiatives tailored to your industry and goals. Our services include:
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>
                    Building your ESG framework aligned with global standards (e.g., GRI, SASB, TCFD)
                  </li>
                  <li>
                    Crafting a future-ready ESG strategy that drives long-term value and resilience
                  </li>
                  <li>
                    Enabling robust ESG reporting with clear metrics, disclosures, and stakeholder alignment
                  </li>
                  <li>
                    Supporting your Net Zero journey, including carbon accounting, reduction roadmaps, and transition planning
                  </li>
                </ul>
                <span>
                  Whether you’re at the beginning of your sustainability journey or looking to elevate your impact, we bring expertise, insight, and care to every step.
                </span>
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
                We empower your teams to drive real change through expert-led, hands-on learning. Our customized training programs are designed to embed sustainability thinking into every part of your organization.
                </p>
                <p><span className="font-semibold">Key focus areas include:</span>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>ESG Strategy &amp; Integration</li>
                  <li>Climate Risk &amp; Resilience Assessment</li>
                  <li>Sustainable Finance Fundamentals</li>
                  <li>Net-Zero Transition Planning</li>
                  <li>Impact Measurement &amp; Reporting</li>
                </ul>
                Tailored to your industry and challenges, our workshops turn ESG from a checklist into a lived capability.
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
                  We will help you move beyond good intentions by measuring the real-world outcomes of your sustainability efforts.

                  <ul className="list-disc pl-6 mb-4 text-gray-600">
                    <li>Track the social and environmental impact of your investments</li>
                    <li>Evaluate how your core business operations align with ESG goals</li>
                    <li>Design tailored frameworks, metrics, and tools for clarity and accountability</li>
                  </ul>
                  Whether it’s carbon reduction, community upliftment, or governance reform, we turn your data into meaningful insights—bringing confidence and credibility to your impact story.
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
