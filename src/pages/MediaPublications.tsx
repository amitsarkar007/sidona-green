
import Header from "../components/Header";
import Footer from "../components/Footer";

const MediaPublications = () => {
  const publications = [
    {
      title: "Opinion: Promoting gender and climate-smart investment",
      url: "https://www.devex.com/news/sponsored/opinion-promoting-gender-and-climate-smart-investment-102072",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Exploring gender-smart investment approaches in climate finance"
    },
    {
      title: "Investment Climate Review - St Helena",
      url: "https://www.gov.uk/research-for-development-outputs/investment-climate-review-st-helena",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Government research on investment climate in St Helena"
    },
    {
      title: "Sounds a bit off track",
      url: "https://bangaloremirror.indiatimes.com/opinion/sunday-read/sounds-a-bit-off-track/articleshow/21750795.cms",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Opinion piece on transportation and urban planning"
    },
    {
      title: "Hidden from plain sight",
      url: "https://www.hindustantimes.com/travel/hidden-from-plain-sight/story-I96Wc6eSBC6vF32PmFUSIP.html",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Travel article exploring hidden destinations"
    },
    {
      title: "Pack a punch",
      url: "https://bangaloremirror.indiatimes.com/opinion/you/pack-a-punch/articleshow/21747987.cms",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Opinion piece on making impactful changes"
    },
    {
      title: "Workshop on Sustainability and Climate-related Financial Disclosures",
      url: "https://today.thefinancialexpress.com.bd/trade-market/workshop-on-sustainability-and-climate-related-financial-disclosures-1737217229",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Financial Express coverage of sustainability workshop"
    },
    {
      title: "ESG Standards and Their Importance for Turkmen Business",
      url: "https://orient.tm/en/post/84749/itse-british-expert-presented-esg-standards-and-their-importance-turkmen-business",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "British expert presentation on ESG standards in Turkmenistan"
    },
    {
      title: "SIBM Bangalore LinkedIn Post",
      url: "https://www.linkedin.com/posts/sibm-bangalore_lifeatsibmb-sibmbengaluru-mbalife-activity-7298650165920378880-7gJS/",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "SIBM Bangalore professional engagement"
    }
  ];

  const youtubeVideo = {
    title: "Sustainable Finance Discussion",
    url: "https://www.youtube.com/watch?v=_5E9ZO5n-x4",
    videoId: "_5E9ZO5n-x4",
    description: "Expert discussion on sustainable finance and ESG practices"
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-orange-600 mb-4">PUBLICATIONS & MEDIA</h1>
            <p className="text-gray-600 text-lg">
              Discover our latest insights, research, and media coverage on sustainable finance and ESG practices.
            </p>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-orange-600 mb-8">Featured Video</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeVideo.videoId}`}
                  title={youtubeVideo.title}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{youtubeVideo.title}</h3>
                <p className="text-gray-600 mb-4">{youtubeVideo.description}</p>
                <a
                  href={youtubeVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                >
                  Watch on YouTube
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-600 mb-12">Publications & Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((publication, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={publication.image} 
                    alt={publication.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                    {publication.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {publication.description}
                  </p>
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors text-sm font-medium"
                  >
                    Read Article
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MediaPublications;
