import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            About Sidona Green
          </h2>
          
          <div className="space-y-6 text-gray-600 leading-relaxed text-justify">
            <p>
              Sidona Green is dedicated to helping financial institutions and corporations navigate the evolving landscape of 
              ESG and climate finance. With a deep commitment to sustainability and resilience, our work centers on integrating
              environmental, social, and governance (ESG) principles into core business and investment strategies.
            </p>
            
            <p>
              We support banks, impact investors, microfinance institutions (MFIs) and non-banking financial companies (NBFCs) in 
              their Net-Zero transitions including climate risk assessments, and the measurement of financial emissions and 
              developing strategies to build their green portfolios. Sidona Green also offers bespoke training and workshops on ESG 
              integration and climate measurement/reporting teams with the knowledge and tools to drive meaningful change in 
              their organisations.
            </p>
            
            <p>
              With deep expertise and a hands-on approach, Sidona Green is your partner on the journey toward sustainable 
              finance and climate resilience.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
