import Header from "../components/Header";
import Footer from "../components/Footer";

const MediaPublications = () => {
    // Added `date` field (ISO 8601) to each publication and sorted descending by date (latest first)
    const publications = [
      {
        title: "ICC Biz Live - Indian Chamber of Commerce Live Show",
        url: "https://www.linkedin.com/posts/indianchamber_iccbizlive-indianchamberofcommerce-liveshow-activity-7335993503350431744-qVPp/",
        image: "/images/1749037146453.jpeg",
        description: "Indian Chamber of Commerce BizLive show coverage",
        date: "2025-06-06"
      },
      {
        title: "ESG Standards and Their Importance for Turkmen Business",
        url: "https://orient.tm/en/post/84749/itse-british-expert-presented-esg-standards-and-their-importance-turkmen-business",
        image: "https://orient.tm/storage/app/uploads/public/4e1/6de/fbf/thumb__693_0_0_0_auto.jpg",
        description: "British expert presentation on ESG standards in Turkmenistan",
        date: "2025-05-01"
      },
      {
        title: "Practical Results: QACIS 2025 Agreements Implementation, International Standards Were Signed",
        url: "https://orient.tm/en/post/84751/practical-results-qacis-2025-agreements-implementation-international-standards-were-signed",
        image: "/images/68129dc39794f911762367.jpg",
        description: "Coverage of QACIS 2025 agreements and the signing of international standards",
        date: "2025-04-30"
      },
      {
        title: "SIBM Bangalore LinkedIn Post",
        url: "https://www.linkedin.com/posts/sibm-bangalore_lifeatsibmb-sibmbengaluru-mbalife-activity-7298650165920378880-7gJS/",
        image: "/images/1740131153413.jpeg",
        description: "SIBM Bangalore professional engagement",
        date: "2025-02-22"
      },
      {
        title: "Workshop on Sustainability and Climate-related Financial Disclosures",
        url: "https://today.thefinancialexpress.com.bd/trade-market/workshop-on-sustainability-and-climate-related-financial-disclosures-1737217229",
        image: "https://today.thefinancialexpress.com.bd/public/uploads/P20_EBL_Press_Release-Pic.jpg",
        description: "Financial Express coverage of sustainability workshop",
        date: "2025-01-19"
      },
      {
        title: "Opinion: Promoting gender and climate-smart investment",
        url: "https://www.devex.com/news/sponsored/opinion-promoting-gender-and-climate-smart-investment-102072",
        image: "https://res.cloudinary.com/devex/image/fetch/c_scale,f_auto,q_auto,w_720/https://lh6.googleusercontent.com/3yGOnppggX9az_6hL_P5fivyCrsRRfKryfHV9K358SAG7SyhfsF80YxSLpljJA5mLpXE12RF7x5CcoKAHQ44Nzj0eKlaC8O4ypuCliZrWBmbjAetA4WX3TDyApMnZZVFdgQA6e5_",
        description: "Exploring gender-smart investment approaches in climate finance",
        date: "2021-11-16"
      },
      {
        title: "Investment Climate Review - St Helena",
        url: "https://www.gov.uk/research-for-development-outputs/investment-climate-review-st-helena",
        image: "/images/govuk.jpg",
        description: "Government research on investment climate in St Helena",
        date: "2019-03-06"
      },
      {
        title: "Pack a punch",
        url: "https://bangaloremirror.indiatimes.com/opinion/you/pack-a-punch/articleshow/21747987.cms",
        image: "https://static.toiimg.com/thumb/msid-21747988,width-400,resizemode-4/21747988.jpg",
        description: "Opinion piece on making impactful changes",
        date: "2013-08-11"
      },
      {
        title: "Sounds a bit off track",
        url: "https://bangaloremirror.indiatimes.com/opinion/sunday-read/sounds-a-bit-off-track/articleshow/21750795.cms",
        image: "/images/bangmirror1.jpg",
        description: "Opinion piece on transportation and urban planning",
        date: "2010-11-07"
      },
      {
        title: "Hidden from plain sight",
        url: "https://www.hindustantimes.com/travel/hidden-from-plain-sight/story-I96Wc6eSBC6vF32PmFUSIP.html",
        image: "/images/ht.jpg",
        description: "Travel article exploring hidden destinations",
        date: "2009-12-07"
      },
    ];

  const youtubeVideos = [
    {
      title: "Webinar - Measuring Emissions: The Caspian Debt Experience",
      url: "https://www.youtube.com/watch?v=_5E9ZO5n-x4",
      videoId: "_5E9ZO5n-x4",
      description: "In this insightful webinar, we explore the critical aspects of assessing financed emissions"
    },
    {
      title: "ICC Biz Live - Episode 17",
      url: "https://www.youtube.com/watch?v=BOwNLayYKf0",
      videoId: "BOwNLayYKf0",
      description: "ICC Biz Live, a knowledge series by Indian Chamber of Commerce, Episode 17"
    }
  ];

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

      {/* YouTube Videos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-orange-600 mb-8">Videos</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {youtubeVideos.map((video, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{video.title}</h3>
                    <p className="text-gray-600 mb-4">{video.description}</p>
                    <a
                      href={video.url}
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
              ))}
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
