
import Header from "../components/Header";
import Footer from "../components/Footer";

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-orange-600 mb-4">OUR TEAM</h1>
          </div>
        </div>
      </section>

      {/* Team Member Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img 
                  src="/lovable-uploads/bb2a5021-3862-4d72-b6cf-e99ef82fdd6b.png"
                  alt="Kangkona Sarma"
                  className="w-full rounded-lg"
                />
              </div>
              
              <div className="md:w-2/3">
                <div className="flex items-start gap-4">
                  <span className="text-6xl font-bold text-orange-600">F</span>
                  <div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      ounded by Kangkona Sarma, a seasoned expert with over 20 years of experience in the financial services industry and strategy consulting, Sidona Green brings a global perspective grounded in practical, on-the-ground implementation.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      With extensive experience in sustainable finance and impact measurement, Kangkona has worked with a diverse range of financial institutions including impact investors, MFIs, sovereign wealth funds, and asset management firms to integrate ESG considerations into their core strategies and investment decisions. Her expertise encompasses ESG reporting standards, climate taxonomies, and impact management frameworks, helping organizations navigate their sustainability journeys with practical, actionable insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Delivered Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-600 mb-8">Projects Delivered by Countries</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-orange-600">Europe (1 countries)</h3>
              <ul>
                <li className="text-gray-700 mb-2">
                  <img src="https://flagcdn.com/24x18/gb.png" alt="United Kingdom flag" className="inline-block mr-2" /> 
                  United Kingdom
                </li>
              </ul>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-orange-600">Asia (6 countries)</h3>
              <ul>
                <li className="text-gray-700 mb-2">
                  <img src="https://flagcdn.com/24x18/in.png" alt="India flag" className="inline-block mr-2" /> 
                  India
                </li>
                <li className="text-gray-700 mb-2">
                  <img src="https://flagcdn.com/24x18/np.png" alt="Nepal flag" className="inline-block mr-2" /> 
                  Nepal
                </li>
                <li className="text-gray-700 mb-2">
                  <img src="https://flagcdn.com/24x18/bt.png" alt="Bhutan flag" className="inline-block mr-2" /> 
                  Bhutan
                </li>
                <li className="text-gray-700 mb-2">
                  <img src="https://flagcdn.com/24x18/mm.png" alt="Myanmar flag" className="inline-block mr-2" /> 
                  Myanmar
                </li>
                <li className="text-gray-700 mb-2">
                  <img src="https://flagcdn.com/24x18/af.png" alt="Afghanistan flag" className="inline-block mr-2" /> 
                  Afghanistan
                </li>
                <li className="text-gray-700 mb-2">
                  <img src="https://flagcdn.com/24x18/am.png" alt="Armenia flag" className="inline-block mr-2" /> 
                  Armenia
                </li>
              </ul>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-orange-600">Africa (8 countries)</h3>
              <ul>
                <li className="text-gray-700 mb-2">
                  <img src="https://flagcdn.com/24x18/ml.png" alt="Mali flag" className="inline-block mr-2" /> 
                  Mali
                </li>
                <li className="text-gray-700 mb-2">
                  <img src="https://flagcdn.com/24x18/ng.png" alt="Nigeria flag" className="inline-block mr-2" /> 
                  Nigeria
                </li>
                <li className="text-gray-700 mb-2">
                  <img src="https://flagcdn.com/24x18/ug.png" alt="Uganda flag" className="inline-block mr-2" /> 
                  Uganda
                </li>
                <li className="text-gray-700 mb-2">
                  <img src="https://flagcdn.com/24x18/et.png" alt="Ethiopia flag" className="inline-block mr-2" /> 
                  Ethiopia
                </li>
                <li className="text-gray-700 mb-2">
                  <img src="https://flagcdn.com/24x18/ke.png" alt="Kenya flag" className="inline-block mr-2" /> 
                  Kenya
                </li>
                <li className="text-gray-700 mb-2">
                  <img src="https://flagcdn.com/24x18/tz.png" alt="Tanzania flag" className="inline-block mr-2" /> 
                  Tanzania
                </li>
                <li className="text-gray-700 mb-2">
                  <img src="https://flagcdn.com/24x18/ma.png" alt="Morocco flag" className="inline-block mr-2" /> 
                  Morocco
                </li>
                <li className="text-gray-700 mb-2">
                  <img src="https://flagcdn.com/24x18/sh.png" alt="Saint Helena flag" className="inline-block mr-2" /> 
                  Saint Helena
                </li>
              </ul>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-orange-600">North America (3 countries)</h3>
              <ul>
                <li className="text-gray-700 mb-2">
                  <img src="https://flagcdn.com/24x18/bb.png" alt="Barbados flag" className="inline-block mr-2" /> 
                  Barbados
                </li>
                <li className="text-gray-700 mb-2">
                  <img src="https://flagcdn.com/24x18/tt.png" alt="Trinidad and Tobago flag" className="inline-block mr-2" /> 
                  Trinidad and Tobago
                </li>
                <li className="text-gray-700 mb-2">
                  <img src="https://flagcdn.com/24x18/us.png" alt="United States flag" className="inline-block mr-2" /> 
                  United States
                </li>
              </ul>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-orange-600">South America (1 countries)</h3>
              <ul>
                <li className="text-gray-700 mb-2">
                  <img src="https://flagcdn.com/24x18/gy.png" alt="Guyana flag" className="inline-block mr-2" /> 
                  Guyana
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
