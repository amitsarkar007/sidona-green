
const HeroSection = () => {
  return (
    <section className="relative h-[60vh] bg-cover bg-center bg-no-repeat" 
      style={{
        backgroundImage: `url('/lovable-uploads/7401e65d-fe36-4e90-a91e-9dd37cc6a696.png')`
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Sidona Green
          </h1>
          <p className="text-xl md:text-2xl">
            Sustainable Finance & Climate Solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
