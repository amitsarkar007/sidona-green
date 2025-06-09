
const HeroSection = () => {
  return (
    <section className="relative h-[60vh] bg-cover bg-center bg-no-repeat" 
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3648&q=80')`
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
