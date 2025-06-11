import { useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type L from "leaflet";

// Extend Window interface for Leaflet
declare global {
  interface Window {
    L: typeof L;
  }
}

const About = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);

  useEffect(() => {
    // Dynamically load Leaflet CSS and JS
    if (!document.querySelector('link[href*="leaflet"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet/dist/leaflet.css';
      document.head.appendChild(link);
    }

    if (!window.L && !document.querySelector('script[src*="leaflet"]')) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet/dist/leaflet.js';
      script.onload = initMap;
      document.head.appendChild(script);
    } else if (window.L) {
      initMap();
    }

    function initMap() {
      if (!mapContainer.current || map.current) return;

      map.current = window.L.map(mapContainer.current).setView([20, 0], 2);
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map.current);

      const locations = [
        { name: "United Kingdom", lat: 54.7023545, lng: -3.2765753 },
        { name: "India", lat: 22.3511148, lng: 78.6677428 },
        { name: "Nepal", lat: 28.3780464, lng: 83.9999901 },
        { name: "Bhutan", lat: 27.549511, lng: 90.5119273 },
        { name: "Myanmar", lat: 17.1750495, lng: 95.9999652 },
        { name: "Afghanistan", lat: 33.7680065, lng: 66.2385139 },
        { name: "Armenia", lat: 40.7696272, lng: 44.6736646 },
        { name: "Mali", lat: 16.3700359, lng: -2.2900239 },
        { name: "Nigeria", lat: 9.6000359, lng: 7.9999721 },
        { name: "Uganda", lat: 1.5333554, lng: 32.2166578 },
        { name: "Ethiopia", lat: 10.2116702, lng: 38.6521203 },
        { name: "Kenya", lat: 1.4419683, lng: 38.4313975 },
        { name: "Tanzania", lat: -6.5247123, lng: 35.7878438 },
        { name: "Morocco", lat: 31.1728205, lng: -7.3362482 },
        { name: "Barbados", lat: 13.1500331, lng: -59.5250305 },
        { name: "Trinidad and Tobago", lat: 10.7466905, lng: -61.0840075 },
        { name: "Guyana", lat: 4.8417097, lng: -58.6416891 },
        { name: "United States", lat: 39.7837304, lng: -100.445882 },
        { name: "Saint Helena, Ascension and Tristan da Cunha", lat: -37.2465, lng: -12.4870385 },
        { name: "Benin", lat: 9.5293472, lng: 2.2584408 },
        { name: "Bangladesh", lat: 24.4769288, lng: 90.2934413 },
        { name: "Ghana", lat: 8.0300284, lng: -1.0800271 },
        { name: "Qatar", lat: 25.3336984, lng: 51.2295295 },
        { name: "Saint Lucia", lat: 13.8250489, lng: -60.975036 },
        { name: "South Africa", lat: -28.8166236, lng: 24.991639 },
        { name: "Turkmenistan", lat: 39.3763807, lng: 59.3924609 }
      ];

      locations.forEach(function(location) {
        window.L.marker([location.lat, location.lng]).addTo(map.current)
          .bindPopup(location.name);
      });
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-orange-600 mb-4">ABOUT</h1>
            <p className="text-gray-600 text-lg">
              Learn more about my background, experience, and commitment to advancing sustainable finance and ESG practices around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Team Member Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Founder</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img 
                  src="/images/profile.png"
                  alt="Kongkona Sarma"
                  className="w-full rounded-lg"
                />
              </div>
              
              <div className="md:w-2/3">
                <div className="flex items-start gap-4">
                  <span className="text-6xl font-bold text-orange-600">F</span>
                  <div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      ounded by Kongkona Sarma, a seasoned expert with over 20 years of experience in the financial services industry and strategy consulting, Sidona Green brings a global perspective grounded in practical, on-the-ground implementation.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      With extensive experience in sustainable finance and impact measurement, Kongkona has worked with a diverse range of financial institutions including impact investors, MFIs, sovereign wealth funds, and asset management firms to integrate ESG considerations into their core strategies and investment decisions. Her expertise encompasses ESG reporting standards, climate taxonomies, and impact management frameworks, helping organizations navigate their sustainability journeys with practical, actionable insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-600 mb-8">International Engagements</h2>
          <div 
            ref={mapContainer} 
            className="w-full h-96 rounded-lg shadow-lg"
            style={{ minHeight: '400px' }}
          />
        </div>
      </section>

      {/* Projects Delivered Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-orange-600">Europe (1 country)</h3>
              <ul>
                <li className="text-gray-700 mb-2">
                  <img src="https://flagcdn.com/24x18/gb.png" alt="United Kingdom flag" className="inline-block mr-2" /> 
                  United Kingdom
                </li>
              </ul>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-orange-600">Asia (9 countries)</h3>
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
                <li className="text-gray-700 mb-2">
                  <img src="https://flagcdn.com/24x18/bd.png" alt="Bangladesh flag" className="inline-block mr-2" /> 
                  Bangladesh
                </li>
                <li className="text-gray-700 mb-2">
                  <img src="https://flagcdn.com/24x18/qa.png" alt="Qatar flag" className="inline-block mr-2" /> 
                  Qatar
                </li>
                <li className="text-gray-700 mb-2">
                  <img src="https://flagcdn.com/24x18/tm.png" alt="Turkmenistan flag" className="inline-block mr-2" /> 
                  Turkmenistan
                </li>
              </ul>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-orange-600">Africa (11 countries)</h3>
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
                  Saint Helena, Ascension and Tristan da Cunha
                </li>
                <li className="text-gray-700 mb-2">
                  <img src="https://flagcdn.com/24x18/bj.png" alt="Benin flag" className="inline-block mr-2" /> 
                  Benin
                </li>
                <li className="text-gray-700 mb-2">
                  <img src="https://flagcdn.com/24x18/gh.png" alt="Ghana flag" className="inline-block mr-2" /> 
                  Ghana
                </li>
                <li className="text-gray-700 mb-2">
                  <img src="https://flagcdn.com/24x18/za.png" alt="South Africa flag" className="inline-block mr-2" /> 
                  South Africa
                </li>
              </ul>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-orange-600">North America (4 countries)</h3>
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
                <li className="text-gray-700 mb-2">
                  <img src="https://flagcdn.com/24x18/lc.png" alt="Saint Lucia flag" className="inline-block mr-2" /> 
                  Saint Lucia
                </li>
              </ul>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-orange-600">South America (1 country)</h3>
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

export default About;
